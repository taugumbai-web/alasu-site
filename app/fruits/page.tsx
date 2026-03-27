"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { BurgerMenu, useLang } from "../components/shared";
import LanguageSelector from "../components/LanguageSelector";

/* ═══════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════ */
const GAME_DURATION = 30;   // total seconds
const FRUIT_R       = 44;   // fruit radius px (bigger = easier to hit)
const MAX_MISSES    = 3;    // 3 lives
const WIN_SURE      = 10;   // 1 банка лимонати
const WIN_DOUBLE    = 20;   // 2 банки лимонати
const COOLDOWN_MS   = 30 * 60 * 1000; // 30 минут
const LS_KEY        = "alasu_last_play_fruits";
const GRAVITY       = 0.15; // slower fall

type Screen   = "start" | "playing" | "won1" | "won2" | "lose";
type FruitKind = "lemon" | "pear" | "kiwi" | "pineapple" | "melon" | "rotten";

interface FruitDef { emoji: string; r: number; g: number; b: number; }
const DEFS: Record<FruitKind, FruitDef> = {
    lemon:     { emoji: "🍋", r: 253, g: 224, b: 71  },
    pear:      { emoji: "🍐", r: 134, g: 239, b: 172 },
    kiwi:      { emoji: "🥝", r: 101, g: 163, b: 13  },
    pineapple: { emoji: "🍍", r: 251, g: 191, b: 36  },
    melon:     { emoji: "🍈", r: 163, g: 230, b: 53  },
    rotten:    { emoji: "💀", r: 55,  g: 65,  b: 81  },
};
const GOOD: FruitKind[] = ["lemon", "pear", "kiwi", "pineapple", "melon"];

interface Fruit {
    id: number; kind: FruitKind;
    x: number; y: number; vx: number; vy: number;
    rot: number; rotSpeed: number;
    sliced: boolean; alpha: number; splitDx: number;
}
interface Particle {
    x: number; y: number; vx: number; vy: number;
    alpha: number; r: number; ri: number; gi: number; bi: number;
}
interface BladePt { x: number; y: number; t: number; }
interface ComboPop { text: string; x: number; y: number; alpha: number; vy: number; }

/* ── line-circle intersection ── */
function hits(x1: number, y1: number, x2: number, y2: number, cx: number, cy: number, cr: number): boolean {
    const dx = x2 - x1, dy = y2 - y1;
    const fx = x1 - cx, fy = y1 - cy;
    const a = dx * dx + dy * dy;
    if (a < 0.001) return fx * fx + fy * fy <= cr * cr;
    const b = 2 * (fx * dx + fy * dy);
    const c = fx * fx + fy * fy - cr * cr;
    const disc = b * b - 4 * a * c;
    if (disc < 0) return false;
    const sd = Math.sqrt(disc);
    const t1 = (-b - sd) / (2 * a);
    const t2 = (-b + sd) / (2 * a);
    return (t1 >= 0 && t1 <= 1) || (t2 >= 0 && t2 <= 1) || (t1 < 0 && t2 > 1);
}

/* ── draw one fruit circle (called from game loop) ── */
function drawFruit(
    ctx: CanvasRenderingContext2D,
    def: FruitDef, r: number, alpha: number,
    x: number, y: number, rot: number,
    sliced: boolean, splitDx: number,
) {
    ctx.save();
    ctx.globalAlpha = alpha;

    const half = (ox: number, orot: number) => {
        ctx.save();
        ctx.translate(x + ox, y);
        ctx.rotate(orot);
        // glow
        ctx.shadowColor = `rgba(${def.r},${def.g},${def.b},0.75)`;
        ctx.shadowBlur = 18;
        // body
        const g = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.08, 0, 0, r);
        g.addColorStop(0,   `rgba(${def.r},${def.g},${def.b},1)`);
        g.addColorStop(0.7, `rgba(${def.r},${def.g},${def.b},0.8)`);
        g.addColorStop(1,   `rgba(${def.r},${def.g},${def.b},0.3)`);
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.shadowBlur = 0;
        // specular
        ctx.beginPath();
        ctx.ellipse(-r * 0.28, -r * 0.3, r * 0.2, r * 0.12, -0.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.38)";
        ctx.fill();
        // emoji
        ctx.font = `${Math.round(r * 1.15)}px system-ui`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(def.emoji, 0, 0);
        ctx.restore();
    };

    if (sliced) {
        half(-splitDx, rot - 0.3);
        half( splitDx, rot + 0.3);
    } else {
        half(0, rot);
    }

    ctx.restore();
}

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function PlayPage() {
    /* ── UI state ── */
    const [screen, setScreen]       = useState<Screen>("start");
    const [score,  setScore]        = useState(0);   // sliced count
    const [misses, setMisses]       = useState(0);
    const [timeLeft, setTimeLeft]   = useState(GAME_DURATION);
    const [promoCode, setPromoCode] = useState<string | null>(null);
    const [codeLoading, setCL]      = useState(false);
    const [copied, setCopied]       = useState(false);
    const [cooldown, setCooldown]   = useState(0);
    const [menuOpen, setMenuOpen]   = useState(false);
    const [lang, setLang]           = useLang();

    /* ── canvas size ── */
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [size, setSize] = useState({ w: 390, h: 700 });
    useEffect(() => {
        const upd = () => setSize({ w: window.innerWidth, h: window.innerHeight });
        upd();
        window.addEventListener("resize", upd);
        return () => window.removeEventListener("resize", upd);
    }, []);

    /* ── cooldown polling ── */
    useEffect(() => {
        const tick = () => {
            const last = parseInt(localStorage.getItem(LS_KEY) ?? "0", 10);
            setCooldown(Math.max(0, Math.ceil((last + COOLDOWN_MS - Date.now()) / 1000)));
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    /* ── mutable game refs ── */
    const fruits     = useRef<Fruit[]>([]);
    const particles  = useRef<Particle[]>([]);
    const blade      = useRef<BladePt[]>([]);
    const comboPopR  = useRef<ComboPop | null>(null);
    const activeR    = useRef(false);
    const startTsR   = useRef(0);
    const elapsedR   = useRef(0);
    const slicedR    = useRef(0);
    const missR      = useRef(0);
    const comboR     = useRef(0);
    const lastSliceR = useRef(0);
    const nextSpawnR = useRef(0);
    const fruitIdR   = useRef(0);
    const animIdR    = useRef(0);
    const screenR    = useRef<Screen>("start");

    /* ── fetch promo on win ── */
    useEffect(() => {
        if (screen !== "won1" && screen !== "won2") return;
        const bottles = screen === "won2" ? 2 : 1;
        setCL(true);
        fetch("/api/game/win", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ time: slicedR.current, bottles, product: "lemonade" }),
        })
            .then(r => r.json())
            .then(d => { if (d.code) setPromoCode(d.code); })
            .catch(() => {})
            .finally(() => setCL(false));
    }, [screen]);

    /* ── copy code ── */
    const copyCode = useCallback(() => {
        if (!promoCode) return;
        const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(promoCode).then(done).catch(() => fb());
        } else fb();
        function fb() {
            const el = document.createElement("textarea");
            el.value = promoCode!;
            el.setAttribute("readonly", "");
            el.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0;";
            document.body.appendChild(el);
            el.focus(); el.select();
            el.setSelectionRange(0, promoCode!.length);
            try { document.execCommand("copy"); done(); } catch {}
            document.body.removeChild(el);
        }
    }, [promoCode]);

    /* ── blade tracking ── */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const add = (cx: number, cy: number) => {
            if (!activeR.current) return;
            const rect = canvas.getBoundingClientRect();
            const now = performance.now();
            blade.current.push({ x: cx - rect.left, y: cy - rect.top, t: now });
            blade.current = blade.current.filter(p => now - p.t < 130);
        };
        const onM = (e: MouseEvent) => add(e.clientX, e.clientY);
        const onT = (e: TouchEvent) => { e.preventDefault(); add(e.touches[0].clientX, e.touches[0].clientY); };
        canvas.addEventListener("mousemove", onM);
        canvas.addEventListener("touchmove", onT, { passive: false });
        return () => { canvas.removeEventListener("mousemove", onM); canvas.removeEventListener("touchmove", onT); };
    }, []);

    /* ── start game ── */
    const startGame = useCallback(() => {
        const last = parseInt(localStorage.getItem(LS_KEY) ?? "0", 10);
        if (Math.ceil((last + COOLDOWN_MS - Date.now()) / 1000) > 0) return;
        localStorage.setItem(LS_KEY, Date.now().toString());
        setCooldown(COOLDOWN_MS / 1000);

        fruits.current    = [];
        particles.current = [];
        blade.current     = [];
        comboPopR.current = null;
        slicedR.current   = 0;
        missR.current     = 0;
        comboR.current    = 0;
        lastSliceR.current = 0;
        nextSpawnR.current = 0;
        fruitIdR.current   = 0;
        startTsR.current   = performance.now();
        activeR.current    = true;
        screenR.current    = "playing";
        setScreen("playing");
        setScore(0);
        setMisses(0);
        setTimeLeft(GAME_DURATION);
        setPromoCode(null);
        setCopied(false);
    }, []);

    /* ══════════════════════════════════════════
       GAME LOOP
    ══════════════════════════════════════════ */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        /* ── spawn ── */
        function spawnFruit(W: number, H: number) {
            const isRotten = Math.random() < 0.15;
            const kind: FruitKind = isRotten
                ? "rotten"
                : GOOD[Math.floor(Math.random() * GOOD.length)];
            const tLeft = Math.max(0, GAME_DURATION - elapsedR.current);
            const fast  = tLeft < 5;
            const vy = -(10 + Math.random() * 3) * (fast ? 1.15 : 1);
            fruits.current.push({
                id: fruitIdR.current++,
                kind,
                x: FRUIT_R + Math.random() * (W - FRUIT_R * 2),
                y: H + FRUIT_R + 10,
                vx: (Math.random() - 0.5) * 3,
                vy,
                rot: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.1,
                sliced: false, alpha: 1, splitDx: 0,
            });
        }

        /* ── slice ── */
        function sliceFruit(fr: Fruit) {
            fr.sliced = true;
            const def = DEFS[fr.kind];
            const count = fr.kind === "rotten" ? 8 : 16;
            for (let i = 0; i < count; i++) {
                const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
                const spd   = 2.5 + Math.random() * 5;
                particles.current.push({
                    x: fr.x, y: fr.y,
                    vx: Math.cos(angle) * spd,
                    vy: Math.sin(angle) * spd - 2,
                    alpha: 0.9, r: 3 + Math.random() * 5,
                    ri: def.r, gi: def.g, bi: def.b,
                });
            }
            if (fr.kind === "rotten") return;

            const now = performance.now();
            if (now - lastSliceR.current < 800) comboR.current++;
            else comboR.current = 1;
            lastSliceR.current = now;

            const mult = comboR.current >= 5 ? 3 : comboR.current >= 3 ? 2 : 1;
            slicedR.current++;

            if (comboR.current >= 3) {
                comboPopR.current = {
                    text: `x${mult} COMBO!`,
                    x: fr.x, y: fr.y - 20,
                    alpha: 1, vy: -1.2,
                };
            }
            setScore(slicedR.current);
        }

        /* ── end game ── */
        function endGame() {
            activeR.current = false;
            const sc = slicedR.current;
            const ns: Screen = sc >= WIN_DOUBLE ? "won2" : sc >= WIN_SURE ? "won1" : "lose";
            screenR.current = ns;
            setScreen(ns);
        }

        const loop = () => {
            animIdR.current = requestAnimationFrame(loop);
            const W = canvas.width, H = canvas.height;

            /* ── clear + bg ── */
            ctx.clearRect(0, 0, W, H);
            const bg = ctx.createLinearGradient(0, 0, 0, H);
            bg.addColorStop(0, "#020b20");
            bg.addColorStop(1, "#031535");
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            /* dot grid */
            ctx.fillStyle = "rgba(59,130,246,0.04)";
            for (let gx = 45; gx < W; gx += 54)
                for (let gy = 45; gy < H; gy += 54) {
                    ctx.beginPath(); ctx.arc(gx, gy, 1, 0, Math.PI * 2); ctx.fill();
                }

            if (activeR.current) {
                elapsedR.current = (performance.now() - startTsR.current) / 1000;
                const tLeft = Math.max(0, GAME_DURATION - elapsedR.current);
                const fast  = tLeft < 5;

                /* ── spawn ── */
                if (elapsedR.current >= nextSpawnR.current) {
                    spawnFruit(W, H);
                    const interval = fast
                        ? 0.5 + Math.random() * 0.35
                        : 1.0 + Math.random() * 0.7;
                    nextSpawnR.current = elapsedR.current + interval;
                }

                /* ── blade vs fruits ── */
                const bl = blade.current;
                for (let fi = fruits.current.length - 1; fi >= 0; fi--) {
                    const fr = fruits.current[fi];
                    if (fr.sliced) continue;
                    for (let bi = 0; bi < bl.length - 1; bi++) {
                        if (hits(bl[bi].x, bl[bi].y, bl[bi + 1].x, bl[bi + 1].y, fr.x, fr.y, FRUIT_R)) {
                            sliceFruit(fr);
                            if (fr.kind === "rotten") endGame();
                            break;
                        }
                    }
                }

                /* ── update fruits ── */
                fruits.current = fruits.current.filter(fr => {
                    if (fr.sliced) {
                        fr.alpha   -= 0.055;
                        fr.splitDx += 2.5;
                        return fr.alpha > 0;
                    }
                    fr.vy += GRAVITY;
                    fr.x  += fr.vx;
                    fr.y  += fr.vy;
                    fr.rot += fr.rotSpeed;
                    // bounce off walls
                    if (fr.x - FRUIT_R < 0)  { fr.x = FRUIT_R;   fr.vx =  Math.abs(fr.vx) * 0.7; }
                    if (fr.x + FRUIT_R > W)  { fr.x = W - FRUIT_R; fr.vx = -Math.abs(fr.vx) * 0.7; }
                    if (fr.y - FRUIT_R > H) {
                        if (fr.kind !== "rotten") {
                            missR.current++;
                            setMisses(missR.current);
                            if (missR.current >= MAX_MISSES) endGame();
                        }
                        return false;
                    }
                    return true;
                });

                /* ── time out ── */
                if (tLeft <= 0 && activeR.current) endGame();
                setTimeLeft(Math.ceil(tLeft));

                /* ── combo pop ── */
                if (comboPopR.current) {
                    comboPopR.current.alpha -= 0.026;
                    comboPopR.current.y     += comboPopR.current.vy;
                    if (comboPopR.current.alpha <= 0) comboPopR.current = null;
                }
            }

            /* ── draw particles ── */
            particles.current = particles.current.filter(p => p.alpha > 0.02);
            for (const p of particles.current) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.ri},${p.gi},${p.bi},${p.alpha.toFixed(2)})`;
                ctx.fill();
                p.x += p.vx; p.y += p.vy;
                p.vy += 0.18;
                p.alpha -= 0.024;
                p.r     *= 0.96;
            }

            /* ── draw fruits ── */
            for (const fr of fruits.current) {
                drawFruit(ctx, DEFS[fr.kind], FRUIT_R, fr.alpha, fr.x, fr.y, fr.rot, fr.sliced, fr.splitDx);
            }

            /* ── draw blade ── */
            const bl = blade.current;
            if (bl.length > 1) {
                const now = performance.now();
                for (let i = 1; i < bl.length; i++) {
                    const age  = (now - bl[i].t) / 130;
                    const a    = Math.max(0, 1 - age) * 0.75;
                    const w    = Math.max(1, 5 * (1 - age));
                    ctx.beginPath();
                    ctx.moveTo(bl[i - 1].x, bl[i - 1].y);
                    ctx.lineTo(bl[i].x, bl[i].y);
                    ctx.strokeStyle = `rgba(255,255,255,${a.toFixed(2)})`;
                    ctx.lineWidth = w;
                    ctx.lineCap  = "round";
                    ctx.stroke();
                }
                const tip = bl[bl.length - 1];
                const glow = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, 14);
                glow.addColorStop(0, "rgba(255,255,255,0.55)");
                glow.addColorStop(1, "rgba(255,255,255,0)");
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(tip.x, tip.y, 14, 0, Math.PI * 2);
                ctx.fill();
            }

            /* ── combo pop ── */
            const cp = comboPopR.current;
            if (cp) {
                ctx.save();
                ctx.globalAlpha = cp.alpha;
                ctx.font = "bold 24px system-ui";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.shadowColor = "rgba(251,191,36,0.9)";
                ctx.shadowBlur  = 14;
                ctx.fillStyle   = "#fbbf24";
                ctx.fillText(cp.text, cp.x, cp.y);
                ctx.restore();
            }

            /* ── HUD ── */
            if (screenR.current === "playing") {
                const tLeft = Math.max(0, GAME_DURATION - elapsedR.current);
                const urgent = tLeft < 5;

                // Timer bar
                const BW = Math.min(W * 0.6, 280);
                const BX = (W - BW) / 2;
                const BY = 52;
                const BH = 5;

                ctx.fillStyle = "rgba(255,255,255,0.06)";
                ctx.beginPath(); ctx.roundRect(BX, BY, BW, BH, BH / 2); ctx.fill();

                const prog = tLeft / GAME_DURATION;
                if (prog > 0) {
                    const fg = ctx.createLinearGradient(BX, BY, BX + BW * prog, BY);
                    if (urgent) {
                        fg.addColorStop(0, "rgba(239,68,68,0.9)");
                        fg.addColorStop(1, "rgba(252,165,165,1)");
                    } else {
                        fg.addColorStop(0, "rgba(96,165,250,0.9)");
                        fg.addColorStop(1, "rgba(167,233,255,1)");
                    }
                    ctx.save();
                    ctx.shadowColor = urgent ? "rgba(239,68,68,0.7)" : "rgba(147,210,255,0.7)";
                    ctx.shadowBlur = 10;
                    ctx.fillStyle = fg;
                    ctx.beginPath(); ctx.roundRect(BX, BY, BW * prog, BH, BH / 2); ctx.fill();
                    ctx.restore();
                }

                // Timer text
                ctx.font = `bold ${Math.round(Math.min(W * 0.08, 34))}px system-ui`;
                ctx.textAlign = "center";
                ctx.fillStyle = urgent ? "rgba(239,68,68,0.75)" : "rgba(255,255,255,0.12)";
                ctx.fillText(`${Math.ceil(tLeft)}s`, W / 2, BY + 32);

                // Score (fruits sliced) — top left
                ctx.font = "bold 20px system-ui";
                ctx.textAlign = "left";
                ctx.fillStyle = "rgba(255,255,255,0.75)";
                ctx.shadowColor = "rgba(255,255,255,0.2)";
                ctx.shadowBlur  = 6;
                ctx.fillText(`${slicedR.current}`, 22, 52);
                ctx.shadowBlur = 0;
                ctx.font = "9px system-ui";
                ctx.fillStyle = "rgba(255,255,255,0.22)";
                ctx.fillText("ФРУКТЫ", 22, 64);

                // Misses — hearts, top right
                const hearts = Array.from({ length: MAX_MISSES }, (_, i) =>
                    i < MAX_MISSES - missR.current ? "❤️" : "🖤"
                ).join(" ");
                ctx.font = "17px system-ui";
                ctx.textAlign = "right";
                ctx.fillStyle = "rgba(255,255,255,1)";
                ctx.fillText(hearts, W - 18, 52);

                // Score milestones (below bar)
                const milestones = [
                    { n: WIN_SURE,   label: `${WIN_SURE}🍋`,    reached: slicedR.current >= WIN_SURE   },
                    { n: WIN_DOUBLE, label: `${WIN_DOUBLE}🍋🍋`, reached: slicedR.current >= WIN_DOUBLE },
                ];
                ctx.font = "bold 9px system-ui";
                ctx.textAlign = "center";
                milestones.forEach((m, i) => {
                    const mx = BX + BW * (i + 1) / 3;
                    ctx.fillStyle = m.reached ? "rgba(251,191,36,0.95)" : "rgba(255,255,255,0.22)";
                    ctx.shadowColor = m.reached ? "rgba(251,191,36,0.5)" : "transparent";
                    ctx.shadowBlur  = m.reached ? 8 : 0;
                    ctx.fillText(m.label, mx, BY + BH + 16);
                });
                ctx.shadowBlur = 0;
            }
        };

        animIdR.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animIdR.current);
    }, [size]);

    /* ── text helper ── */
    const t = (ru: string, kz: string, en: string, zh: string) =>
        lang === "kz" ? kz : lang === "en" ? en : lang === "zh" ? zh : ru;

    const cdFmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

    return (
        <div className="fixed inset-0 bg-[#020b20] overflow-hidden">
            <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />

            <canvas
                ref={canvasRef}
                width={size.w}
                height={size.h}
                className="absolute inset-0 touch-none"
                style={{ cursor: "crosshair" }}
            />

            {/* ── header ── */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-3.5">
                <Link href="/" className="no-underline">
                    <span className="text-lg font-black tracking-[0.25em] text-white/80 hover:text-white transition-colors select-none">
                        ALASU
                    </span>
                </Link>
                <div className="flex items-center gap-3">
                    <LanguageSelector lang={lang} setLang={setLang} />
                    <button onClick={() => setMenuOpen(true)}
                        className="group flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300">
                        <span className="block w-[18px] h-[1.5px] bg-white/70 rounded-full" />
                        <span className="block w-[14px] h-[1.5px] bg-white/40 rounded-full" />
                        <span className="block w-[10px] h-[1.5px] bg-white/25 rounded-full" />
                    </button>
                </div>
            </header>

            {/* ══════════════════════════════════
                START SCREEN
            ══════════════════════════════════ */}
            {screen === "start" && (
                <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-6 pointer-events-none">
                    <div className="pointer-events-auto w-full max-w-sm text-center"
                        style={{ animation: "modalIn 0.5s cubic-bezier(0.22,1,0.36,1) both" }}>
                        <div className="text-6xl mb-2" style={{ animation: "fruitSpin 3s ease-in-out infinite" }}>🍋</div>
                        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-3">
                            {t("Нарежь фрукты", "Жемістерді кес", "Fruit Slice", "切水果")}
                        </h1>
                        <p className="text-white/45 text-sm leading-relaxed mb-7 max-w-xs mx-auto">
                            {t(
                                "Режь фрукты свайпом. Не трогай гнилые 💀 — проигрыш. 3 пропуска — конец.",
                                "Жемістерді саусақпен кес. Шіріген 💀 — жол берме. 3 қателік — ойын бітті.",
                                "Swipe to slice fruits. Avoid rotten 💀. Miss 3 = game over.",
                                "滑动切水果。避开腐烂的 💀。错过3个游戏结束。"
                            )}
                        </p>

                        {/* prize tiers */}
                        <div className="grid grid-cols-2 gap-3 mb-7">
                            {[
                                { icon: "🍋", label: `${WIN_SURE}+`,  sub: t("1 лимонати","1 лимонати","1 lemonade","1柠檬水"), cls: "border-yellow-400/20 bg-yellow-500/[0.07]" },
                                { icon: "🍋🍋", label: `${WIN_DOUBLE}+`, sub: t("2 лимонати","2 лимонати","2 lemonades","2柠檬水"), cls: "border-amber-400/25 bg-amber-500/[0.07]" },
                            ].map((tier, i) => (
                                <div key={i} className={`rounded-2xl border ${tier.cls} p-3 text-center`}>
                                    <div className="text-xl mb-0.5">{tier.icon}</div>
                                    <div className="text-yellow-400 font-black text-xs">{tier.label}</div>
                                    <div className="text-white/35 text-[10px] mt-0.5">{tier.sub}</div>
                                </div>
                            ))}
                        </div>

                        {/* combo hint */}
                        <div className="flex items-center justify-center gap-4 mb-7">
                            {[
                                { c: "3×", col: "text-blue-400", note: t("x2","x2","x2","x2") },
                                { c: "5×", col: "text-yellow-400", note: t("x3","x3","x3","x3") },
                            ].map(({ c, col, note }, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-[11px]">
                                    <span className={`${col} font-black`}>{c} COMBO</span>
                                    <span className="text-white/25">→</span>
                                    <span className="text-white/50 font-bold">{note}</span>
                                </div>
                            ))}
                        </div>

                        {cooldown > 0 ? (
                            <div className="w-full py-4 rounded-2xl border border-white/10 bg-white/[0.04] text-center">
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">
                                    {t("Следующая попытка через", "Келесі әрекет", "Next attempt in", "下次尝试")}
                                </p>
                                <p className="text-white/70 font-black tabular-nums text-lg">{cdFmt(cooldown)}</p>
                            </div>
                        ) : (
                            <button onClick={startGame}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-[0.22em] uppercase rounded-2xl transition-all duration-300 active:scale-95"
                                style={{ boxShadow: "0 0 40px rgba(59,130,246,0.45)" }}>
                                {t("Начать игру", "Ойынды бастау", "Start Game", "开始游戏")}
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* ══════════════════════════════════
                WIN SCREENS
            ══════════════════════════════════ */}
            {(screen === "won1" || screen === "won2") && (
                <div className="absolute inset-0 z-40 flex items-center justify-center px-5 bg-black/55 backdrop-blur-sm">
                    <div className="w-full max-w-sm bg-[#061842]/95 rounded-[2rem] overflow-hidden"
                        style={{
                            animation: "modalIn 0.45s cubic-bezier(0.22,1,0.36,1) both",
                            border: screen === "won2" ? "1px solid rgba(245,158,11,0.25)" : "1px solid rgba(96,165,250,0.2)",
                            boxShadow: screen === "won2" ? "0 0 80px rgba(245,158,11,0.12)" : "0 0 80px rgba(59,130,246,0.12)",
                        }}>
                        <div className="px-7 pt-7 pb-5 text-center"
                            style={{ background: screen === "won2" ? "linear-gradient(135deg,rgba(245,158,11,0.12),transparent)" : "linear-gradient(135deg,rgba(59,130,246,0.1),transparent)" }}>
                            <div className="text-5xl mb-2" style={{ animation: "winPop 0.5s cubic-bezier(0.22,1,0.36,1) both" }}>
                                {screen === "won2" ? "👑" : "🏆"}
                            </div>
                            <h2 className="text-2xl font-black uppercase text-white mb-0.5">
                                {screen === "won2"
                                    ? t("Мастер!", "Шебер!", "Master!", "大师！")
                                    : t("Победа!", "Жеңіс!", "Victory!", "胜利！")}
                            </h2>
                            <p className="text-white/35 text-xs tabular-nums">
                                {score} {t("фруктов", "жеміс", "fruits", "水果")}
                            </p>
                        </div>

                        <div className="px-6 pb-6 flex flex-col gap-3">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-bold mb-3 text-center">
                                    {t("Ваш код", "Сіздің кодыңыз", "Your code", "您的码")}
                                </p>
                                {codeLoading ? (
                                    <div className="flex items-center justify-center gap-2 py-2">
                                        {[0, 150, 300].map(d => (
                                            <div key={d} className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
                                                style={{ animationDelay: `${d}ms` }} />
                                        ))}
                                    </div>
                                ) : promoCode ? (
                                    <>
                                        <div className="text-center font-black tracking-[0.22em] text-white mb-3 select-all"
                                            style={{ fontSize: "clamp(1.1rem,5vw,1.5rem)", textShadow: "0 0 30px rgba(147,210,255,0.4)" }}>
                                            {promoCode}
                                        </div>
                                        <button onClick={copyCode}
                                            className="w-full py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-200"
                                            style={{
                                                background: copied ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.06)",
                                                border: copied ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(255,255,255,0.1)",
                                                color: copied ? "rgba(134,239,172,0.9)" : "rgba(255,255,255,0.5)",
                                            }}>
                                            {copied
                                                ? t("Скопировано ✓", "Көшірілді ✓", "Copied ✓", "已复制 ✓")
                                                : t("Скопировать код", "Кодты көшіру", "Copy code", "复制码")}
                                        </button>
                                    </>
                                ) : (
                                    <p className="text-red-400/60 text-xs text-center">
                                        {t("Ошибка соединения", "Байланыс қатесі", "Connection error", "连接错误")}
                                    </p>
                                )}
                            </div>

                            <p className="text-white/35 text-xs text-center leading-relaxed px-1">
                                {screen === "won2"
                                    ? t("Покажите код продавцу ALASU — 2 лимонати 🍋🍋",
                                        "ALASU сатушысына кодты көрсет — 2 лимонати 🍋🍋",
                                        "Show this code to an ALASU seller for 2 lemonades 🍋🍋",
                                        "向销售人员出示代码领取2瓶柠檬水 🍋🍋")
                                    : t("Покажите код продавцу ALASU — бесплатный лимонати 🍋",
                                        "ALASU сатушысына кодты көрсет — тегін лимонати 🍋",
                                        "Show this code to an ALASU seller for 1 free lemonade 🍋",
                                        "向销售人员出示代码领取1瓶免费柠檬水 🍋")}
                            </p>

                            {cooldown > 0 ? (
                                <div className="w-full py-4 rounded-2xl border border-white/10 bg-white/[0.04] text-center">
                                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">
                                        {t("Следующая попытка через", "Келесі әрекет", "Next attempt in", "下次尝试")}
                                    </p>
                                    <p className="text-white/70 font-black tabular-nums text-lg">{cdFmt(cooldown)}</p>
                                </div>
                            ) : (
                                <button onClick={startGame}
                                    className="py-3.5 rounded-2xl border border-white/10 text-white/40 hover:text-white hover:border-white/25 text-xs tracking-widest uppercase transition-all duration-300">
                                    {t("Играть ещё", "Тағы ойнау", "Play again", "再玩一次")}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ══════════════════════════════════
                LOSE SCREEN
            ══════════════════════════════════ */}
            {screen === "lose" && (
                <div className="absolute inset-0 z-40 flex items-center justify-center px-6 bg-black/50 backdrop-blur-sm">
                    <div className="w-full max-w-sm text-center bg-[#061842]/90 rounded-[2rem] border border-white/[0.07] p-8"
                        style={{ animation: "modalIn 0.45s cubic-bezier(0.22,1,0.36,1) both" }}>
                        <div className="text-6xl mb-4">💀</div>
                        <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-1">
                            {t("Проигрыш!", "Ұтылдың!", "Game Over!", "游戏结束！")}
                        </h2>
                        <p className="text-white/40 font-bold text-base mb-5 tabular-nums">
                            {score} {t("фруктов", "жеміс", "fruits", "水果")}
                        </p>
                        <p className="text-white/40 text-sm leading-relaxed mb-7">
                            {t(
                                `Нарежьте ${WIN_SURE}+ фруктов — 1 лимонати. ${WIN_DOUBLE}+ — 2 лимонати!`,
                                `${WIN_SURE}+ жеміс кессеңіз — 1 лимонати. ${WIN_DOUBLE}+ — 2 лимонати!`,
                                `Slice ${WIN_SURE}+ fruits = 1 lemonade. ${WIN_DOUBLE}+ = 2 lemonades!`,
                                `切${WIN_SURE}+水果=1柠檬水，${WIN_DOUBLE}+=2柠檬水！`
                            )}
                        </p>
                        {cooldown > 0 ? (
                            <div className="w-full py-4 rounded-2xl border border-white/10 bg-white/[0.04] text-center">
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">
                                    {t("Следующая попытка через", "Келесі әрекет", "Next attempt in", "下次尝试")}
                                </p>
                                <p className="text-white/70 font-black tabular-nums text-lg">{cdFmt(cooldown)}</p>
                            </div>
                        ) : (
                            <button onClick={startGame}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-[0.2em] uppercase rounded-2xl transition-all duration-300 active:scale-95"
                                style={{ boxShadow: "0 0 30px rgba(59,130,246,0.35)" }}>
                                {t("Попробовать снова", "Қайта байқау", "Try Again", "再试一次")}
                            </button>
                        )}
                    </div>
                </div>
            )}

            {screen === "playing" && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/12 font-bold text-center">
                        {t("режь свайпом", "саусақпен кес", "swipe to slice", "滑动切割")}
                    </p>
                </div>
            )}

            <style>{`
                @keyframes modalIn   { from{opacity:0;transform:scale(0.94) translateY(12px)} to{opacity:1;transform:none} }
                @keyframes fruitSpin { 0%{transform:rotate(-8deg) translateY(0)} 50%{transform:rotate(8deg) translateY(-10px)} 100%{transform:rotate(-8deg) translateY(0)} }
                @keyframes winPop    { from{opacity:0;transform:scale(0.4)} 80%{transform:scale(1.15)} to{opacity:1;transform:scale(1)} }
            `}</style>
        </div>
    );
}
