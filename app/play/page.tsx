"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { BurgerMenu, useLang } from "../components/shared";
import LanguageSelector from "../components/LanguageSelector";

/* ═══════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════ */
const GRAVITY      = 0.11;   // px/frame²  — быстрое падение
const BOUNCE       = 0.72;   // energy on bounce
const DROP_R       = 26;     // drop radius px
const PLAT_H       = 12;     // platform height
const PLAT_MAX     = 72;     // platform half-width (desktop max)
const PLAT_LAG     = 0.09;   // follow smoothing (0=instant,1=never)
const WIN1_SEC     = 15;     // bronze: 1 bottle
const WIN2_SEC     = 30;     // gold: 2 bottles

type Screen = "start" | "playing" | "won1" | "won2" | "lose";
type Ripple = { x: number; y: number; r: number; a: number };
type Spark  = { x: number; y: number; vx: number; vy: number; a: number; r: number };

function getDrift(t: number): number {
    if (t > 18) return 0.75;
    if (t > 10) return 0.50;
    if (t > 4)  return 0.28;
    return 0.12;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function PlayPage() {
    const canvasRef   = useRef<HTMLCanvasElement>(null);
    const [screen, setScreen]     = useState<Screen>("start");
    const [dispTime, setDispTime] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang]         = useLang();
    const [bestTime, setBestTime] = useState(0);
    const [promoCode, setPromoCode]     = useState<string | null>(null);
    const [codeLoading, setCodeLoading] = useState(false);
    const [copied, setCopied]           = useState(false);
    const [cooldown, setCooldown]       = useState(0); // seconds left to wait

    const COOLDOWN_MS  = 30 * 60 * 1000; // 30 минут
    const LS_KEY       = "alasu_last_play";

    /* ── check / update cooldown every second ── */
    useEffect(() => {
        const tick = () => {
            const last = parseInt(localStorage.getItem(LS_KEY) ?? "0", 10);
            const remaining = Math.max(0, Math.ceil((last + COOLDOWN_MS - Date.now()) / 1000));
            setCooldown(remaining);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    /* ── mutable game state (in refs to avoid re-renders in loop) ── */
    const drop      = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
    const platform  = useRef({ x: 0, tX: 0 });
    const ripples   = useRef<Ripple[]>([]);
    const sparks    = useRef<Spark[]>([]);
    const startTs   = useRef(0);     // performance.now() when game started
    const elapsed   = useRef(0);     // seconds
    const active    = useRef(false);
    const driftTmr  = useRef(0);
    const nextDrift = useRef(1.5);
    const animId    = useRef(0);
    const screenRef = useRef<Screen>("start");
    const warned1   = useRef(false);

    /* ── canvas size ── */
    const [size, setSize] = useState({ w: 390, h: 700 });
    useEffect(() => {
        const upd = () => setSize({ w: window.innerWidth, h: window.innerHeight });
        upd();
        window.addEventListener("resize", upd);
        return () => window.removeEventListener("resize", upd);
    }, []);

    /* ── start game ── */
    const startGame = useCallback(() => {
        const last = parseInt(localStorage.getItem(LS_KEY) ?? "0", 10);
        const remaining = Math.ceil((last + COOLDOWN_MS - Date.now()) / 1000);
        if (remaining > 0) return; // still on cooldown

        localStorage.setItem(LS_KEY, Date.now().toString());
        setCooldown(COOLDOWN_MS / 1000);

        const canvas = canvasRef.current;
        if (!canvas) return;
        const W = canvas.width, H = canvas.height;
        drop.current     = { x: W / 2, y: H * 0.18, vx: (Math.random() - 0.5) * 1.5, vy: 0 };
        platform.current = { x: W / 2, tX: W / 2 };
        ripples.current  = [];
        sparks.current   = [];
        elapsed.current  = 0;
        driftTmr.current = 0;
        nextDrift.current = 1.2 + Math.random() * 0.8;
        warned1.current  = false;
        startTs.current  = performance.now();
        active.current   = true;
        screenRef.current = "playing";
        setScreen("playing");
        setDispTime(0);
        setPromoCode(null);
        setCopied(false);
    }, []);

    /* ── fetch promo code on win ── */
    useEffect(() => {
        if (screen !== "won1" && screen !== "won2") return;
        const bottles = screen === "won2" ? 2 : 1;
        setCodeLoading(true);
        fetch("/api/game/win", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ time: elapsed.current, bottles }),
        })
            .then(r => r.json())
            .then(data => { if (data.code) setPromoCode(data.code); })
            .catch(() => {})
            .finally(() => setCodeLoading(false));
    }, [screen]);

    const copyCode = useCallback(() => {
        if (!promoCode) return;

        const done = () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(promoCode).then(done).catch(() => fallback());
        } else {
            fallback();
        }

        function fallback() {
            const el = document.createElement("textarea");
            el.value = promoCode!;
            el.setAttribute("readonly", "");
            el.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0;";
            document.body.appendChild(el);
            el.focus();
            el.select();
            el.setSelectionRange(0, promoCode!.length);
            try { document.execCommand("copy"); done(); } catch {}
            document.body.removeChild(el);
        }
    }, [promoCode]);

    /* ── mouse / touch tracking ── */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const move = (cx: number) => {
            const rect = canvas.getBoundingClientRect();
            platform.current.tX = cx - rect.left;
        };
        const onMouse = (e: MouseEvent)     => move(e.clientX);
        const onTouch = (e: TouchEvent)     => { e.preventDefault(); move(e.touches[0].clientX); };
        canvas.addEventListener("mousemove", onMouse);
        canvas.addEventListener("touchmove", onTouch, { passive: false });
        return () => {
            canvas.removeEventListener("mousemove", onMouse);
            canvas.removeEventListener("touchmove", onTouch);
        };
    }, []);

    /* ═══════════════════════════════════════
       GAME LOOP
    ═══════════════════════════════════════ */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const loop = (now: number) => {
            animId.current = requestAnimationFrame(loop);

            const W = canvas.width;
            const H = canvas.height;
            const PLAT_HALF = Math.min(PLAT_MAX, W * 0.15);

            /* ── clear ── */
            ctx.clearRect(0, 0, W, H);

            /* ── background ── */
            const bg = ctx.createLinearGradient(0, 0, 0, H);
            bg.addColorStop(0, "#020b20");
            bg.addColorStop(1, "#031535");
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            /* ── subtle dot grid ── */
            ctx.fillStyle = "rgba(59,130,246,0.055)";
            for (let gx = 45; gx < W; gx += 54) {
                for (let gy = 45; gy < H; gy += 54) {
                    ctx.beginPath();
                    ctx.arc(gx, gy, 1.2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            /* ── ambient glow ── */
            const ag = ctx.createRadialGradient(W / 2, H * 0.5, 0, W / 2, H * 0.5, W * 0.6);
            ag.addColorStop(0, "rgba(59,130,246,0.04)");
            ag.addColorStop(1, "rgba(59,130,246,0)");
            ctx.fillStyle = ag;
            ctx.fillRect(0, 0, W, H);

            /* ── top UI (progress bar + timer) ── */
            const BAR_W  = Math.min(W * 0.68, 320);
            const BAR_X  = (W - BAR_W) / 2;
            const BAR_Y  = 46;
            const BAR_H  = 5;
            const t = elapsed.current;

            // bar track
            ctx.fillStyle = "rgba(255,255,255,0.06)";
            roundRect(ctx, BAR_X, BAR_Y, BAR_W, BAR_H, BAR_H / 2);
            ctx.fill();

            // bar fill
            const prog = Math.min(1, t / WIN2_SEC);
            if (prog > 0) {
                const fg = ctx.createLinearGradient(BAR_X, BAR_Y, BAR_X + BAR_W * prog, BAR_Y);
                fg.addColorStop(0, "rgba(96,165,250,0.9)");
                fg.addColorStop(1, "rgba(167,233,255,1)");
                ctx.save();
                ctx.shadowColor = "rgba(147,210,255,0.7)";
                ctx.shadowBlur = 10;
                ctx.fillStyle = fg;
                roundRect(ctx, BAR_X, BAR_Y, BAR_W * prog, BAR_H, BAR_H / 2);
                ctx.fill();
                ctx.restore();
            }

            // 15s marker
            const m1x = BAR_X + BAR_W * (WIN1_SEC / WIN2_SEC);
            ctx.fillStyle = t >= WIN1_SEC ? "rgba(251,191,36,0.95)" : "rgba(255,255,255,0.25)";
            ctx.fillRect(m1x - 1, BAR_Y - 3, 2, BAR_H + 6);
            ctx.font = "bold 9px system-ui";
            ctx.textAlign = "center";
            ctx.fillStyle = t >= WIN1_SEC ? "rgba(251,191,36,0.9)" : "rgba(255,255,255,0.22)";
            ctx.fillText("15s 🍶", m1x, BAR_Y - 7);

            // 30s marker
            ctx.fillStyle = t >= WIN2_SEC ? "rgba(251,191,36,0.95)" : "rgba(255,255,255,0.25)";
            ctx.fillRect(BAR_X + BAR_W - 1, BAR_Y - 3, 2, BAR_H + 6);
            ctx.fillStyle = t >= WIN2_SEC ? "rgba(251,191,36,0.9)" : "rgba(255,255,255,0.22)";
            ctx.fillText("30s 🍶🍶", BAR_X + BAR_W, BAR_Y - 7);

            // big timer
            ctx.font = `bold ${Math.round(Math.min(W * 0.1, 44))}px system-ui`;
            ctx.textAlign = "center";
            ctx.fillStyle = "rgba(255,255,255,0.12)";
            ctx.fillText(`${Math.floor(t)}s`, W / 2, BAR_Y + 36);

            /* ── physics (only when active) ── */
            const pY = H - 95;
            const px = platform.current.x;

            if (active.current) {
                elapsed.current = (performance.now() - startTs.current) / 1000;

                /* drift */
                driftTmr.current += 1 / 60;
                if (driftTmr.current >= nextDrift.current) {
                    driftTmr.current = 0;
                    nextDrift.current = 0.7 + Math.random() * 1.1;
                    const df = getDrift(elapsed.current);
                    drop.current.vx += (Math.random() - 0.5) * df * 2.2;
                    drop.current.vx = Math.max(-7, Math.min(7, drop.current.vx));
                }

                /* move */
                drop.current.vy += GRAVITY;
                drop.current.x  += drop.current.vx;
                drop.current.y  += drop.current.vy;

                /* horizontal friction */
                drop.current.vx *= 0.97;

                /* walls */
                if (drop.current.x - DROP_R < 0)  { drop.current.x = DROP_R;     drop.current.vx =  Math.abs(drop.current.vx) * 0.65; }
                if (drop.current.x + DROP_R > W)   { drop.current.x = W - DROP_R; drop.current.vx = -Math.abs(drop.current.vx) * 0.65; }

                /* platform follow */
                platform.current.x += (platform.current.tX - platform.current.x) * (1 - PLAT_LAG);

                /* platform collision */
                if (
                    drop.current.vy > 0 &&
                    drop.current.y + DROP_R >= pY &&
                    drop.current.y + DROP_R <= pY + PLAT_H + Math.abs(drop.current.vy) + 2 &&
                    drop.current.x >= platform.current.x - PLAT_HALF - DROP_R * 0.4 &&
                    drop.current.x <= platform.current.x + PLAT_HALF + DROP_R * 0.4
                ) {
                    drop.current.y  = pY - DROP_R;
                    drop.current.vy = -Math.abs(drop.current.vy) * BOUNCE;
                    const hitPos = (drop.current.x - platform.current.x) / PLAT_HALF;
                    drop.current.vx += hitPos * 0.7;

                    /* ripple + sparks */
                    ripples.current.push({ x: drop.current.x, y: pY, r: 6, a: 0.75 });
                    for (let i = 0; i < 5; i++) {
                        sparks.current.push({
                            x: drop.current.x, y: pY,
                            vx: (Math.random() - 0.5) * 4,
                            vy: -(Math.random() * 3 + 1),
                            a: 0.9, r: 2 + Math.random() * 2,
                        });
                    }
                }

                /* game over: drop fell off */
                if (drop.current.y - DROP_R > H) {
                    active.current = false;
                    const finalT = elapsed.current;
                    setBestTime(prev => Math.max(prev, Math.floor(finalT)));
                    let ns: Screen;
                    if (finalT >= WIN2_SEC)      ns = "won2";
                    else if (finalT >= WIN1_SEC) ns = "won1";
                    else                          ns = "lose";
                    screenRef.current = ns;
                    setScreen(ns);
                }

                setDispTime(Math.floor(elapsed.current));
            }

            /* ── draw ripples ── */
            ripples.current = ripples.current.filter(r => r.a > 0.01);
            for (const rp of ripples.current) {
                ctx.beginPath();
                ctx.arc(rp.x, pY, rp.r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(147,210,255,${rp.a})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                rp.r += 2.8;
                rp.a -= 0.022;
            }

            /* ── draw sparks ── */
            sparks.current = sparks.current.filter(s => s.a > 0.01);
            for (const sp of sparks.current) {
                ctx.beginPath();
                ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147,210,255,${sp.a})`;
                ctx.fill();
                sp.x  += sp.vx;
                sp.y  += sp.vy;
                sp.vy += 0.18;
                sp.a  -= 0.03;
            }

            /* ── draw platform ── */
            const pxC = active.current ? platform.current.x : W / 2;
            ctx.save();
            ctx.shadowColor = "rgba(147,210,255,0.85)";
            ctx.shadowBlur  = 22;
            const pg = ctx.createLinearGradient(pxC - PLAT_HALF, pY, pxC + PLAT_HALF, pY);
            pg.addColorStop(0,   "rgba(96,165,250,0.55)");
            pg.addColorStop(0.5, "rgba(210,240,255,1)");
            pg.addColorStop(1,   "rgba(96,165,250,0.55)");
            ctx.fillStyle = pg;
            roundRect(ctx, pxC - PLAT_HALF, pY, PLAT_HALF * 2, PLAT_H, PLAT_H / 2);
            ctx.fill();
            ctx.restore();

            /* ── draw drop (only when active or just died) ── */
            if (screenRef.current === "playing" || screenRef.current === "start") {
                const dx = drop.current.x;
                const dy = drop.current.y;

                const speed   = Math.abs(drop.current.vy);
                const sqY     = speed > 4 ? 1 + speed * 0.018 : 1;
                const sqX     = 1 / sqY;

                ctx.save();
                ctx.translate(dx, dy);
                ctx.scale(sqX, sqY);

                /* drop shadow */
                ctx.beginPath();
                ctx.ellipse(2, DROP_R * 0.55, DROP_R * 0.65, DROP_R * 0.22, 0, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(0,0,0,0.22)";
                ctx.fill();

                /* body */
                ctx.save();
                ctx.shadowColor = "rgba(96,165,250,1)";
                ctx.shadowBlur  = 28;
                const dg = ctx.createRadialGradient(-DROP_R * 0.28, -DROP_R * 0.28, DROP_R * 0.08, 0, 0, DROP_R);
                dg.addColorStop(0,   "rgba(210,240,255,0.97)");
                dg.addColorStop(0.42,"rgba(96,165,250,0.92)");
                dg.addColorStop(1,   "rgba(29,78,216,0.88)");
                ctx.beginPath();
                ctx.arc(0, 0, DROP_R, 0, Math.PI * 2);
                ctx.fillStyle = dg;
                ctx.fill();
                ctx.restore();

                /* top point (teardrop tip) */
                ctx.save();
                ctx.shadowColor = "rgba(147,210,255,0.6)";
                ctx.shadowBlur  = 12;
                const tipG = ctx.createLinearGradient(0, -DROP_R, 0, -DROP_R * 1.8);
                tipG.addColorStop(0, "rgba(147,210,255,0.9)");
                tipG.addColorStop(1, "rgba(147,210,255,0)");
                ctx.beginPath();
                ctx.moveTo(-DROP_R * 0.32, -DROP_R * 0.78);
                ctx.quadraticCurveTo(0, -DROP_R * 2.1, DROP_R * 0.32, -DROP_R * 0.78);
                ctx.quadraticCurveTo(0, -DROP_R * 0.5, -DROP_R * 0.32, -DROP_R * 0.78);
                ctx.fillStyle = tipG;
                ctx.fill();
                ctx.restore();

                /* specular highlight */
                ctx.beginPath();
                ctx.ellipse(-DROP_R * 0.3, -DROP_R * 0.32, DROP_R * 0.2, DROP_R * 0.11, -0.6, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255,255,255,0.55)";
                ctx.fill();

                ctx.restore();
            }

            /* ── bottom danger zone ── */
            if (active.current && drop.current.y > H * 0.72) {
                const alpha = Math.min(0.35, (drop.current.y - H * 0.72) / (H * 0.18));
                const dz = ctx.createLinearGradient(0, H - 80, 0, H);
                dz.addColorStop(0, `rgba(239,68,68,0)`);
                dz.addColorStop(1, `rgba(239,68,68,${alpha})`);
                ctx.fillStyle = dz;
                ctx.fillRect(0, H - 80, W, 80);
            }
        };

        animId.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animId.current);
    }, [size]);

    /* ── text helpers ── */
    const t = (ru: string, kz: string, en: string, zh: string) =>
        lang === "kz" ? kz : lang === "en" ? en : lang === "zh" ? zh : ru;

    const cdFmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

    return (
        <div className="fixed inset-0 bg-[#020b20] overflow-hidden">
            <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />

            {/* ── canvas (full screen) ── */}
            <canvas
                ref={canvasRef}
                width={size.w}
                height={size.h}
                className="absolute inset-0 touch-none"
                style={{ cursor: "default" }}
            />

            {/* ── header ── */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-3.5">
                <Link href="/" className="no-underline">
                    <span className="text-lg font-black tracking-[0.25em] text-white/80 hover:text-white transition-colors select-none">
                        ALASU
                    </span>
                </Link>
                <div className="flex items-center gap-3">
                    {bestTime > 0 && (
                        <span className="text-[10px] text-blue-400/60 font-bold tracking-widest uppercase tabular-nums">
                            {t("Рекорд", "Рекорд", "Best", "最佳")}: {bestTime}s
                        </span>
                    )}
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
                    <div className="pointer-events-auto w-full max-w-sm text-center" style={{ animation: "modalIn 0.5s cubic-bezier(0.22,1,0.36,1) both" }}>
                        <div className="text-6xl mb-5" style={{ animation: "dropBounce 2s ease-in-out infinite" }}>💧</div>
                        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-3">
                            {t("Поймай каплю", "Тамшыны ұстай тұр", "Drop Challenge", "水滴挑战")}
                        </h1>
                        <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                            {t(
                                "Удержи каплю на платформе как можно дольше. Двигай мышкой или пальцем.",
                                "Тамшыны платформада мүмкіндігінше ұзақ ұстай тұр. Тінтуірді немесе саусақты қозғат.",
                                "Keep the drop on the platform as long as you can. Move with mouse or finger.",
                                "尽量长时间将水滴保持在平台上。用鼠标或手指移动。"
                            )}
                        </p>

                        {/* prize cards */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/8 p-4 text-center">
                                <div className="text-2xl mb-1">🍶</div>
                                <div className="text-yellow-400 font-black text-sm">15 {t("сек", "сек", "sec", "秒")}</div>
                                <div className="text-white/40 text-xs mt-1">
                                    {t("1 бутылка воды", "1 шише су", "1 bottle of water", "1瓶水")}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-amber-400/25 bg-amber-500/8 p-4 text-center">
                                <div className="text-2xl mb-1">🍶🍶</div>
                                <div className="text-yellow-400 font-black text-sm">30 {t("сек", "сек", "sec", "秒")}</div>
                                <div className="text-white/40 text-xs mt-1">
                                    {t("2 бутылки воды", "2 шише су", "2 bottles of water", "2瓶水")}
                                </div>
                            </div>
                        </div>

                        {cooldown > 0 ? (
                            <div className="w-full py-4 rounded-2xl border border-white/10 bg-white/[0.04] text-center">
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">
                                    {t("Следующая попытка через", "Келесі әрекет", "Next attempt in", "下次尝试")}
                                </p>
                                <p className="text-white/70 font-black tabular-nums text-lg">{cdFmt(cooldown)}</p>
                            </div>
                        ) : (
                            <button
                                onClick={startGame}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-[0.22em] uppercase rounded-2xl transition-all duration-300 active:scale-95"
                                style={{ boxShadow: "0 0 40px rgba(59,130,246,0.45)" }}>
                                {t("Начать игру", "Ойынды бастау", "Start Game", "开始游戏")}
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* ══════════════════════════════════
                WIN SCREENS (won1 / won2)
            ══════════════════════════════════ */}
            {(screen === "won1" || screen === "won2") && (
                <div className="absolute inset-0 z-40 flex items-center justify-center px-5 bg-black/55 backdrop-blur-sm">
                    <div className="w-full max-w-sm bg-[#061842]/95 rounded-[2rem] overflow-hidden"
                        style={{
                            animation: "modalIn 0.45s cubic-bezier(0.22,1,0.36,1) both",
                            border: screen === "won2" ? "1px solid rgba(245,158,11,0.25)" : "1px solid rgba(96,165,250,0.2)",
                            boxShadow: screen === "won2" ? "0 0 80px rgba(245,158,11,0.12)" : "0 0 80px rgba(59,130,246,0.12)",
                        }}>

                        {/* top banner */}
                        <div className="px-7 pt-7 pb-5 text-center"
                            style={{ background: screen === "won2" ? "linear-gradient(135deg,rgba(245,158,11,0.12),transparent)" : "linear-gradient(135deg,rgba(59,130,246,0.1),transparent)" }}>
                            <div className="text-5xl mb-2" style={{ animation: "winPop 0.5s cubic-bezier(0.22,1,0.36,1) both" }}>
                                {screen === "won2" ? "👑" : "🏆"}
                            </div>
                            <h2 className="text-2xl font-black uppercase text-white mb-0.5">
                                {screen === "won2"
                                    ? t("Легенда!", "Аңыз!", "Legend!", "传奇！")
                                    : t("Победа!", "Жеңіс!", "Victory!", "胜利！")}
                            </h2>
                            <p className="text-white/35 text-xs tabular-nums">{dispTime}s</p>
                        </div>

                        <div className="px-6 pb-6 flex flex-col gap-3">
                            {/* promo code block */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-bold mb-3 text-center">
                                    {t("Ваш код", "Сіздің кодыңыз", "Your code", "您的码")}
                                </p>

                                {codeLoading ? (
                                    <div className="flex items-center justify-center gap-2 py-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }} />
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

                            {/* instruction */}
                            <p className="text-white/35 text-xs text-center leading-relaxed px-1">
                                {screen === "won2"
                                    ? t("Покажите код продавцу ALASU и получите 2 бутылки воды 🍶🍶",
                                        "ALASU сатушысына кодты көрсетіп, 2 шише су алыңыз 🍶🍶",
                                        "Show this code to an ALASU seller to claim 2 bottles 🍶🍶",
                                        "向ALASU销售人员出示代码以领取2瓶水 🍶🍶")
                                    : t("Покажите код продавцу ALASU и получите бесплатную бутылку воды 🍶",
                                        "ALASU сатушысына кодты көрсетіп, тегін шише су алыңыз 🍶",
                                        "Show this code to an ALASU seller to claim 1 free bottle 🍶",
                                        "向ALASU销售人员出示代码以领取1瓶免费水 🍶")}
                            </p>

                            {/* play again */}
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
                        <div className="text-6xl mb-4">💦</div>
                        <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-1">
                            {t("Упала!", "Түсіп кетті!", "Dropped!", "掉了！")}
                        </h2>
                        <p className="text-white/40 font-bold tabular-nums text-base mb-2">{dispTime}s</p>
                        {bestTime > 0 && (
                            <p className="text-blue-400/50 text-xs mb-4 font-bold tracking-wider">
                                {t("Рекорд", "Рекорд", "Best", "最佳")}: {bestTime}s
                            </p>
                        )}
                        <p className="text-white/40 text-sm leading-relaxed mb-7">
                            {t(
                                "Удержите каплю 15 секунд — получите бесплатную бутылку. Продержитесь 30 секунд — и целых две!",
                                "Тамшыны 15 секунд ұстасаңыз — тегін шише. 30 секунд болсаңыз — екі шише!",
                                "Hold for 15 seconds to win 1 bottle. Hold for 30 seconds to win 2!",
                                "坚持15秒赢1瓶，坚持30秒赢2瓶！"
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
                            <button
                                onClick={startGame}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-[0.2em] uppercase rounded-2xl transition-all duration-300 active:scale-95"
                                style={{ boxShadow: "0 0 30px rgba(59,130,246,0.35)" }}>
                                {t("Попробовать снова", "Қайта байқау", "Try Again", "再试一次")}
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* ── live hint during play ── */}
            {screen === "playing" && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-bold text-center">
                        {t("двигай платформу", "платформаны қозғат", "move the platform", "移动平台")}
                    </div>
                </div>
            )}

            <style>{`
                @keyframes modalIn    { from{opacity:0;transform:scale(0.94) translateY(12px)} to{opacity:1;transform:none} }
                @keyframes dropBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                @keyframes winPop     { from{opacity:0;transform:scale(0.4)} 80%{transform:scale(1.15)} to{opacity:1;transform:scale(1)} }
            `}</style>
        </div>
    );
}
