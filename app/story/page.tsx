"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { BurgerMenu, useReveal, useLang } from "../components/shared";
import LanguageSelector from "../components/LanguageSelector";

const txt = {
    label:    { ru: "История бренда",        kz: "Бренд тарихы",       en: "Brand Story",           zh: "品牌故事"   },
    title:    { ru: "Рождённая в горах",      kz: "Таулардан туған",     en: "Born in the Mountains", zh: "诞生于山间"  },
    ch1title: { ru: "Истоки",                 kz: "Бастаулар",           en: "Origins",               zh: "起源"       },
    ch2title: { ru: "Путь воды",              kz: "Судың жолы",          en: "The Water's Journey",   zh: "水的旅程"   },
    p1: {
        ru: "ALASU рождается в сердце Хан Тэнгри — среди ледников, горного воздуха и чистейших природных источников.",
        kz: "ALASU Хан Тәңірінің жүрегінде дүниеге келеді — мұздықтар, тау ауасы мен ең таза табиғи бастаулар арасында.",
        en: "ALASU is born in the heart of Khan Tengri — among glaciers, mountain air and the purest natural springs.",
        zh: "ALASU诞生于汗腾格里的心脏——在冰川、山间空气和最纯净的天然泉水之间。",
    },
    p2: {
        ru: "Вода проходит естественную фильтрацию через каменные породы на протяжении десятилетий, насыщаясь природными минералами.",
        kz: "Су ондаған жылдар бойы тас жыныстары арқылы табиғи сүзгіден өтіп, табиғи минералдармен қанығады.",
        en: "The water undergoes natural filtration through rock formations over decades, becoming enriched with natural minerals.",
        zh: "水经过数十年岩石层的自然过滤，富含天然矿物质。",
    },
    q1: { ru: "ALASU — это не просто вода.",             kz: "ALASU — бұл жай ғана су емес.",             en: "ALASU is not just water.",                    zh: "ALASU不仅仅是水。"       },
    q2: { ru: "Это энергия гор и чистота природы.",      kz: "Бұл таулардың энергиясы мен табиғаттың тазалығы.", en: "It is the energy of the mountains and the purity of nature.", zh: "这是山的能量和大自然的纯净。" },
};

const STATS = [
    { value: "7010", unit: "м",  label: { ru: "Высота Хан Тэнгри",   kz: "Хан Тәңірі биіктігі", en: "Khan Tengri altitude", zh: "汗腾格里海拔" } },
    { value: "40+",  unit: "",   label: { ru: "Лет фильтрации",       kz: "Сүзгі жылдары",       en: "Years of filtration",  zh: "过滤年限"     } },
    { value: "pH",   unit: "7.4",label: { ru: "Баланс воды",          kz: "Су балансы",           en: "Water balance",        zh: "水的平衡"     } },
    { value: "100%", unit: "",   label: { ru: "Натуральная",          kz: "Табиғи",               en: "Natural",              zh: "天然"         } },
];

const PARTICLES = [
    { size: 3, x: "12%",  y: "22%", delay: "0s",   dur: "7s"  },
    { size: 2, x: "78%",  y: "35%", delay: "1.2s", dur: "9s"  },
    { size: 4, x: "55%",  y: "60%", delay: "2.5s", dur: "6s"  },
    { size: 2, x: "30%",  y: "78%", delay: "0.8s", dur: "8s"  },
    { size: 3, x: "88%",  y: "50%", delay: "3s",   dur: "7.5s"},
    { size: 2, x: "45%",  y: "15%", delay: "1.8s", dur: "10s" },
    { size: 4, x: "65%",  y: "72%", delay: "0.4s", dur: "8.5s"},
    { size: 2, x: "20%",  y: "48%", delay: "2.2s", dur: "6.5s"},
    { size: 3, x: "92%",  y: "28%", delay: "1s",   dur: "9s"  },
    { size: 2, x: "38%",  y: "40%", delay: "3.5s", dur: "7s"  },
];

const DROPS = [
    { x: "28%", y: "28%", s: 8,  delay: "0s"   },
    { x: "62%", y: "52%", s: 5,  delay: "0.8s" },
    { x: "18%", y: "62%", s: 7,  delay: "1.5s" },
    { x: "75%", y: "36%", s: 4,  delay: "2s"   },
    { x: "50%", y: "72%", s: 6,  delay: "0.4s" },
];

export default function StoryPage() {
    const [lang, setLang] = useLang();
    const [menuOpen, setMenuOpen] = useState(false);

    const revealHero  = useReveal();
    const revealCh1   = useReveal();
    const revealCh2   = useReveal();
    const revealStats = useReveal();
    const revealQuote = useReveal();

    const L = lang as keyof typeof txt.p1;

    return (
        <div className="bg-[#061842] min-h-screen text-white overflow-x-hidden">
            <style>{`
                @keyframes fadeUp      { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
                @keyframes floatPart   { 0%{transform:translateY(0) scale(1);opacity:0.6} 60%{transform:translateY(-70px) scale(0.7);opacity:0.2} 100%{transform:translateY(-130px) scale(0.4);opacity:0} }
                @keyframes mountainUp  { from{transform:translateY(50px);opacity:0} to{transform:none;opacity:1} }
                @keyframes glowPulse   { 0%,100%{opacity:0.4} 50%{opacity:1} }
                @keyframes orbitRing   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                @keyframes orbitRingRev{ from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
                @keyframes countUp     { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }
                @keyframes dropPulse   { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.15);opacity:0.9} }
                @keyframes lineGrow    { from{scaleY:0} to{scaleY:1} }
                @keyframes scrollBounce{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
            `}</style>

            <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />

            {/* ── HEADER ── */}
            <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.08] backdrop-blur-xl bg-[#061842]/80">
                <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5">
                    <Link href="/" className="no-underline group">
                        <span className="alasu-logo text-lg sm:text-xl text-white select-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-400">
                            ALASU
                        </span>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-5">
                        <LanguageSelector lang={lang} setLang={setLang} />
                        <button onClick={() => setMenuOpen(true)} aria-label="Open menu"
                            className="group relative flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/35 backdrop-blur-sm transition-all duration-300 cursor-pointer">
                            <span className="block w-[18px] h-[1.5px] bg-white/80 rounded-full group-hover:w-[22px] group-hover:bg-white transition-all duration-300" />
                            <span className="block w-[14px] h-[1.5px] bg-white/50 rounded-full group-hover:w-[22px] group-hover:bg-white/80 transition-all duration-300" />
                            <span className="block w-[10px] h-[1.5px] bg-white/30 rounded-full group-hover:w-[22px] group-hover:bg-white/60 transition-all duration-300" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ══════════════════════════════════════════
                HERO
            ══════════════════════════════════════════ */}
            <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-20">
                {/* ambient blobs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px]"
                        style={{ animation: "glowPulse 8s ease-in-out infinite" }} />
                    <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]"
                        style={{ animation: "glowPulse 11s ease-in-out infinite 3s" }} />
                </div>

                {/* floating particles */}
                {PARTICLES.map((p, i) => (
                    <div key={i} style={{
                        position: "absolute", left: p.x, top: p.y,
                        width: p.size, height: p.size, borderRadius: "50%",
                        background: "rgba(147,210,255,0.85)",
                        boxShadow: `0 0 ${p.size * 3}px rgba(147,210,255,0.5)`,
                        animation: `floatPart ${p.dur} ease-in-out infinite ${p.delay}`,
                        pointerEvents: "none",
                    }} />
                ))}

                {/* hero content */}
                <div
                    ref={revealHero.ref}
                    className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-10"
                    style={{ opacity: revealHero.visible ? 1 : 0, transform: revealHero.visible ? "none" : "translateY(40px)", transition: "all 1.1s ease-out" }}
                >
                    <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.38em] uppercase text-blue-400/70 mb-8 font-bold">
                        <span className="w-8 h-px bg-blue-400/40" />
                        {txt.label[L] ?? txt.label.ru}
                        <span className="w-8 h-px bg-blue-400/40" />
                    </p>

                    <h1
                        className="font-black uppercase leading-[0.92] text-white mb-10 select-none"
                        style={{
                            fontSize: "clamp(3.2rem,11vw,9rem)",
                            letterSpacing: "0.02em",
                            textShadow: "0 0 140px rgba(59,130,246,0.25)",
                        }}
                    >
                        {txt.title[L] ?? txt.title.ru}
                    </h1>

                    {/* scroll hint */}
                    <div className="flex flex-col items-center gap-3 mt-4 opacity-25">
                        <div className="w-px h-14 bg-gradient-to-b from-transparent via-white/60 to-transparent"
                            style={{ animation: "scrollBounce 2s ease-in-out infinite" }} />
                    </div>
                </div>

                {/* mountain silhouette */}
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{ animation: "mountainUp 1.6s ease-out both 0.4s" }}>
                    <svg viewBox="0 0 1440 220" preserveAspectRatio="none"
                        className="w-full h-[100px] sm:h-[150px] md:h-[220px]">
                        {/* far range — faint */}
                        <path d="M0,220 L90,145 L180,105 L270,135 L360,65 L460,115 L560,45 L660,95 L760,25 L860,85 L960,55 L1060,105 L1160,38 L1260,95 L1360,62 L1440,85 L1440,220 Z"
                            fill="rgba(6,18,60,0.7)" />
                        {/* near range — solid */}
                        <path d="M0,220 L100,175 L220,148 L340,168 L460,128 L580,158 L700,118 L820,145 L940,125 L1060,152 L1180,118 L1300,148 L1440,130 L1440,220 Z"
                            fill="rgba(4,12,36,0.96)" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                CHAPTERS
            ══════════════════════════════════════════ */}
            <section className="relative py-20 sm:py-32 bg-[#040c24]">
                <div className="max-w-5xl mx-auto px-6 md:px-10">

                    {/* Chapter 01 */}
                    <div
                        ref={revealCh1.ref}
                        className="grid md:grid-cols-2 gap-10 md:gap-20 items-center mb-20 sm:mb-32"
                        style={{ opacity: revealCh1.visible ? 1 : 0, transform: revealCh1.visible ? "none" : "translateY(48px)", transition: "all 1s ease-out" }}
                    >
                        {/* text */}
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <span className="text-[11px] font-black tracking-[0.35em] uppercase text-blue-400/50">01</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-blue-400/25 to-transparent" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-5 leading-tight">
                                {txt.ch1title[L] ?? txt.ch1title.ru}
                            </h2>
                            <p className="text-base sm:text-[17px] text-white/60 leading-[1.8] font-light">
                                {txt.p1[L] ?? txt.p1.ru}
                            </p>
                        </div>

                        {/* decoration — orbiting rings */}
                        <div className="relative flex items-center justify-center h-52 md:h-64">
                            <div className="absolute w-44 h-44 rounded-full border border-blue-500/15"
                                style={{ animation: "orbitRing 22s linear infinite" }}>
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400/70"
                                    style={{ boxShadow: "0 0 12px rgba(96,165,250,0.9)" }} />
                            </div>
                            <div className="absolute w-28 h-28 rounded-full border border-cyan-400/12"
                                style={{ animation: "orbitRingRev 14s linear infinite" }}>
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60"
                                    style={{ boxShadow: "0 0 8px rgba(34,211,238,0.7)" }} />
                            </div>
                            <div className="absolute w-14 h-14 rounded-full border border-white/8"
                                style={{ animation: "orbitRing 8s linear infinite" }}>
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
                            </div>
                            {/* center */}
                            <div className="absolute w-24 h-24 rounded-full bg-blue-500/10 blur-[30px]"
                                style={{ animation: "glowPulse 4s ease-in-out infinite" }} />
                            <div className="w-7 h-7 rounded-full border border-blue-400/50 bg-blue-500/15 backdrop-blur" />
                        </div>
                    </div>

                    {/* divider */}
                    <div className="my-0 mb-20 sm:mb-32 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

                    {/* Chapter 02 */}
                    <div
                        ref={revealCh2.ref}
                        className="grid md:grid-cols-2 gap-10 md:gap-20 items-center"
                        style={{ opacity: revealCh2.visible ? 1 : 0, transform: revealCh2.visible ? "none" : "translateY(48px)", transition: "all 1s ease-out 0.15s" }}
                    >
                        {/* decoration — mountain + drops */}
                        <div className="relative flex items-center justify-center h-52 md:h-64 order-2 md:order-1">
                            {/* mountain lines */}
                            <svg viewBox="0 0 200 130" className="absolute w-48 h-32 opacity-[0.18]">
                                <path d="M10,130 L50,55 L90,15 L130,60 L170,8 L200,50 L200,130 Z"
                                    fill="none" stroke="rgba(96,165,250,1)" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M0,130 L35,85 L80,50 L120,85 L155,42 L200,75 L200,130 Z"
                                    fill="none" stroke="rgba(147,210,255,0.6)" strokeWidth="1" strokeLinejoin="round" />
                            </svg>
                            {/* floating drops */}
                            {DROPS.map((d, i) => (
                                <div key={i} style={{
                                    position: "absolute", left: d.x, top: d.y,
                                    width: d.s, height: d.s * 1.3,
                                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                    background: "rgba(147,210,255,0.45)",
                                    boxShadow: "0 0 10px rgba(96,165,250,0.35)",
                                    animation: `dropPulse 3s ease-in-out infinite ${d.delay}`,
                                }} />
                            ))}
                            {/* glow */}
                            <div className="absolute w-32 h-32 bg-blue-500/8 blur-[40px] rounded-full"
                                style={{ animation: "glowPulse 5s ease-in-out infinite 1s" }} />
                        </div>

                        {/* text */}
                        <div className="order-1 md:order-2">
                            <div className="flex items-center gap-4 mb-5">
                                <span className="text-[11px] font-black tracking-[0.35em] uppercase text-blue-400/50">02</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-blue-400/25 to-transparent" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-5 leading-tight">
                                {txt.ch2title[L] ?? txt.ch2title.ru}
                            </h2>
                            <p className="text-base sm:text-[17px] text-white/60 leading-[1.8] font-light">
                                {txt.p2[L] ?? txt.p2.ru}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                STATS
            ══════════════════════════════════════════ */}
            <section
                ref={revealStats.ref}
                className="py-16 sm:py-20 border-y border-white/[0.06]"
                style={{ background: "linear-gradient(180deg,rgba(3,12,36,0.8) 0%,rgba(6,24,66,0.4) 100%)" }}
            >
                <div className={`max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 transition-all duration-[1000ms] ease-out ${revealStats.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    {STATS.map((s, i) => (
                        <div key={i} className="text-center"
                            style={{ animation: revealStats.visible ? `countUp 0.7s ease-out both ${i * 0.13}s` : "none" }}>
                            <div
                                className="font-black text-white leading-none mb-2 tabular-nums"
                                style={{
                                    fontSize: "clamp(2rem,5vw,3.2rem)",
                                    textShadow: "0 0 40px rgba(59,130,246,0.45)",
                                }}
                            >
                                {s.value}
                                {s.unit && (
                                    <span className="text-blue-400/80 ml-1" style={{ fontSize: "0.45em" }}>{s.unit}</span>
                                )}
                            </div>
                            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/30 font-bold">
                                {(s.label as Record<string, string>)[lang] ?? s.label.ru}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════
                QUOTE
            ══════════════════════════════════════════ */}
            <section ref={revealQuote.ref} className="relative py-28 sm:py-40 overflow-hidden">
                {/* bg glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/6 blur-[100px] rounded-full"
                        style={{ animation: "glowPulse 7s ease-in-out infinite" }} />
                </div>

                <div
                    className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center"
                    style={{ opacity: revealQuote.visible ? 1 : 0, transform: revealQuote.visible ? "none" : "translateY(48px)", transition: "all 1.1s ease-out" }}
                >
                    {/* giant quote mark */}
                    <div className="font-black text-blue-500/8 select-none pointer-events-none leading-none"
                        style={{ fontSize: "clamp(100px,18vw,200px)", fontFamily: "Georgia, serif", marginBottom: "-0.15em" }}>
                        "
                    </div>

                    <p className="text-2xl sm:text-3xl md:text-[2.5rem] font-black uppercase tracking-wide text-white leading-snug mb-5"
                        style={{ textShadow: "0 0 60px rgba(59,130,246,0.2)" }}>
                        {txt.q1[L] ?? txt.q1.ru}
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-[2.5rem] font-black uppercase tracking-wide leading-snug"
                        style={{ background: "linear-gradient(135deg,#60a5fa 0%,#a5f3fc 50%,#60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {txt.q2[L] ?? txt.q2.ru}
                    </p>

                    {/* decorative line */}
                    <div className="mt-14 flex items-center justify-center gap-4">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400/35" />
                        <div className="w-2 h-2 rounded-full bg-blue-400/60"
                            style={{ boxShadow: "0 0 10px rgba(96,165,250,0.8)" }} />
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/20 font-bold">ALASU</span>
                        <div className="w-2 h-2 rounded-full bg-blue-400/60"
                            style={{ boxShadow: "0 0 10px rgba(96,165,250,0.8)" }} />
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400/35" />
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </div>
    );
}
