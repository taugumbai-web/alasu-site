"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { BurgerMenu, useLang } from "../components/shared";
import LanguageSelector from "../components/LanguageSelector";

/* ── Translations ─────────────────────────────────────────────── */
const T = {
    label:  { ru: "Миссия бренда",  kz: "Бренд миссиясы",  en: "Brand Mission",    zh: "品牌使命"   },
    hero1:  { ru: "МЫ ЗА",          kz: "БІЗ",              en: "WE ARE",           zh: "我们支持"   },
    hero2:  { ru: "ЗДОРОВУЮ",       kz: "САЛАМАТТЫ",        en: "FOR A HEALTHY",    zh: "健康"       },
    hero3:  { ru: "НАЦИЮ",          kz: "ҰЛТ ҮШІН",         en: "NATION",           zh: "民族"       },
    p1: {
        ru: "Мы стремимся сделать качественную питьевую воду доступной каждому — и сформировать привычку ежедневного здорового потребления.",
        kz: "Біз сапалы ауыз суды әркімге қолжетімді етуге және күнделікті салауатты тұтыну әдетін қалыптастыруға тырысамыз.",
        en: "We strive to make quality drinking water accessible to everyone and build a habit of daily healthy consumption.",
        zh: "我们致力于让每个人都能获得优质饮用水，培养每日健康饮水的习惯。",
    },
    p2: {
        ru: "Наша цель — быть частью культуры правильного выбора и вносить вклад в здоровую нацию и здоровое будущее поколения.",
        kz: "Біздің мақсатымыз — дұрыс таңдау мәдениетінің бір бөлігі болу және саламатты ұлт пен дені сау болашақ ұрпаққа үлес қосу.",
        en: "Our goal is to be part of a culture of right choices and contribute to a healthy nation and healthy future generations.",
        zh: "我们的目标是成为正确选择文化的一部分，为健康民族和健康未来一代做出贡献。",
    },
    pillars: [
        {
            icon: "💧",
            title: { ru: "Доступность",  kz: "Қолжетімділік", en: "Accessibility", zh: "可及性" },
            desc:  { ru: "Чистая вода — право каждого человека, а не привилегия.", kz: "Таза су — артықшылық емес, әркімнің құқығы.", en: "Clean water is every person's right, not a privilege.", zh: "清洁水是每个人的权利，而非特权。" },
            glow: "rgba(59,130,246,0.4)", border: "rgba(96,165,250,0.25)",
        },
        {
            icon: "🌿",
            title: { ru: "Здоровье",     kz: "Денсаулық",     en: "Health",        zh: "健康"   },
            desc:  { ru: "Инвестиции в здоровье нации начинаются с ежедневного стакана воды.", kz: "Ұлттың денсаулығына инвестиция күнделікті су стаканынан басталады.", en: "Investment in the nation's health starts with a daily glass of water.", zh: "对民族健康的投资从每天一杯水开始。" },
            glow: "rgba(16,185,129,0.4)", border: "rgba(52,211,153,0.25)",
        },
        {
            icon: "✦",
            title: { ru: "Культура",     kz: "Мәдениет",      en: "Culture",       zh: "文化"   },
            desc:  { ru: "Мы формируем культуру осознанного потребления и правильного выбора.", kz: "Біз саналы тұтыну мен дұрыс таңдау мәдениетін қалыптастырамыз.", en: "We cultivate a culture of conscious consumption and right choices.", zh: "我们培育有意识消费和正确选择的文化。" },
            glow: "rgba(99,102,241,0.4)", border: "rgba(129,140,248,0.25)",
        },
    ],
    values: [
        { ru: "Природа", kz: "Табиғат",   en: "Nature",     zh: "自然" },
        { ru: "Здоровье",kz: "Денсаулық", en: "Health",     zh: "健康" },
        { ru: "Чистота", kz: "Тазалық",   en: "Purity",     zh: "纯净" },
        { ru: "Горы",    kz: "Таулар",    en: "Mountains",  zh: "山脉" },
        { ru: "Нация",   kz: "Ұлт",       en: "Nation",     zh: "民族" },
        { ru: "Жизнь",   kz: "Өмір",      en: "Life",       zh: "生命" },
        { ru: "Энергия", kz: "Энергия",   en: "Energy",     zh: "能量" },
        { ru: "Баланс",  kz: "Баланс",    en: "Balance",    zh: "平衡" },
    ],
    quote: {
        ru: "«Вода — это жизнь. Мы — её хранители.»",
        kz: "«Су — өмір. Біз — оның қамқоршылары.»",
        en: "«Water is life. We are its guardians.»",
        zh: "«水是生命。我们是守护者。»",
    },
    principles: { ru: "Наши принципы", kz: "Біздің принциптер", en: "Our Principles", zh: "我们的原则" },
    pillarsTitle: { ru: "Три кита ALASU", kz: "ALASU үш тірегі", en: "Three pillars of ALASU", zh: "ALASU三大支柱" },
};

/* ── Reveal hook ── */
function useRevealAnim() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
        obs.observe(el); return () => obs.disconnect();
    }, []);
    return { ref, visible };
}

/* ── Marquee ── */
function Marquee({ lang }: { lang: string }) {
    const L = lang as keyof typeof T.values[0];
    const items = [...T.values, ...T.values, ...T.values];
    return (
        <div className="relative overflow-hidden py-5 border-y border-white/[0.05]"
            style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
            <div style={{ display: "flex", gap: "3rem", animation: "marqueeScroll 28s linear infinite", width: "max-content" }}>
                {items.map((v, i) => (
                    <span key={i} className="text-[11px] font-black tracking-[0.45em] uppercase whitespace-nowrap select-none"
                        style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.15)" : "rgba(96,165,250,0.35)" }}>
                        {v[L] ?? v.ru}
                        <span className="ml-10 text-blue-500/15">·</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ── Pillar Card ── */
function PillarCard({ pillar, lang, delay }: { pillar: typeof T.pillars[0]; lang: string; delay: number }) {
    const { ref, visible } = useRevealAnim();
    const L = lang as keyof typeof pillar.title;
    return (
        <div ref={ref} className="relative group"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(50px)", transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms` }}>
            <div className="relative rounded-[2rem] p-8 sm:p-10 h-full flex flex-col gap-5 overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg,rgba(6,18,52,0.85),rgba(2,8,26,0.95))", border: `1px solid ${pillar.border}`, backdropFilter: "blur(24px)" }}>

                {/* corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-[2rem] transition-opacity duration-700 opacity-60 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at top right, ${pillar.glow.replace("0.4","0.18")}, transparent 65%)` }} />

                {/* hover full glow */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 90% 90% at 50% 50%, ${pillar.glow.replace("0.4","0.06")}, transparent)` }} />

                {/* bottom shimmer line */}
                <div className="absolute bottom-0 left-8 right-8 h-px rounded-full"
                    style={{ background: `linear-gradient(to right, transparent, ${pillar.border.replace("0.25","0.6")}, transparent)` }} />

                <div className="relative z-10">
                    <div className="text-4xl mb-5" style={{ filter: `drop-shadow(0 0 16px ${pillar.glow})`, animation: `iconFloat ${4 + delay * 0.001}s ease-in-out infinite` }}>
                        {pillar.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white mb-3">
                        {pillar.title[L] ?? pillar.title.ru}
                    </h3>
                    <p className="text-white/40 text-sm sm:text-base leading-relaxed font-light">
                        {pillar.desc[L] ?? pillar.desc.ru}
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ── Pillars Section ── */
function PillarsSection({ lang }: { lang: string }) {
    const { ref, visible } = useRevealAnim();
    const L = lang as keyof typeof T.principles;
    return (
        <section className="relative py-24 sm:py-32 px-5 sm:px-10 md:px-16 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full"
                    style={{ background: "radial-gradient(ellipse, rgba(29,78,216,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} />
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div ref={ref} className="text-center mb-16 sm:mb-20 transition-all duration-1000"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)" }}>
                    <p className="text-[10px] tracking-[0.45em] uppercase font-bold mb-4" style={{ color: "rgba(96,165,250,0.25)" }}>
                        {T.principles[L] ?? T.principles.ru}
                    </p>
                    <h2 className="font-black uppercase shimmer-text" style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-0.01em" }}>
                        {L === "ru" ? <>Три кита <span className="alasu-logo">ALASU</span></>
                        : L === "kz" ? <><span className="alasu-logo">ALASU</span> үш тірегі</>
                        : L === "en" ? <>Three pillars of <span className="alasu-logo">ALASU</span></>
                        : <><span className="alasu-logo">ALASU</span>三大支柱</>}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {T.pillars.map((p, i) => <PillarCard key={i} pillar={p} lang={lang} delay={i * 150} />)}
                </div>
            </div>
        </section>
    );
}

/* ── Quote Section ── */
function QuoteSection({ lang }: { lang: string }) {
    const { ref, visible } = useRevealAnim();
    const L = lang as keyof typeof T.quote;
    return (
        <section ref={ref} className="relative py-28 sm:py-40 px-5 sm:px-10 overflow-hidden border-t border-white/[0.04]"
            style={{ background: "linear-gradient(180deg,#010812 0%,#020d28 50%,#010812 100%)" }}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", filter: "blur(80px)", animation: "aurora1 18s ease-in-out infinite" }} />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(67,56,202,0.1) 0%, transparent 70%)", filter: "blur(70px)", animation: "aurora2 22s ease-in-out infinite" }} />
            </div>
            <div className="max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)" }}>
                <div className="text-5xl mb-10 pulse-glow">💧</div>
                <blockquote className="font-black uppercase shimmer-text mb-8 leading-tight"
                    style={{ fontSize: "clamp(2rem,5vw,5rem)", letterSpacing: "-0.02em" }}>
                    {T.quote[L] ?? T.quote.ru}
                </blockquote>
                <p className="text-[11px] tracking-[0.45em] uppercase font-bold" style={{ color: "rgba(96,165,250,0.35)" }}>
                    <span className="alasu-logo">ALASU</span> · Khan Tengri · 7010m
                </p>
            </div>
        </section>
    );
}

/* ══ PAGE ══════════════════════════════════════════════════════════ */
export default function MissionPage() {
    const [lang, setLang] = useLang();
    const [menuOpen, setMenuOpen] = useState(false);
    const heroReveal  = useRevealAnim();
    const textReveal  = useRevealAnim();
    const L = lang as keyof typeof T.label;

    return (
        <div className="bg-[#010812] min-h-screen text-white overflow-x-hidden">
            <style>{`
                @keyframes shimmer {
                    0%   { background-position: -300% center; }
                    100% { background-position:  300% center; }
                }
                .shimmer-text {
                    background: linear-gradient(
                        105deg,
                        rgba(255,255,255,0.5)  0%,
                        rgba(255,255,255,0.5) 38%,
                        rgba(255,255,255,1)   48%,
                        rgba(186,230,255,1)   50%,
                        rgba(255,255,255,1)   52%,
                        rgba(255,255,255,0.5) 62%,
                        rgba(255,255,255,0.5) 100%
                    );
                    background-size: 300% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 4s linear infinite;
                }
                .shimmer-blue {
                    background: linear-gradient(
                        105deg,
                        rgba(59,130,246,0.5)  0%,
                        rgba(96,165,250,0.8)  38%,
                        rgba(186,230,255,1)   48%,
                        rgba(255,255,255,1)   50%,
                        rgba(186,230,255,1)   52%,
                        rgba(96,165,250,0.8)  62%,
                        rgba(59,130,246,0.5)  100%
                    );
                    background-size: 300% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 3.5s linear infinite 0.4s;
                }
                @keyframes aurora1 {
                    0%  { transform:translate(0,0) scale(1); }
                    33% { transform:translate(60px,-80px) scale(1.15); }
                    66% { transform:translate(-40px,40px) scale(0.9); }
                    100%{ transform:translate(0,0) scale(1); }
                }
                @keyframes aurora2 {
                    0%  { transform:translate(0,0) scale(1); }
                    33% { transform:translate(-50px,70px) scale(0.85); }
                    66% { transform:translate(30px,-30px) scale(1.2); }
                    100%{ transform:translate(0,0) scale(1); }
                }
                @keyframes aurora3 {
                    0%  { transform:translate(0,0) scale(1.1); }
                    50% { transform:translate(40px,60px) scale(0.9); }
                    100%{ transform:translate(0,0) scale(1.1); }
                }
                .aur1{animation:aurora1 18s ease-in-out infinite;}
                .aur2{animation:aurora2 22s ease-in-out infinite;}
                .aur3{animation:aurora3 16s ease-in-out infinite;}
                @keyframes slideUp {
                    from{opacity:0;transform:translateY(40px);}
                    to{opacity:1;transform:translateY(0);}
                }
                .line1{animation:slideUp 0.9s cubic-bezier(.22,.97,.36,1) 0.1s both;}
                .line2{animation:slideUp 0.9s cubic-bezier(.22,.97,.36,1) 0.3s both;}
                .line3{animation:slideUp 0.9s cubic-bezier(.22,.97,.36,1) 0.5s both;}
                @keyframes iconFloat {
                    0%,100%{transform:translateY(0);}
                    50%{transform:translateY(-8px);}
                }
                .icon-float{animation:iconFloat 3.5s ease-in-out infinite;}
                @keyframes marqueeScroll {
                    from{transform:translateX(0);}
                    to{transform:translateX(-33.333%);}
                }
                @keyframes pulseGlow {
                    0%,100%{opacity:0.45;}
                    50%{opacity:1;}
                }
                .pulse-glow{animation:pulseGlow 3s ease-in-out infinite;}
                @keyframes lineGrow {
                    from{width:0;opacity:0;}
                    to{width:100%;opacity:1;}
                }
                .line-grow{animation:lineGrow 1.2s ease-out 0.6s both;}
            `}</style>

            <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.06] backdrop-blur-xl bg-[#010812]/80">
                <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5">
                    <Link href="/" className="no-underline group">
                        <span className="alasu-logo text-lg sm:text-xl text-white select-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-400">ALASU</span>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-5">
                        <LanguageSelector lang={lang} setLang={setLang} />
                        <button onClick={() => setMenuOpen(true)} aria-label="Open menu"
                            className="group flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/35 backdrop-blur-sm transition-all duration-300 cursor-pointer">
                            <span className="block w-[18px] h-[1.5px] bg-white/80 rounded-full group-hover:w-[22px] group-hover:bg-white transition-all duration-300" />
                            <span className="block w-[14px] h-[1.5px] bg-white/50 rounded-full group-hover:w-[22px] group-hover:bg-white/80 transition-all duration-300" />
                            <span className="block w-[10px] h-[1.5px] bg-white/30 rounded-full group-hover:w-[22px] group-hover:bg-white/60 transition-all duration-300" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ══ HERO ══ */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-5 sm:px-10 md:px-16 pt-28 pb-20">

                {/* Aurora orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="aur1 absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full"
                        style={{ background: "radial-gradient(circle,rgba(29,78,216,0.35) 0%,transparent 70%)", filter: "blur(60px)" }} />
                    <div className="aur2 absolute top-[20%] right-[-15%] w-[600px] h-[600px] rounded-full"
                        style={{ background: "radial-gradient(circle,rgba(14,116,144,0.22) 0%,transparent 70%)", filter: "blur(80px)" }} />
                    <div className="aur3 absolute bottom-[-10%] left-[20%] w-[700px] h-[400px] rounded-full"
                        style={{ background: "radial-gradient(circle,rgba(67,56,202,0.18) 0%,transparent 70%)", filter: "blur(100px)" }} />
                </div>

                {/* Dot grid */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(96,165,250,0.1) 1px, transparent 1px)",
                        backgroundSize: "52px 52px",
                        maskImage: "radial-gradient(ellipse 75% 75% at 30% 50%, black 20%, transparent 100%)",
                    }} />

                {/* Big bg number */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden hidden lg:block">
                    <span className="font-black" style={{ fontSize: "clamp(14rem,24vw,26rem)", letterSpacing: "-0.05em", lineHeight: 1, color: "rgba(255,255,255,0.018)" }}>01</span>
                </div>

                <div className="max-w-6xl mx-auto w-full relative z-10">
                    {/* Label */}
                    <div className="line1 flex items-center gap-4 mb-10 sm:mb-14">
                        <span className="w-10 h-px" style={{ background: "linear-gradient(to right,transparent,rgba(96,165,250,0.7))" }} />
                        <span className="text-[10px] sm:text-[12px] tracking-[0.45em] uppercase font-bold" style={{ color: "rgba(96,165,250,0.65)" }}>
                            {T.label[L] ?? T.label.ru}
                        </span>
                        <span className="w-10 h-px" style={{ background: "linear-gradient(to left,transparent,rgba(96,165,250,0.7))" }} />
                    </div>

                    {/* Title */}
                    <div ref={heroReveal.ref} className="mb-14 sm:mb-18">
                        <div className="line1 font-black uppercase leading-none mb-2"
                            style={{ fontSize: "clamp(1rem,3.2vw,2rem)", letterSpacing: "0.55em", color: "rgba(96,165,250,0.45)" }}>
                            {T.hero1[L] ?? T.hero1.ru}
                        </div>
                        <div className="line2 font-black uppercase leading-none shimmer-text"
                            style={{ fontSize: "clamp(3.2rem,9.5vw,9rem)", letterSpacing: "-0.025em" }}>
                            {T.hero2[L] ?? T.hero2.ru}
                        </div>
                        <div className="line3 font-black uppercase leading-none shimmer-blue"
                            style={{ fontSize: "clamp(3.2rem,9.5vw,9rem)", letterSpacing: "-0.025em" }}>
                            {T.hero3[L] ?? T.hero3.ru}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative h-px w-full max-w-xl mb-12 overflow-hidden line-grow">
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to right,transparent,rgba(96,165,250,0.7) 30%,rgba(186,230,255,0.9) 50%,rgba(96,165,250,0.7) 70%,transparent)" }} />
                    </div>

                    {/* Text blocks */}
                    <div ref={textReveal.ref} className="grid md:grid-cols-2 gap-8 max-w-4xl">
                        {[T.p1, T.p2].map((p, i) => (
                            <p key={i} className="text-white/45 text-base sm:text-lg leading-relaxed font-light transition-all duration-1000"
                                style={{ opacity: textReveal.visible ? 1 : 0, transform: textReveal.visible ? "none" : "translateY(30px)", transitionDelay: `${i * 200}ms` }}>
                                {p[L] ?? p.ru}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ MARQUEE ══ */}
            <Marquee lang={lang} />

            {/* ══ PILLARS ══ */}
            <PillarsSection lang={lang} />

            {/* ══ QUOTE ══ */}
            <QuoteSection lang={lang} />

            <Footer lang={lang} />
        </div>
    );
}
