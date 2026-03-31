"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import LanguageSelector, { Lang } from "@/app/components/LanguageSelector";
import { BurgerMenu, useReveal, useLang } from "@/app/components/shared";

const slides = [
    {
        title: { ru: "ALASU", kz: "ALASU", en: "ALASU", zh: "ALASU" },
        sub:   { ru: "чистая сила природы", kz: "табиғаттың таза күші", en: "pure power of nature", zh: "自然的纯净力量" },
        tag:   { ru: "Хан Тэнгри · 7010м", kz: "Хан Тәңірі · 7010м", en: "Khan Tengri · 7010m", zh: "汗腾格里 · 7010米" },
    },
    {
        title: { ru: "ИСТОЧНИК", kz: "БАСТАУ", en: "SOURCE", zh: "源泉" },
        sub:   { ru: "ледниковые воды высокогорья", kz: "таулы ледник сулары", en: "glacial waters of the highlands", zh: "高原冰川之水" },
        tag:   { ru: "40+ лет фильтрации", kz: "40+ жыл сүзгіден", en: "40+ years of filtration", zh: "40+年自然过滤" },
    },
    {
        title: { ru: "МИНЕРАЛЬНАЯ ВОДА", kz: "МИНЕРАЛДЫ СУ", en: "MINERAL WATER", zh: "矿泉水" },
        sub:   { ru: "природный минеральный состав", kz: "табиғи минерал құрамы", en: "natural mineral composition", zh: "天然矿物质成分" },
        tag:   { ru: "pH 7.4 · 100% натуральная", kz: "pH 7.4 · 100% табиғи", en: "pH 7.4 · 100% natural", zh: "pH 7.4 · 100%天然" },
    },
];

const stats = [
    { value: "7010", suffix: "m", label: { ru: "Высота источника", kz: "Бастау биіктігі", en: "Source altitude", zh: "水源海拔" } },
    { value: "7.4", suffix: "",   label: { ru: "Уровень pH",       kz: "pH деңгейі",      en: "pH level",       zh: "pH水平" } },
    { value: "100", suffix: "%",  label: { ru: "Природная вода",   kz: "Табиғи су",       en: "Natural water",  zh: "纯天然水" } },
    { value: "40",  suffix: "+",  label: { ru: "Лет фильтрации",   kz: "Сүзгі жылдары",   en: "Years filtration",zh: "过滤年限" } },
];

const PRODUCTS = [
    {
        href: "/catalog/water",
        img: "/still.png",
        label: { ru: "Вода", kz: "Су", en: "Water", zh: "水" },
        desc:  { ru: "Природная горная вода", kz: "Табиғи тау суы", en: "Natural mountain water", zh: "天然山泉水" },
        accent: "#3b82f6", accentRgb: "59,130,246",
    },
    {
        href: "/catalog/lemonade",
        img: "/Ала лимонати/Тархун-removebg-preview.png",
        label: { ru: "Ала Лимонати", kz: "Ала Лимонати", en: "Ala Lemonati", zh: "柠檬水" },
        desc:  { ru: "Натуральные лимонады", kz: "Табиғи лимонадтар", en: "Natural lemonades", zh: "天然柠檬水" },
        accent: "#22c55e", accentRgb: "34,197,94",
    },
    {
        href: "/catalog/energy",
        img: "/энергетики/Ала_gold-removebg-preview.png",
        label: { ru: "Со вкусом энергетика", kz: "Энергетик дәмі", en: "Energy Flavor", zh: "能量口味" },
        desc:  { ru: "Заряд на весь день", kz: "Бүкіл күнге заряд", en: "Power for the day", zh: "全天能量" },
        accent: "#f59e0b", accentRgb: "245,158,11",
    },
];

// Fixed particles — no Math.random() to avoid SSR mismatch
const PARTICLES = [
    { x: "8%",  y: "18%", s: 3, dur: "7s",   delay: "0s"   },
    { x: "82%", y: "24%", s: 2, dur: "9s",   delay: "1.4s" },
    { x: "47%", y: "68%", s: 4, dur: "6.5s", delay: "2.1s" },
    { x: "22%", y: "55%", s: 2, dur: "8s",   delay: "0.6s" },
    { x: "91%", y: "60%", s: 3, dur: "7.5s", delay: "3.2s" },
    { x: "61%", y: "14%", s: 2, dur: "10s",  delay: "1.8s" },
    { x: "35%", y: "80%", s: 3, dur: "8.5s", delay: "0.3s" },
    { x: "75%", y: "44%", s: 2, dur: "6.8s", delay: "2.7s" },
];

/* ─── Counter ─────────────────────────────────────────────────────── */
function Counter({ target, suffix }: { target: string; suffix: string }) {
    const [display, setDisplay] = useState("0");
    const ref = useReveal();
    useEffect(() => {
        if (!ref.visible) return;
        const num = parseFloat(target);
        const isFloat = target.includes(".");
        const start = performance.now();
        const tick = (now: number) => {
            const p = Math.min((now - start) / 1800, 1);
            const val = num * (1 - Math.pow(1 - p, 3));
            setDisplay(isFloat ? val.toFixed(1) : Math.floor(val).toString());
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [ref.visible, target]);
    return <span ref={ref.ref} className="tabular-nums">{display}{suffix}</span>;
}

/* ─── Products Section ────────────────────────────────────────────── */
function ProductsSection({ lang }: { lang: Lang }) {
    const reveal = useReveal();
    const L = lang as keyof typeof PRODUCTS[0]["label"];
    return (
        <section ref={reveal.ref} className="relative z-40 bg-[#050f2e] py-20 sm:py-28 overflow-hidden">
            {/* bg glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
                {/* heading */}
                <div
                    className="text-center mb-14 sm:mb-18"
                    style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "none" : "translateY(30px)", transition: "all 0.9s ease" }}
                >
                    <p className="inline-flex items-center gap-3 text-[10px] tracking-[0.38em] uppercase text-blue-400/50 mb-5 font-bold">
                        <span className="w-8 h-px bg-blue-400/30" />
                        {lang === "ru" ? "Наши продукты" : lang === "kz" ? "Біздің өнімдер" : lang === "en" ? "Our Products" : "我们的产品"}
                        <span className="w-8 h-px bg-blue-400/30" />
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                        {lang === "ru" ? "Линейка напитков" : lang === "kz" ? "Сусындар желісі" : lang === "en" ? "Beverage Line" : "饮料系列"}
                    </h2>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                    {PRODUCTS.map((p, i) => (
                        <Link key={i} href={p.href} className="no-underline group block">
                            <div
                                className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.07] bg-[#071c52]/40 backdrop-blur h-[340px] sm:h-[380px] flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:scale-[1.02]"
                                style={{
                                    opacity: reveal.visible ? 1 : 0,
                                    transform: reveal.visible ? "none" : "translateY(50px)",
                                    transition: `opacity 0.8s ease ${i * 0.12}s, transform 0.8s ease ${i * 0.12}s, border-color 0.4s, scale 0.4s`,
                                    boxShadow: `0 0 0 0 rgba(${p.accentRgb},0)`,
                                }}
                            >
                                {/* glow on hover via pseudo via box-shadow trick */}
                                <div className="absolute inset-0 rounded-[1.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ boxShadow: `inset 0 0 60px rgba(${p.accentRgb},0.07), 0 0 60px rgba(${p.accentRgb},0.12)` }} />

                                {/* ambient glow top */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{ background: `rgba(${p.accentRgb},0.2)` }} />

                                {/* image */}
                                <div className="flex-1 flex items-center justify-center pt-8 pb-2 px-6">
                                    <img
                                        src={p.img}
                                        alt={p.label[L] ?? p.label.ru}
                                        className="h-[200px] sm:h-[220px] w-auto object-contain transition-transform duration-700 group-hover:-translate-y-2"
                                        style={{ filter: `drop-shadow(0 20px 40px rgba(${p.accentRgb},0.35))` }}
                                    />
                                </div>

                                {/* info */}
                                <div className="px-7 pb-7">
                                    <div className="h-px w-full mb-5 rounded-full" style={{ background: `linear-gradient(to right, rgba(${p.accentRgb},0.5), transparent)` }} />
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white mb-1">
                                                {p.label[L] ?? p.label.ru}
                                            </h3>
                                            <p className="text-xs text-white/40 font-light tracking-wide">
                                                {p.desc[L] ?? p.desc.ru}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.04] group-hover:bg-white/10 transition-all duration-300 ml-4"
                                            style={{ boxShadow: `0 0 20px rgba(${p.accentRgb},0)` }}>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 transition-transform">
                                                <path d="M2 7h10M7 2l5 5-5 5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12"
                    style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "none" : "translateY(20px)", transition: "all 0.9s ease 0.4s" }}>
                    <Link href="/catalog"
                        className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/15 bg-white/[0.04] text-white/60 hover:text-white hover:border-white/35 hover:bg-white/[0.08] transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold no-underline">
                        {lang === "ru" ? "Весь каталог" : lang === "kz" ? "Толық каталог" : lang === "en" ? "Full catalog" : "完整目录"}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 7h10M7 2l5 5-5 5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

/* ─── Brand Teaser ────────────────────────────────────────────────── */
function BrandTeaser({ lang }: { lang: Lang }) {
    const reveal = useReveal();
    return (
        <section ref={reveal.ref} className="relative z-40 overflow-hidden py-20 sm:py-28"
            style={{ background: "linear-gradient(180deg,#050f2e 0%,#061842 100%)" }}>
            {/* decorative mountain lines */}
            <svg className="absolute bottom-0 left-0 right-0 w-full h-[180px] opacity-[0.06] pointer-events-none" viewBox="0 0 1440 180" preserveAspectRatio="none">
                <path d="M0,180 L160,120 L320,148 L480,90 L640,130 L800,70 L960,110 L1120,60 L1280,100 L1440,80 L1440,180 Z" fill="rgba(96,165,250,1)" />
            </svg>

            <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
                <div
                    className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
                    style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "none" : "translateY(40px)", transition: "all 1s ease" }}
                >
                    {/* left — text */}
                    <div>
                        <p className="inline-flex items-center gap-3 text-[10px] tracking-[0.38em] uppercase text-blue-400/50 mb-6 font-bold">
                            <span className="w-6 h-px bg-blue-400/30" />
                            {lang === "ru" ? "История бренда" : lang === "kz" ? "Бренд тарихы" : lang === "en" ? "Brand Story" : "品牌故事"}
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.96] mb-6">
                            {lang === "ru" ? "Рождённая\nв горах" : lang === "kz" ? "Таулардан\nтуған" : lang === "en" ? "Born in\nthe Mountains" : "诞生于\n山间"}
                        </h2>
                        <p className="text-[15px] sm:text-base text-white/50 leading-[1.85] font-light mb-8">
                            {lang === "ru"
                                ? "ALASU рождается в сердце Хан Тэнгри — среди ледников, горного воздуха и чистейших природных источников на высоте 7010 метров."
                                : lang === "kz"
                                    ? "ALASU Хан Тәңірінің жүрегінде — мұздықтар, тау ауасы мен 7010 метр биіктіктегі ең таза табиғи бастаулар арасында дүниеге келеді."
                                    : lang === "en"
                                        ? "ALASU is born in the heart of Khan Tengri — among glaciers, mountain air and the purest natural springs at an altitude of 7010 meters."
                                        : "ALASU诞生于汗腾格里的心脏——在海拔7010米的冰川、山间空气和最纯净的天然泉水之间。"
                            }
                        </p>
                        <Link href="/story"
                            className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase font-black text-blue-400 hover:text-white transition-colors duration-300 no-underline group">
                            {lang === "ru" ? "Читать историю" : lang === "kz" ? "Тарихты оқу" : lang === "en" ? "Read story" : "阅读故事"}
                            <span className="block w-8 h-px bg-blue-400/50 group-hover:w-14 group-hover:bg-white transition-all duration-500" />
                        </Link>
                    </div>

                    {/* right — visual */}
                    <div className="relative flex items-center justify-center h-64 md:h-72">
                        {/* orbit rings */}
                        <div className="absolute w-52 h-52 rounded-full border border-blue-500/10"
                            style={{ animation: "orbitSlow 28s linear infinite" }}>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                                style={{ background: "rgba(96,165,250,0.8)", boxShadow: "0 0 16px rgba(96,165,250,0.9)" }} />
                        </div>
                        <div className="absolute w-36 h-36 rounded-full border border-cyan-400/10"
                            style={{ animation: "orbitSlow 18s linear infinite reverse" }}>
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                                style={{ background: "rgba(34,211,238,0.7)", boxShadow: "0 0 12px rgba(34,211,238,0.8)" }} />
                        </div>
                        <div className="absolute w-20 h-20 rounded-full border border-white/8"
                            style={{ animation: "orbitSlow 12s linear infinite" }}>
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/50" />
                        </div>
                        {/* center glow */}
                        <div className="absolute w-28 h-28 rounded-full bg-blue-500/15 blur-[40px]"
                            style={{ animation: "glowBreath 4s ease-in-out infinite" }} />
                        {/* peak text */}
                        <div className="text-center z-10">
                            <div className="font-black text-white/90 leading-none tabular-nums"
                                style={{ fontSize: "clamp(2rem,5vw,3rem)", textShadow: "0 0 60px rgba(59,130,246,0.5)" }}>
                                7010
                            </div>
                            <div className="text-[10px] tracking-[0.3em] uppercase text-blue-400/60 font-bold mt-1">metres</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Stats Section ───────────────────────────────────────────────── */
function StatsSection({ lang }: { lang: Lang }) {
    const reveal = useReveal();
    return (
        <section ref={reveal.ref} className="relative z-40 overflow-hidden py-16 sm:py-24"
            style={{ background: "linear-gradient(180deg,#061842 0%,#040e26 100%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            {/* grid pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-600/6 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
                    {stats.map((s, i) => (
                        <div key={i} className="text-center group"
                            style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "none" : "translateY(30px)", transition: `opacity 0.7s ${i * 0.12}s ease, transform 0.7s ${i * 0.12}s ease` }}>
                            {/* top accent line */}
                            <div className="w-8 h-0.5 mx-auto mb-5 rounded-full"
                                style={{ background: "linear-gradient(to right,rgba(59,130,246,0.8),rgba(96,165,250,0.3))", boxShadow: "0 0 12px rgba(59,130,246,0.4)" }} />
                            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-3 leading-none"
                                style={{ textShadow: "0 0 60px rgba(59,130,246,0.4)" }}>
                                <Counter target={s.value} suffix={s.suffix} />
                            </div>
                            <p className="text-[10px] sm:text-[11px] text-white/30 tracking-[0.22em] uppercase font-bold">
                                {s.label[lang]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Contact Section ─────────────────────────────────────────────── */
function ContactSection({ lang }: { lang: Lang }) {
    const reveal = useReveal();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [drawn, setDrawn] = useState(false);
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => setDrawn(e.isIntersecting), { threshold: 0.15 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const sendWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const f = e.currentTarget;
        const name = (f.elements.namedItem("name") as HTMLInputElement).value;
        const phone = (f.elements.namedItem("phone") as HTMLInputElement).value;
        window.open(`https://wa.me/77008878887?text=Имя: ${name}%0AТелефон: ${phone}`, "_blank");
    };

    return (
        <section id="partner" ref={sectionRef} className="relative z-40 overflow-hidden py-20 sm:py-28"
            style={{ background: "linear-gradient(180deg,#040e26 0%,#061842 100%)" }}>
            {/* radial glow */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%,rgba(59,130,246,0.1) 0%,transparent 70%)" }} />

            <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center">
                {/* mountain SVG */}
                <svg viewBox="0 0 500 180" className="mb-10 pointer-events-none select-none w-[180px] h-[58px] sm:w-[260px] sm:h-[84px]" fill="none" style={{ overflow: "visible" }}>
                    <defs>
                        <radialGradient id="ctaMglow" cx="50%" cy="90%" r="55%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <ellipse cx="250" cy="162" rx="200" ry="28" fill="url(#ctaMglow)" />
                    <path d="M0,162 L55,130 L90,140 L140,95 L175,110 L215,70 L255,85 L285,55 L320,75 L365,115 L410,98 L460,130 L500,162"
                        stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
                    <path className={drawn ? "mountain-line-animated" : "mountain-line-reset"}
                        d="M8,162 L45,138 L68,145 L105,112 L122,120 L155,82 L172,92 L195,58 L208,68 L222,48 L228,42 L250,8 L272,42 L278,48 L292,68 L305,58 L328,92 L345,82 L378,120 L395,112 L432,145 L455,138 L492,162"
                        stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div ref={reveal.ref}
                    className="w-full"
                    style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "none" : "translateY(40px)", transition: "all 0.9s ease" }}>

                    <div className="text-center mb-10">
                        <p className="inline-flex items-center gap-3 text-[10px] tracking-[0.38em] uppercase text-blue-400/50 mb-5 font-bold">
                            <span className="w-8 h-px bg-blue-400/30" />
                            {lang === "ru" ? "Стать партнёром" : lang === "kz" ? "Серіктес болу" : lang === "en" ? "Become a partner" : "成为合作伙伴"}
                            <span className="w-8 h-px bg-blue-400/30" />
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                            {lang === "ru" ? "Оставьте заявку" : lang === "kz" ? "Өтініш қалдырыңыз" : lang === "en" ? "Leave a request" : "提交申请"}
                        </h2>
                    </div>

                    <form onSubmit={sendWhatsApp}
                        className="grid sm:grid-cols-3 gap-4 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-white/[0.08]"
                        style={{ boxShadow: "0 0 80px rgba(59,130,246,0.06)" }}>
                        <input name="name"
                            placeholder={lang === "ru" ? "Ваше имя" : lang === "kz" ? "Аты-жөніңіз" : lang === "en" ? "Your name" : "您的姓名"}
                            required
                            className="bg-white/[0.04] border border-white/10 px-5 py-4 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all font-light text-sm" />
                        <input name="phone"
                            placeholder={lang === "ru" || lang === "kz" ? "Телефон" : lang === "en" ? "Phone" : "电话"}
                            required
                            className="bg-white/[0.04] border border-white/10 px-5 py-4 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all font-light text-sm" />
                        <button type="submit"
                            className="sweep-btn relative overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-black tracking-[0.18em] uppercase py-4 rounded-xl transition-all duration-300 text-sm"
                            style={{ boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}>
                            {lang === "ru" ? "Отправить" : lang === "kz" ? "Жіберу" : lang === "en" ? "Send" : "发送"}
                        </button>
                    </form>

                    <p className="text-center mt-6 text-white/20 text-[10px] tracking-[0.28em] uppercase font-light">
                        {lang === "ru" ? "Мы свяжемся с вами в ближайшее время" : lang === "kz" ? "Біз сізге жақын арада хабарласамыз" : lang === "en" ? "We will contact you shortly" : "我们会尽快与您联系"}
                    </p>

                    {/* Address */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                        <div className="flex items-center gap-2 text-white/35 text-xs font-light">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400/60 flex-shrink-0">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                <circle cx="12" cy="9" r="2.5"/>
                            </svg>
                            <span className="tracking-wide">
                                {lang === "ru" || lang === "kz" ? "ул. Тобаякова 52" : "Tobayakova 52"}
                            </span>
                        </div>
                        <span className="hidden sm:block text-white/10">·</span>
                        <a
                            href="https://2gis.kz/search/Тобаякова%2052"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-blue-400/70 hover:text-blue-300 transition-colors duration-300 no-underline"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 11l3 3L22 4"/>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                            </svg>
                            2ГИС
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function Home() {
    const [lang, setLang] = useLang();
    const [menu, setMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [vh, setVh] = useState(800);
    const [slideIdx, setSlideIdx] = useState(0);
    const [heroVisible, setHeroVisible] = useState(true);
    const [preloader, setPreloader] = useState(true);
    const [preOut, setPreOut] = useState(false);

    useEffect(() => {
        const update = () => setVh(window.innerHeight);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const t1 = setTimeout(() => setPreOut(true), 2600);
        const t2 = setTimeout(() => { setPreloader(false); document.body.style.overflow = ""; }, 3200);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrollY(y);
            const idx = Math.min(slides.length - 1, Math.floor(y / vh));
            setSlideIdx(idx);
            setHeroVisible(y < slides.length * vh - 20);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [vh]);

    useEffect(() => {
        if (!preloader) document.body.style.overflow = menu ? "hidden" : "";
        return () => { if (!preloader) document.body.style.overflow = ""; };
    }, [menu, preloader]);

    const slide = slides[slideIdx];
    // progress within current slide [0..1]
    const slideProgress = vh > 0 ? Math.min(1, (scrollY % vh) / vh) : 0;
    const L = lang as keyof typeof slide.title;

    return (
        <>
            {/* ── Preloader ── */}
            {preloader && (
                <div className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#010c1f] ${preOut ? "pre-out" : ""}`}>
                    {/* subtle grid */}
                    <div className="absolute inset-0 pointer-events-none opacity-30"
                        style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                    {/* ambient */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 blur-[150px] rounded-full pointer-events-none" />

                    <svg viewBox="0 0 500 180" className="relative z-10 w-[260px] h-[93px] sm:w-[420px] sm:h-[150px]" fill="none" style={{ overflow: "visible" }}>
                        <defs>
                            <radialGradient id="mglow" cx="50%" cy="90%" r="55%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.22" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="peakGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
                                <stop offset="60%" stopColor="#93c5fd" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
                            </linearGradient>
                        </defs>
                        <ellipse cx="250" cy="162" rx="200" ry="28" fill="url(#mglow)" />
                        <path d="M0,162 L55,130 L90,140 L140,95 L175,110 L215,70 L255,85 L285,55 L320,75 L365,115 L410,98 L460,130 L500,162"
                            stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
                        <path className="pre-mountain"
                            d="M8,162 L45,138 L68,145 L105,112 L122,120 L155,82 L172,92 L195,58 L208,68 L222,48 L228,42 L250,8 L272,42 L278,48 L292,68 L305,58 L328,92 L345,82 L378,120 L395,112 L432,145 L455,138 L492,162"
                            stroke="url(#peakGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="250" cy="8" r="2.5" fill="#e0f2fe" opacity="0" style={{ animation: "preTagIn 0.4s ease-out 2.0s both" }} />
                        <text x="268" y="4" fill="#93c5fd" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="0.05em" opacity="0"
                            style={{ animation: "preTagIn 0.5s ease-out 2.3s both" }}>7 010 m</text>
                    </svg>

                    <p className="pre-logo relative z-10 mt-8 text-white select-none" style={{ fontSize: "clamp(1.4rem,4vw,2.2rem)", fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 800, letterSpacing: "-0.02em", textTransform: "lowercase" }}>ALASU</p>
                    <p className="pre-tag relative z-10 mt-3 text-[10px] text-blue-300/50 tracking-[0.5em] uppercase font-light select-none">Khan Tengri · 7010m · Natural · Water</p>

                    {/* loading bar */}
                    <div className="pre-bar relative z-10 mt-10 w-32 h-px bg-white/8 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ animation: "barGrow 2.4s cubic-bezier(0.4,0,0.2,1) forwards" }} />
                    </div>
                </div>
            )}

            <style>{`
                /* Preloader */
                @keyframes drawMountainPre { from{stroke-dashoffset:900} to{stroke-dashoffset:0} }
                .pre-mountain { stroke-dasharray:900; stroke-dashoffset:900; animation:drawMountainPre 2s cubic-bezier(0.4,0,0.2,1) 0.3s forwards; }
                @keyframes preLogoIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
                .pre-logo { animation:preLogoIn 0.8s ease-out 1.8s both; }
                @keyframes preTagIn { from{opacity:0} to{opacity:1} }
                .pre-tag  { animation:preTagIn 0.6s ease-out 2.2s both; }
                @keyframes preFadeOut { from{opacity:1} to{opacity:0;pointer-events:none} }
                .pre-out  { animation:preFadeOut 0.6s ease-out forwards; }
                @keyframes barGrow { from{width:0} to{width:100%} }

                /* Slide text */
                @keyframes slideIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
                .slide-text { animation:slideIn 0.55s cubic-bezier(0.22,1,0.36,1) both; }

                /* Scroll hint */
                @keyframes scrollBounce { 0%,100%{transform:translateY(0);opacity:0.3} 50%{transform:translateY(7px);opacity:1} }
                .smooth-arrow { animation:scrollBounce 1.6s ease-in-out infinite; display:block; }

                /* Sweep button */
                .sweep-btn::after {
                    content:''; position:absolute; top:0; left:-80%;
                    width:60%; height:100%;
                    background:linear-gradient(120deg,transparent 0%,rgba(255,255,255,0.18) 50%,transparent 100%);
                    transition:left 0.5s ease;
                }
                .sweep-btn:hover::after { left:130%; }

                /* Mountain draw in form */
                @keyframes drawElegantMountain { from{stroke-dashoffset:1200} to{stroke-dashoffset:0} }
                .mountain-line-animated { stroke-dasharray:1200; stroke-dashoffset:0; animation:drawElegantMountain 2.5s cubic-bezier(0.4,0,0.2,1) forwards; }
                .mountain-line-reset    { stroke-dasharray:1200; stroke-dashoffset:1200; }

                /* Floating particles */
                @keyframes floatUp { 0%{transform:translateY(0) scale(1);opacity:0.7} 60%{transform:translateY(-60px) scale(0.7);opacity:0.3} 100%{transform:translateY(-120px) scale(0.4);opacity:0} }

                /* Orbit rings */
                @keyframes orbitSlow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                @keyframes glowBreath { 0%,100%{opacity:0.5} 50%{opacity:1} }

                /* HUD blink */
                @keyframes hudBlink { 0%,100%{opacity:1} 50%{opacity:0.4} }
                .hud-dot { animation:hudBlink 2s ease-in-out infinite; }

                /* Scanline overlay */
                @keyframes scanMove { from{transform:translateY(-100%)} to{transform:translateY(100vh)} }
            `}</style>

            {/* ── Scroll spacer ── */}
            <div style={{ height: `${slides.length * 100}vh` }} aria-hidden="true" />

            {/* ── Below-hero content ── */}
            <div className="relative z-30">
                <ProductsSection lang={lang} />
                <BrandTeaser lang={lang} />
                <StatsSection lang={lang} />
                <ContactSection lang={lang} />
                <Footer lang={lang} />
            </div>

            {/* ── Header ── */}
            <header className="fixed top-0 left-0 right-0 z-[200] border-b border-white/[0.07] backdrop-blur-xl bg-[#061842]/70">
                <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5">
                    <Link href="/" className="no-underline group">
                        <span className="alasu-logo text-lg sm:text-xl text-white select-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-400">
                            ALASU
                        </span>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-6">
                        <LanguageSelector lang={lang} setLang={setLang} position="bottom" />
                        <button onClick={() => setMenu(true)} aria-label="Open menu"
                            className="group relative flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/35 backdrop-blur-sm transition-all duration-300 cursor-pointer">
                            <span className="block w-[18px] h-[1.5px] bg-white/80 rounded-full group-hover:w-[22px] group-hover:bg-white transition-all duration-300" />
                            <span className="block w-[14px] h-[1.5px] bg-white/50 rounded-full group-hover:w-[22px] group-hover:bg-white/80 transition-all duration-300" />
                            <span className="block w-[10px] h-[1.5px] bg-white/30 rounded-full group-hover:w-[22px] group-hover:bg-white/60 transition-all duration-300" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Fixed Hero ── */}
            <div style={{
                position: "fixed", inset: 0, zIndex: 20,
                opacity: heroVisible ? 1 : 0,
                pointerEvents: heroVisible ? "auto" : "none",
                transition: "opacity 0.6s ease",
            }}>
                {/* Background photo */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/altai-1.jpg)" }} />

                {/* Darkening gradient */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom,rgba(0,0,0,0.05) 0%,rgba(0,0,0,0.2) 40%,rgba(0,0,0,0.65) 100%)" }} />

                {/* Subtle vignette sides */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 120% 100% at 50% 50%,transparent 40%,rgba(0,0,0,0.5) 100%)" }} />

                {/* Floating particles */}
                {PARTICLES.map((p, i) => (
                    <div key={i} style={{
                        position: "absolute", left: p.x, top: p.y,
                        width: p.s, height: p.s, borderRadius: "50%",
                        background: "rgba(200,230,255,0.9)",
                        boxShadow: `0 0 ${p.s * 4}px rgba(147,210,255,0.6)`,
                        animation: `floatUp ${p.dur} ease-in-out infinite ${p.delay}`,
                        pointerEvents: "none",
                    }} />
                ))}

                {/* ── HUD top-left — altitude ── */}
                <div className="absolute top-20 left-5 sm:left-8 md:left-12 pointer-events-none select-none"
                    style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.6s ease" }}>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="hud-dot w-1.5 h-1.5 rounded-full bg-blue-400" style={{ boxShadow: "0 0 8px rgba(96,165,250,0.9)" }} />
                        <span className="text-[9px] tracking-[0.3em] uppercase text-blue-400/60 font-bold">ALT</span>
                    </div>
                    <div className="text-white/70 font-black tabular-nums leading-none" style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", letterSpacing: "0.05em" }}>
                        7<span className="text-blue-400/80">,</span>010<span className="text-blue-400/60 text-[0.55em] ml-1 font-bold tracking-widest">M</span>
                    </div>
                    <div className="mt-1 text-[8px] tracking-[0.25em] uppercase text-white/20 font-light">Khan Tengri</div>
                </div>


                {/* ── Slide progress bar ── */}
                <div className="absolute left-5 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none select-none">
                    {slides.map((_, i) => (
                        <div key={i} className="relative w-0.5 rounded-full overflow-hidden transition-all duration-500"
                            style={{ height: i === slideIdx ? 40 : 16, background: "rgba(255,255,255,0.12)" }}>
                            <div className="absolute top-0 left-0 w-full rounded-full transition-all duration-500"
                                style={{
                                    height: i < slideIdx ? "100%" : i === slideIdx ? `${slideProgress * 100}%` : "0%",
                                    background: "linear-gradient(to bottom,rgba(147,210,255,0.9),rgba(59,130,246,0.6))",
                                    boxShadow: i === slideIdx ? "0 0 8px rgba(147,210,255,0.6)" : "none",
                                }} />
                        </div>
                    ))}
                </div>

                {/* ── Main slide text ── */}
                <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6 pb-28">
                    <div key={slideIdx} className="slide-text flex flex-col items-center">
                        {/* tag */}
                        <p className="mb-5 sm:mb-7 inline-flex items-center gap-3 text-[9px] sm:text-[11px] tracking-[0.4em] uppercase text-white/50 font-bold">
                            <span className="w-6 sm:w-10 h-px bg-white/25" />
                            {slide.tag[L]}
                            <span className="w-6 sm:w-10 h-px bg-white/25" />
                        </p>

                        {/* title */}
                        <h1 className="leading-none drop-shadow-2xl"
                            style={{
                                fontSize: "clamp(4rem,14vw,9rem)",
                                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                textTransform: "lowercase",
                                background: slideIdx === 0
                                    ? "linear-gradient(135deg, #93c5fd 0%, #ffffff 45%, #67e8f9 100%)"
                                    : "linear-gradient(135deg, #ffffff 0%, #bfdbfe 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                filter: "drop-shadow(0 0 60px rgba(59,130,246,0.35))",
                            }}>
                            {slide.title[L]}
                        </h1>

                        {/* subtitle */}
                        <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-blue-400/50" />
                            <p className="text-[11px] sm:text-[13px] text-white/55 font-light tracking-[0.25em] uppercase">
                                {slide.sub[L]}
                            </p>
                            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-blue-400/50" />
                        </div>

                        {/* CTA buttons on first slide */}
                        {slideIdx === 0 && (
                            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 justify-center">
                                <Link href="/catalog"
                                    className="no-underline inline-flex items-center gap-2 px-6 py-3 bg-blue-600/90 hover:bg-blue-500 text-white font-black text-xs tracking-[0.18em] uppercase rounded-full transition-all duration-300 backdrop-blur-sm"
                                    style={{ boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}>
                                    {lang === "ru" ? "Каталог" : lang === "kz" ? "Каталог" : lang === "en" ? "Catalog" : "目录"}
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 6h10M6 1l5 5-5 5" />
                                    </svg>
                                </Link>
                                <a href="#partner"
                                    className="no-underline inline-flex items-center gap-2 px-6 py-3 border border-white/25 hover:border-white/50 bg-white/[0.06] hover:bg-white/[0.12] text-white font-black text-xs tracking-[0.18em] uppercase rounded-full transition-all duration-300 backdrop-blur-sm">
                                    {lang === "ru" ? "Стать партнёром" : lang === "kz" ? "Серіктес болу" : lang === "en" ? "Partner" : "合作伙伴"}
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Slide dots */}
                    <div className="absolute bottom-16 sm:bottom-18 left-1/2 -translate-x-1/2 flex gap-2.5">
                        {slides.map((_, i) => (
                            <span key={i} className={`block rounded-full transition-all duration-500 ${i === slideIdx ? "w-6 h-[3px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" : "w-2 h-[3px] bg-white/25"}`} />
                        ))}
                    </div>

                    {/* Scroll arrows */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none">
                        <span className="smooth-arrow text-[10px] text-white/50" style={{ animationDelay: "0s" }}>↓</span>
                        <span className="smooth-arrow text-[10px] text-white/50" style={{ animationDelay: "0.22s" }}>↓</span>
                        <span className="smooth-arrow text-[10px] text-white/50" style={{ animationDelay: "0.44s" }}>↓</span>
                    </div>
                </div>
            </div>

            <BurgerMenu open={menu} onClose={() => setMenu(false)} lang={lang} />

            {/* SEO text block */}
            <section className="relative z-30 bg-[#010b20] py-16 px-5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="max-w-3xl mx-auto text-white/25 text-sm leading-relaxed space-y-4">
                    <h2 className="text-white/40 font-bold text-base">Минеральная вода ALASU в Алматы</h2>
                    <p>ALASU — природная минеральная вода из источников Хан Тэнгри. Купить воду в Алматы с доставкой домой или в офис. Чистая питьевая вода, натуральный минеральный состав и высокое качество.</p>
                    <p>Мы предлагаем доставку воды по Алматы и всему Казахстану. ALASU — сочетание природной чистоты, минерального состава и премиального качества. Аласу су — таза табиғи су.</p>
                </div>
            </section>
        </>
    );
}
