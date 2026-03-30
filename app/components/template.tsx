"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Footer from "./Footer";
import { BurgerMenu, useLang } from "./shared";
import LanguageSelector from "./LanguageSelector";

export type Product = {
    img: string;
    label: { ru: string; kz: string; en?: string; zh?: string };
    desc:  { ru: string; kz: string; en?: string; zh?: string };
    badge: { ru: string; kz: string; en?: string; zh?: string };
    accent: string;
    accentRgb: string;
};

function getField(
    obj: { ru: string; kz: string; en?: string; zh?: string },
    lang: string
): string {
    if (lang === "en") return obj.en ?? obj.ru;
    if (lang === "zh") return obj.zh ?? obj.ru;
    if (lang === "kz") return obj.kz;
    return obj.ru;
}

const CIRC = 2 * Math.PI * 20; // SVG countdown ring circumference

/* ══════════════════════════════════════════════════════════════════
   MOBILE — horizontal snap-scroll cards
══════════════════════════════════════════════════════════════════ */
function MobileCarousel({ products, lang }: { products: Product[]; lang: string }) {
    const [current, setCurrent] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const onScroll = () => {
        if (!ref.current) return;
        const idx = Math.round(ref.current.scrollLeft / ref.current.offsetWidth);
        setCurrent(Math.max(0, Math.min(products.length - 1, idx)));
    };

    const goTo = (i: number) => {
        ref.current?.scrollTo({ left: i * (ref.current.offsetWidth), behavior: "smooth" });
    };

    return (
        <div className="w-full">
            <div
                ref={ref}
                onScroll={onScroll}
                className="flex overflow-x-auto snap-x snap-mandatory pb-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
            >
                {products.map((p, i) => (
                    <div key={i} className="flex-shrink-0 w-full snap-center px-6 pt-2 pb-4 flex justify-center">
                        <div
                            className="relative w-full max-w-[300px] rounded-[2rem] p-8 flex flex-col items-center gap-5 overflow-hidden"
                            style={{
                                background: `linear-gradient(145deg,rgba(7,28,82,0.75),rgba(2,13,43,0.92))`,
                                border: `1px solid rgba(${p.accentRgb},0.45)`,
                                boxShadow: `0 0 70px -15px rgba(${p.accentRgb},0.4),inset 0 1px 0 rgba(255,255,255,0.05)`,
                            }}
                        >
                            {/* bg glow */}
                            <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full pointer-events-none"
                                style={{ background: `radial-gradient(circle,rgba(${p.accentRgb},0.2) 0%,transparent 70%)`, filter: "blur(28px)" }} />

                            {/* badge */}
                            <span className="relative z-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase rounded-full px-3.5 py-1.5"
                                style={{ border: `1px solid ${p.accent}55`, color: p.accent, background: `${p.accent}15` }}>
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ background: p.accent, boxShadow: `0 0 5px ${p.accent}` }} />
                                {getField(p.badge, lang)}
                            </span>

                            {/* image */}
                            <img
                                src={p.img} alt={getField(p.label, lang)}
                                className="relative z-10 w-44 h-auto object-contain"
                                style={{ filter: `drop-shadow(0 20px 40px rgba(${p.accentRgb},0.65))`, animation: "drumFloat 4s ease-in-out infinite" }}
                            />

                            {/* info */}
                            <div className="relative z-10 text-center">
                                <h2 className="text-sm font-black tracking-widest uppercase text-white mb-2 leading-tight">
                                    {getField(p.label, lang)}
                                </h2>
                                <p className="text-xs text-white/50 leading-relaxed font-light">
                                    {getField(p.desc, lang)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* progress dots */}
            <div className="flex justify-center gap-2 pb-8 mt-1">
                {products.map((p, i) => (
                    <button key={i} onClick={() => goTo(i)}
                        style={{
                            width: current === i ? 28 : 8, height: 8, borderRadius: 9999,
                            background: current === i ? p.accent : "rgba(255,255,255,0.2)",
                            transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                            border: "none", cursor: "pointer", padding: 0,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════════════════════════
   DESKTOP — 3-D drum + animated info panel
══════════════════════════════════════════════════════════════════ */
const DRUM_R = 300;

function DrumShowcase({ products, lang }: { products: Product[]; lang: string }) {
    const drum  = [...products, ...products];
    const COUNT = drum.length;
    const STEP  = 360 / COUNT;

    const [rotation, setRotation] = useState(0);
    const [dragging, setDragging] = useState(false);
    const dragRef = useRef<{ x: number; rot: number; time: number } | null>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const rotRef  = useRef(rotation);
    rotRef.current = rotation;

    const activeRaw  = Math.round(-rotation / STEP);
    const active     = ((activeRaw % COUNT) + COUNT) % COUNT;
    const activeIdx  = active % products.length;
    const ap         = products[activeIdx];

    const startAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(
            () => setRotation(r => Math.round(r / STEP) * STEP - STEP),
            4500
        );
    }, [STEP]);

    const stopAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
    }, []);

    useEffect(() => { startAuto(); return () => stopAuto(); }, [startAuto, stopAuto]);

    const goTo = useCallback((idx: number) => {
        stopAuto();
        let diff = (idx - active + COUNT) % COUNT;
        if (diff > COUNT / 2) diff -= COUNT;
        setRotation(Math.round(rotRef.current / STEP) * STEP - diff * STEP);
        setTimeout(startAuto, 4500);
    }, [active, COUNT, STEP, startAuto, stopAuto]);

    /* keyboard */
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft")  goTo((active - 1 + COUNT) % COUNT);
            if (e.key === "ArrowRight") goTo((active + 1) % COUNT);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active, COUNT, goTo]);

    /* drag */
    const handleMove = useCallback((x: number) => {
        if (!dragging || !dragRef.current) return;
        setRotation(dragRef.current.rot + (x - dragRef.current.x) * 0.4);
    }, [dragging]);

    const handleEnd = useCallback((x: number) => {
        if (!dragging || !dragRef.current) return;
        setDragging(false);
        const dx = x - dragRef.current.x;
        const dt = Date.now() - dragRef.current.time;
        let fin = dragRef.current.rot + dx * 0.4;
        if (dt < 400 && Math.abs(dx) > 30) fin += (dx / dt) * 150;
        setRotation(Math.round(fin / STEP) * STEP);
        startAuto();
        dragRef.current = null;
    }, [dragging, STEP, startAuto]);

    useEffect(() => {
        if (!dragging) return;
        const mm = (e: MouseEvent) => handleMove(e.clientX);
        const mu = (e: MouseEvent) => handleEnd(e.clientX);
        window.addEventListener("mousemove", mm);
        window.addEventListener("mouseup", mu);
        return () => { window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu); };
    }, [dragging, handleMove, handleEnd]);

    const hint: Record<string, string> = {
        ru: "Перетащите · ← →",
        kz: "Сүйреп · ← →",
        en: "Drag · ← →",
        zh: "拖动 · ← →",
    };

    return (
        <div className="relative w-full overflow-hidden">

            {/* ── dynamic bg glow (transitions color with active product) ── */}
            <div className="absolute pointer-events-none"
                style={{
                    top: "50%", right: "3%",
                    transform: "translateY(-50%)",
                    width: 680, height: 680,
                    background: `radial-gradient(ellipse,rgba(${ap.accentRgb},0.1) 0%,transparent 65%)`,
                    filter: "blur(60px)",
                    borderRadius: "50%",
                    transition: "background 1.4s ease",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12
                            grid lg:grid-cols-[1fr_520px] gap-4 lg:gap-10 items-center"
                style={{ minHeight: 580 }}>

                {/* ════════════════════════════════════════
                    INFO PANEL — key forces remount → animation plays
                ════════════════════════════════════════ */}
                <div
                    key={activeIdx}
                    className="relative z-10 py-10 lg:py-0"
                    style={{ animation: "infoIn 0.55s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    {/* giant number watermark */}
                    <div
                        className="absolute -top-4 -left-2 font-black leading-none select-none pointer-events-none tabular-nums"
                        style={{
                            fontSize: "clamp(80px,14vw,180px)",
                            color: `rgba(${ap.accentRgb},0.055)`,
                            lineHeight: 1,
                        }}
                    >
                        {String(activeIdx + 1).padStart(2, "0")}
                    </div>

                    {/* badge */}
                    <div className="relative z-10 mb-5">
                        <span
                            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase rounded-full px-4 py-2"
                            style={{ border: `1px solid ${ap.accent}50`, color: ap.accent, background: `${ap.accent}12` }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: ap.accent, boxShadow: `0 0 6px ${ap.accent}, 0 0 14px ${ap.accent}55` }}
                            />
                            {getField(ap.badge, lang)}
                        </span>
                    </div>

                    {/* title */}
                    <h2
                        className="relative z-10 font-black uppercase leading-[1.05] text-white mb-4"
                        style={{
                            fontSize: "clamp(1.8rem,4vw,3rem)",
                            letterSpacing: "0.02em",
                            textShadow: `0 0 80px rgba(${ap.accentRgb},0.3)`,
                        }}
                    >
                        {getField(ap.label, lang)}
                    </h2>

                    {/* accent divider */}
                    <div
                        className="relative z-10 h-[2px] w-14 rounded-full mb-5"
                        style={{ background: `linear-gradient(90deg,${ap.accent},transparent)`, transition: "background 0.8s ease" }}
                    />

                    {/* description */}
                    <p className="relative z-10 text-white/55 leading-relaxed text-[15px] font-light max-w-xs mb-8">
                        {getField(ap.desc, lang)}
                    </p>

                    {/* controls */}
                    <div className="relative z-10 flex items-center gap-4 flex-wrap">

                        {/* prev */}
                        <button
                            onClick={() => goTo((active - 1 + COUNT) % COUNT)}
                            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                            style={{ borderColor: `rgba(${ap.accentRgb},0.35)`, background: `rgba(${ap.accentRgb},0.08)` }}
                        >
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M10 12L6 8l4-4" />
                            </svg>
                        </button>

                        {/* countdown ring */}
                        <div className="relative w-11 h-11">
                            <svg
                                key={`ring-${activeIdx}`}
                                width="44" height="44" viewBox="0 0 48 48"
                                style={{ transform: "rotate(-90deg)" }}
                            >
                                <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
                                <circle
                                    cx="24" cy="24" r="20" fill="none"
                                    stroke={ap.accent}
                                    strokeWidth="2"
                                    strokeDasharray={`${CIRC}`}
                                    strokeDashoffset="0"
                                    strokeLinecap="round"
                                    style={{ animation: "countdownRing 4.5s linear forwards", opacity: 0.75 }}
                                />
                            </svg>
                            <span
                                className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tabular-nums"
                                style={{ color: "rgba(255,255,255,0.45)" }}
                            >
                                {activeIdx + 1}/{products.length}
                            </span>
                        </div>

                        {/* next */}
                        <button
                            onClick={() => goTo((active + 1) % COUNT)}
                            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                            style={{ borderColor: `rgba(${ap.accentRgb},0.35)`, background: `rgba(${ap.accentRgb},0.08)` }}
                        >
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M6 4l4 4-4 4" />
                            </svg>
                        </button>

                        {/* dot indicators */}
                        <div className="flex gap-1.5">
                            {products.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    style={{
                                        width: activeIdx === i ? 22 : 7, height: 7, borderRadius: 9999,
                                        background: activeIdx === i ? ap.accent : "rgba(255,255,255,0.18)",
                                        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                                        border: "none", cursor: "pointer", padding: 0,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="relative z-10 mt-5 text-[10px] text-white/20 tracking-[0.22em] uppercase">
                        {hint[lang] ?? hint.en}
                    </p>
                </div>

                {/* ════════════════════════════════════════
                    3-D DRUM
                ════════════════════════════════════════ */}
                <div
                    className="relative select-none"
                    style={{ height: 520 }}
                    onMouseDown={e => { stopAuto(); setDragging(true); dragRef.current = { x: e.clientX, rot: rotation, time: Date.now() }; }}
                    onTouchStart={e => { stopAuto(); setDragging(true); dragRef.current = { x: e.touches[0].clientX, rot: rotation, time: Date.now() }; }}
                    onTouchMove={e => handleMove(e.touches[0].clientX)}
                    onTouchEnd={e => handleEnd(e.changedTouches[0].clientX)}
                >
                    {/* floor glow */}
                    <div
                        className="absolute bottom-14 left-1/2 -translate-x-1/2 pointer-events-none"
                        style={{
                            width: 220, height: 55,
                            background: `radial-gradient(ellipse,rgba(${ap.accentRgb},0.3) 0%,transparent 70%)`,
                            filter: "blur(14px)",
                            transition: "background 0.8s ease",
                        }}
                    />

                    {/* perspective stage */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ perspective: "1200px", cursor: dragging ? "grabbing" : "grab" }}
                    >
                        <div style={{
                            transformStyle: "preserve-3d",
                            transform: `rotateY(${rotation}deg)`,
                            transition: dragging ? "none" : "transform 0.85s cubic-bezier(0.22,1,0.36,1)",
                            width: 0, height: 0, position: "relative",
                        }}>
                            {drum.map((p, i) => {
                                const isActive = active === i;
                                return (
                                    <div
                                        key={i}
                                        onClick={() => !dragging && goTo(i)}
                                        style={{
                                            position: "absolute",
                                            width: 200, left: -100, top: -215,
                                            transformStyle: "preserve-3d",
                                            transform: `rotateY(${i * STEP}deg) translateZ(${DRUM_R}px)`,
                                            cursor: isActive ? "default" : "pointer",
                                            backfaceVisibility: "hidden",
                                            WebkitBackfaceVisibility: "hidden",
                                        }}
                                    >
                                        <div style={{
                                            width: "100%", height: 400,
                                            position: "relative",
                                            opacity: isActive ? 1 : 0.2,
                                            transform: isActive ? "scale(1.06) translateY(-10px)" : "scale(0.86)",
                                            transition: "all 0.75s cubic-bezier(0.22,1,0.36,1)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            backfaceVisibility: "hidden",
                                            WebkitBackfaceVisibility: "hidden",
                                        }}>
                                            {/* ambient glow behind bottle */}
                                            {isActive && (
                                                <div style={{
                                                    position: "absolute", top: "8%", left: "50%",
                                                    transform: "translateX(-50%)",
                                                    width: 110, height: "68%",
                                                    background: `radial-gradient(ellipse,rgba(${p.accentRgb},0.14) 0%,transparent 70%)`,
                                                    filter: "blur(18px)", pointerEvents: "none",
                                                }} />
                                            )}

                                            {/* water drops */}
                                            {isActive && ([
                                                { s: 5,  l: "16%", b: "30%", delay: "0s",   dur: "3.2s" },
                                                { s: 4,  l: "77%", b: "40%", delay: "0.9s", dur: "2.8s" },
                                                { s: 6,  l: "26%", b: "20%", delay: "1.6s", dur: "3.6s" },
                                                { s: 3,  l: "64%", b: "24%", delay: "0.4s", dur: "2.5s" },
                                                { s: 5,  l: "83%", b: "50%", delay: "1.3s", dur: "3.9s" },
                                                { s: 4,  l: "10%", b: "44%", delay: "2.1s", dur: "3.0s" },
                                                { s: 3,  l: "50%", b: "16%", delay: "0.7s", dur: "2.7s" },
                                            ] as { s: number; l: string; b: string; delay: string; dur: string }[]).map((d, i) => (
                                                <div key={i} style={{
                                                    position: "absolute",
                                                    width: d.s, height: d.s * 1.35,
                                                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                                    background: `rgba(${p.accentRgb},0.55)`,
                                                    boxShadow: `0 0 ${d.s * 2}px rgba(${p.accentRgb},0.4)`,
                                                    left: d.l, bottom: d.b,
                                                    animation: `floatDrop ${d.dur} ease-in-out infinite ${d.delay}`,
                                                    pointerEvents: "none",
                                                }} />
                                            ))}

                                            {/* ripple rings at base */}
                                            {isActive && ([0, 0.7, 1.4] as number[]).map((delay, i) => (
                                                <div key={i} style={{
                                                    position: "absolute",
                                                    bottom: "6%", left: "50%",
                                                    width: 72, height: 16,
                                                    borderRadius: "50%",
                                                    border: `1px solid rgba(${p.accentRgb},0.5)`,
                                                    animation: `rippleOut 2.1s ease-out infinite ${delay}s`,
                                                    pointerEvents: "none",
                                                }} />
                                            ))}

                                            <img
                                                src={p.img}
                                                alt={getField(p.label, lang)}
                                                style={{
                                                    position: "relative", zIndex: 1,
                                                    width: "92%", maxHeight: 370,
                                                    objectFit: "contain",
                                                    filter: isActive
                                                        ? `drop-shadow(0 28px 55px rgba(${p.accentRgb},0.75))`
                                                        : `drop-shadow(0 8px 18px rgba(${p.accentRgb},0.15))`,
                                                    animation: isActive ? "drumFloat 4s ease-in-out infinite" : "none",
                                                    transition: "filter 0.7s ease",
                                                }}
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE TEMPLATE
══════════════════════════════════════════════════════════════════ */
export default function CatalogTemplate({
    products,
    titleRu, titleKz, titleEn, titleZh,
    descRu,  descKz,  descEn,  descZh,
    category,
}: {
    products: Product[];
    titleRu: string; titleKz: string; titleEn?: string; titleZh?: string;
    descRu:  string; descKz:  string; descEn?:  string; descZh?:  string;
    category: "water" | "lemonade" | "energy";
}) {
    const [lang, setLang] = useLang();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const title = ({ ru: titleRu, kz: titleKz, en: titleEn ?? titleRu, zh: titleZh ?? titleRu } as Record<string, string>)[lang];
    const catalogLabel = ({ ru: "Каталог", kz: "Каталог", en: "Catalog", zh: "目录" } as Record<string, string>)[lang];

    const categoryColors = { water: "#2563eb", lemonade: "#f59e0b", energy: "#22c55e" };
    const accent = categoryColors[category];

    return (
        <>
            <style>{`
                @keyframes fadeUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:none} }
                @keyframes drumFloat{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                @keyframes infoIn   { from{opacity:0;transform:translateX(-24px)} to{opacity:1;transform:none} }
                @keyframes scanline { 0%{top:-38%} 100%{top:138%} }
                @keyframes shimmer  { 0%{left:-60%} 65%{left:130%} 100%{left:130%} }
                @keyframes countdownRing {
                    from { stroke-dashoffset: 0 }
                    to   { stroke-dashoffset: ${CIRC.toFixed(2)} }
                }
                @keyframes floatDrop {
                    0%   { transform: translateY(0)     scale(1);    opacity: 0.7; }
                    70%  { transform: translateY(-28px) scale(0.7);  opacity: 0.3; }
                    100% { transform: translateY(-44px) scale(0.4);  opacity: 0;   }
                }
                @keyframes rippleOut {
                    0%   { transform: translateX(-50%) scale(0.5); opacity: 0.55; }
                    100% { transform: translateX(-50%) scale(3);   opacity: 0;    }
                }
            `}</style>

            <div className="min-h-screen bg-[#061842] text-white">
                <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />

                {/* ── header ── */}
                <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.08] backdrop-blur-xl bg-[#061842]/80">
                    <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5">
                        <Link href="/" className="no-underline">
                            <span className="alasu-logo text-lg sm:text-xl text-white select-none">ALASU</span>
                        </Link>
                        <div className="flex items-center gap-3 sm:gap-6">
                            <LanguageSelector lang={lang} setLang={setLang} />
                            <button onClick={() => setMenuOpen(true)} aria-label="Меню"
                                className="group relative flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/35 backdrop-blur-sm transition-all duration-300 cursor-pointer">
                                <span className="block w-[18px] h-[1.5px] bg-white/80 rounded-full group-hover:w-[22px] group-hover:bg-white transition-all duration-300" />
                                <span className="block w-[14px] h-[1.5px] bg-white/50 rounded-full group-hover:w-[22px] group-hover:bg-white/80 transition-all duration-300" />
                                <span className="block w-[10px] h-[1.5px] bg-white/30 rounded-full group-hover:w-[22px] group-hover:bg-white/60 transition-all duration-300" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* ── breadcrumb ── */}
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-28 sm:pt-32 pb-4"
                    style={{ animation: "fadeUp 0.6s ease-out both" }}
                >
                    <div className="flex items-center gap-2 text-[11px] text-white/30 tracking-widest uppercase">
                        <Link href="/catalog" className="hover:text-white/60 transition-colors">{catalogLabel}</Link>
                        <span>/</span>
                        <span style={{ color: accent }}>{title}</span>
                    </div>
                </div>

                {/* ── showcase ── */}
                <div className="pb-16 sm:pb-24 pt-2" style={{ animation: "fadeUp 0.75s ease-out 0.1s both" }}>
                    {isMobile
                        ? <MobileCarousel products={products} lang={lang} />
                        : <DrumShowcase   products={products} lang={lang} />
                    }
                </div>

                <Footer lang={lang} />
            </div>
        </>
    );
}
