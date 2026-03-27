"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

export type Lang = "ru" | "kz" | "en" | "zh";
export const INSTAGRAM = "https://www.instagram.com/ala_su.kz?igsh=em9nOTVtYXA0Z3Nv";

const VALID_LANGS: Lang[] = ["ru", "kz", "en", "zh"];
const LANG_KEY = "alasu_lang";

/** Язык хранится в localStorage — читается синхронно на клиенте, нет flash */
export function useLang(): [Lang, (l: Lang) => void] {
    const [lang, setLangState] = useState<Lang>(() => {
        if (typeof window === "undefined") return "ru";
        const stored = localStorage.getItem(LANG_KEY) as Lang | null;
        return stored && VALID_LANGS.includes(stored) ? stored : "ru";
    });

    const setLang = useCallback((l: Lang) => {
        setLangState(l);
        if (typeof window !== "undefined") localStorage.setItem(LANG_KEY, l);
    }, []);

    return [lang, setLang];
}

export const catalogSubs = [
    { label: { ru: "Вода", kz: "Су", en: "Water", zh: "水" }, href: "/catalog/water", dot: "#2563eb" },
    { label: { ru: "Ала Лимонати", kz: "Ала Лимонати", en: "Ala Lemonati", zh: "柠檬水" }, href: "/catalog/lemonade", dot: "#f59e0b" },
    { label: { ru: "Напиток со вкусом энергетика", kz: "Энергетик дәміндегі сусын", en: "Energy-Flavored Drink", zh: "能量口味饮料" }, href: "/catalog/energy", dot: "#22c55e" },
];

export const gameSubs = [
    { label: { ru: "💧 Поймай каплю", kz: "💧 Тамшыны ұстай тұр", en: "💧 Drop Challenge", zh: "💧 水滴挑战" }, href: "/play",   dot: "#60a5fa" },
    { label: { ru: "🍋 Нарежь фрукты", kz: "🍋 Жемістерді кес",    en: "🍋 Fruit Slice",   zh: "🍋 切水果"  }, href: "/fruits", dot: "#fbbf24" },
];

export const navLinks = [
    { label: { ru: "Главная",          kz: "Басты бет",         en: "Home",        zh: "主页"       }, href: "/",        hasSubs: false, isGames: false },
    { label: { ru: "Каталог",          kz: "Каталог",           en: "Catalog",     zh: "目录"       }, href: "/catalog", hasSubs: true,  isGames: false },
    { label: { ru: "История бренда",   kz: "Бренд тарихы",      en: "Story",       zh: "品牌故事"    }, href: "/story",   hasSubs: false, isGames: false },
    { label: { ru: "Миссия бренда",    kz: "Бренд миссиясы",    en: "Mission",     zh: "品牌使命"    }, href: "/mission", hasSubs: false, isGames: false },
    { label: { ru: "Стать партнёром",  kz: "Серіктес болу",     en: "Partners",    zh: "成为合作伙伴" }, href: "/partners",hasSubs: false, isGames: false },
    { label: { ru: "Амбасадоры",       kz: "Амбасадорлар",      en: "Ambassadors", zh: "大使"       }, href: "/ambassadors", hasSubs: false, isGames: false },
    { label: { ru: "Контакты",         kz: "Байланыс",          en: "Contact",     zh: "联系人"      }, href: "/contact", hasSubs: false, isGames: false },
    { label: { ru: "🎮 Игры",          kz: "🎮 Ойындар",        en: "🎮 Games",    zh: "🎮 游戏"     }, href: "/play",    hasSubs: false, isGames: true  },
];

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
    const ref = useRef<T>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, visible };
}

export function IgIcon({ size = 18 }: { size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}
export function TelegramIcon({ size = 18 }: { size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
        </svg>
    );
}
export function TikTokIcon({ size = 18 }: { size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
    );
}
export function WhatsAppIcon({ size = 18 }: { size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    );
}

export function BurgerMenu({ open, onClose, lang }: { open: boolean; onClose: () => void; lang: Lang }) {
    const [catalogOpen, setCatalogOpen] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    useEffect(() => { if (!open) { setCatalogOpen(false); setHovered(null); } }, [open]);

    const socials = [
        { href: INSTAGRAM,                            label: "Instagram" },
        { href: "https://t.me/ala_su_kz",            label: "Telegram"  },
        { href: "https://www.tiktok.com/@ala_su.kz", label: "TikTok"   },
        { href: "https://wa.me/77008878887",          label: "WhatsApp" },
    ];

    const delay = (i: number) => open ? `${80 + i * 65}ms` : "0ms";

    return (
        <div
            className="fixed inset-0 z-[300] pointer-events-none"
            aria-hidden={!open}
        >
            {/* ── Fullscreen backdrop ── */}
            <div
                onClick={onClose}
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                    background: "radial-gradient(ellipse 120% 100% at 70% 50%, #020c22 0%, #010814 100%)",
                }}
            />

            {/* ── Decorative glows ── */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-700"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)", opacity: open ? 1 : 0 }} />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-700"
                style={{ background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)", opacity: open ? 1 : 0 }} />

            {/* ── Giant watermark ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="font-black text-white transition-all duration-700"
                    style={{
                        fontSize: "clamp(8rem, 22vw, 22rem)",
                        letterSpacing: "-0.04em",
                        opacity: open ? 0.025 : 0,
                        transform: open ? "translateY(0)" : "translateY(40px)",
                    }}>
                    ALASU
                </span>
            </div>

            {/* ── Mountain SVG decoration ── */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden transition-opacity duration-700"
                style={{ opacity: open ? 0.06 : 0 }}>
                <svg viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none" fill="none">
                    <path d="M0,200 L120,140 L240,165 L400,90 L520,125 L660,55 L780,95 L900,30 L1020,75 L1160,120 L1280,85 L1440,110 L1440,200 Z"
                        fill="rgba(96,165,250,1)" />
                </svg>
            </div>

            {/* ── Panel ── */}
            <div
                className="absolute inset-0 flex flex-col overflow-hidden transition-opacity duration-500"
                style={{ pointerEvents: open ? "auto" : "none", opacity: open ? 1 : 0 }}
            >
                {/* Top bar */}
                <div className="relative z-10 flex items-center justify-between px-6 sm:px-12 md:px-16 pt-6 sm:pt-8 pb-6">
                    <Link href="/" onClick={onClose}
                        className="no-underline transition-all duration-500"
                        style={{ opacity: open ? 1 : 0, transform: open ? "none" : "translateY(-10px)", transitionDelay: open ? "60ms" : "0ms" }}>
                        <span className="alasu-logo text-xl sm:text-2xl text-white hover:text-blue-300 transition-colors duration-300 select-none">
                            ALASU
                        </span>
                    </Link>

                    <button
                        onClick={onClose}
                        className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-500"
                        style={{ opacity: open ? 1 : 0, transform: open ? "none" : "translateY(-10px)", transitionDelay: open ? "60ms" : "0ms" }}
                    >
                        <span className="absolute inset-0 rounded-full border border-white/15 group-hover:border-white/40 group-hover:scale-110 transition-all duration-300" />
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                            className="text-white/50 group-hover:text-white transition-all duration-300 group-hover:rotate-90">
                            <line x1="2" y1="2" x2="16" y2="16" /><line x1="16" y1="2" x2="2" y2="16" />
                        </svg>
                    </button>
                </div>

                {/* Content: left info + right nav */}
                <div className="flex-1 flex flex-col md:flex-row overflow-hidden px-6 sm:px-12 md:px-16 pb-6">

                    {/* ── Left: brand info ── */}
                    <div className="hidden md:flex flex-col justify-between w-[260px] lg:w-[300px] flex-shrink-0 pr-10 border-r border-white/[0.05]">
                        <div className="flex flex-col gap-8 pt-4">
                            <div
                                className="transition-all duration-700"
                                style={{ opacity: open ? 1 : 0, transform: open ? "none" : "translateY(20px)", transitionDelay: open ? "150ms" : "0ms" }}
                            >
                                <p className="text-[9px] tracking-[0.38em] uppercase text-blue-400/50 font-bold mb-2">Khan Tengri</p>
                                <p className="text-white/20 text-xs font-light leading-relaxed">
                                    {lang === "ru" ? "Чистая горная вода\nВысота 7010м" : lang === "kz" ? "Таза тау суы\n7010м биіктік" : lang === "en" ? "Pure mountain water\nAltitude 7010m" : "纯净山泉水\n海拔7010米"}
                                </p>
                            </div>

                            <div
                                className="transition-all duration-700"
                                style={{ opacity: open ? 1 : 0, transform: open ? "none" : "translateY(20px)", transitionDelay: open ? "220ms" : "0ms" }}
                            >
                                <p className="text-[9px] tracking-[0.38em] uppercase text-white/20 font-bold mb-3">
                                    {lang === "ru" ? "Контакты" : lang === "kz" ? "Байланыс" : lang === "en" ? "Contact" : "联系"}
                                </p>
                                <a href="tel:+77008878887" className="block text-sm font-bold text-white/35 hover:text-white transition-colors duration-300 no-underline tracking-wider">
                                    +7 700 887 88 87
                                </a>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="pb-4 flex flex-col gap-3">
                            {socials.map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noreferrer" onClick={onClose}
                                    className="text-[11px] font-black tracking-[0.2em] uppercase text-white/20 hover:text-white transition-all duration-300 no-underline group flex items-center gap-2"
                                    style={{ opacity: open ? 1 : 0, transform: open ? "none" : "translateX(-12px)", transition: `opacity 0.6s ease ${200 + i * 60}ms, transform 0.6s ease ${200 + i * 60}ms, color 0.3s` }}>
                                    <span className="w-3 h-px bg-white/15 group-hover:w-6 group-hover:bg-blue-400 transition-all duration-300" />
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: nav links ── */}
                    <nav className="flex-1 flex flex-col justify-center md:pl-12 lg:pl-16 gap-0 overflow-y-auto">
                        {navLinks.map((item, i) => (
                            <div key={i} className="border-b border-white/[0.04] last:border-0">
                                {item.isGames ? (
                                    /* ── Games group ── */
                                    <div className="py-3 sm:py-4 transition-all duration-700"
                                        style={{ opacity: open ? 1 : 0, transform: open ? "none" : "translateY(30px)", transitionDelay: delay(i) }}>
                                        <p className="text-[9px] font-black tracking-[0.38em] uppercase text-blue-400/40 mb-3 flex items-center gap-2">
                                            <span className="w-4 h-px bg-blue-400/30" />
                                            {lang === "ru" ? "Игры" : lang === "kz" ? "Ойындар" : lang === "en" ? "Games" : "游戏"}
                                        </p>
                                        <div className="flex flex-col gap-0.5">
                                            {gameSubs.map((g, gi) => (
                                                <Link key={gi} href={g.href} onClick={onClose}
                                                    onMouseEnter={() => setHovered(100 + gi)}
                                                    onMouseLeave={() => setHovered(null)}
                                                    className="group flex items-center gap-4 sm:gap-5 py-1.5 no-underline">
                                                    <span className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
                                                        style={{ background: g.dot, opacity: hovered === 100 + gi ? 1 : 0.35 }} />
                                                    <span className="font-black uppercase tracking-tight transition-all duration-300"
                                                        style={{
                                                            fontSize: "clamp(1.1rem, 2.8vw, 2.2rem)",
                                                            color: hovered === 100 + gi ? "#fff" : hovered !== null ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.45)",
                                                        }}>
                                                        {g.label[lang] ?? g.label.ru}
                                                    </span>
                                                    <span className="ml-auto mr-2 w-0 h-px group-hover:w-8 transition-all duration-500"
                                                        style={{ background: g.dot }} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : item.hasSubs ? (
                                    <>
                                        <button
                                            onClick={() => setCatalogOpen(v => !v)}
                                            onMouseEnter={() => setHovered(i)}
                                            onMouseLeave={() => setHovered(null)}
                                            className="group w-full flex items-center justify-between py-3 sm:py-4 text-left transition-all duration-700"
                                            style={{
                                                opacity: open ? 1 : 0,
                                                transform: open ? "none" : "translateY(30px)",
                                                transitionDelay: delay(i),
                                            }}
                                        >
                                            <div className="flex items-baseline gap-4 sm:gap-6">
                                                <span className="text-[10px] font-black text-blue-400/30 tracking-widest tabular-nums transition-colors duration-300 group-hover:text-blue-400/70">
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                <span className="font-black uppercase tracking-tight leading-none transition-all duration-300"
                                                    style={{
                                                        fontSize: "clamp(1.5rem, 4vw, 3.2rem)",
                                                        color: hovered === i ? "#fff" : hovered !== null ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)",
                                                    }}>
                                                    {item.label[lang] ?? item.label.ru}
                                                </span>
                                            </div>
                                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                className="text-white/20 group-hover:text-white/60 transition-all duration-300 flex-shrink-0 mr-2"
                                                style={{ transform: catalogOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                                                <path d="M10 4v12M4 10h12" />
                                            </svg>
                                        </button>

                                        <div style={{ maxHeight: catalogOpen ? "200px" : "0px", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(.22,.97,.36,1)" }}>
                                            <div className="pl-10 sm:pl-14 pb-3 flex flex-col gap-1">
                                                {catalogSubs.map((sub, si) => (
                                                    <Link key={si} href={sub.href} onClick={onClose}
                                                        className="group flex items-center gap-3 py-1.5 no-underline transition-all duration-300"
                                                        style={{
                                                            opacity: catalogOpen ? 1 : 0,
                                                            transform: catalogOpen ? "none" : "translateX(10px)",
                                                            transition: `opacity 0.35s ease ${si * 60}ms, transform 0.35s ease ${si * 60}ms`,
                                                        }}>
                                                        <span className="w-4 h-px rounded-full transition-all duration-300 group-hover:w-8"
                                                            style={{ background: sub.dot }} />
                                                        <span className="text-base sm:text-lg font-bold text-white/30 group-hover:text-white transition-colors duration-300 tracking-wide">
                                                            {sub.label[lang] ?? sub.label.ru}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link href={item.href} onClick={onClose}
                                        onMouseEnter={() => setHovered(i)}
                                        onMouseLeave={() => setHovered(null)}
                                        className="group flex items-center gap-4 sm:gap-6 py-3 sm:py-4 no-underline transition-all duration-700"
                                        style={{
                                            opacity: open ? 1 : 0,
                                            transform: open ? "none" : "translateY(30px)",
                                            transitionDelay: delay(i),
                                        }}>
                                        <span className="text-[10px] font-black text-blue-400/30 tracking-widest tabular-nums transition-colors duration-300 group-hover:text-blue-400/70">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="font-black uppercase tracking-tight leading-none transition-all duration-300"
                                            style={{
                                                fontSize: "clamp(1.5rem, 4vw, 3.2rem)",
                                                color: hovered === i ? "#fff" : hovered !== null ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)",
                                            }}>
                                            {item.label[lang] ?? item.label.ru}
                                        </span>
                                        <span className="ml-auto mr-2 w-0 h-px bg-blue-400 group-hover:w-10 transition-all duration-500 ease-out" />
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile socials */}
                        <div className="flex md:hidden flex-wrap gap-4 pt-6 mt-2 border-t border-white/[0.05]">
                            {socials.map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noreferrer" onClick={onClose}
                                    className="text-[10px] font-black tracking-[0.2em] uppercase text-white/25 hover:text-white transition-colors duration-300 no-underline"
                                    style={{ opacity: open ? 1 : 0, transition: `opacity 0.6s ease ${300 + i * 60}ms` }}>
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="relative z-10 flex items-center justify-between px-6 sm:px-12 md:px-16 pb-6 sm:pb-8 pt-4 border-t border-white/[0.04]"
                    style={{ opacity: open ? 1 : 0, transition: "opacity 0.6s ease 400ms" }}>
                    <p className="text-[9px] text-white/15 tracking-[0.3em] uppercase">© 2026 ALASU · Kazakhstan</p>
                    <p className="text-[9px] text-white/10 tracking-[0.25em] uppercase">Khan Tengri · 7010m</p>
                </div>
            </div>
        </div>
    );
}
