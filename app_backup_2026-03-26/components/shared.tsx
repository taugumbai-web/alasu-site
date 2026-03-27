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
    { label: { ru: "Напиток Энергетик", kz: "Энергетикалық сусын", en: "Energy Drink", zh: "能量饮料" }, href: "/catalog/energy", dot: "#22c55e" },
];

export const navLinks = [
    { label: { ru: "Главная", kz: "Басты бет", en: "Home", zh: "主页" }, href: "/", hasSubs: false },
    { label: { ru: "Каталог", kz: "Каталог", en: "Catalog", zh: "目录" }, href: "/catalog", hasSubs: true },
    { label: { ru: "История бренда", kz: "Бренд тарихы", en: "Story", zh: "品牌故事" }, href: "/story", hasSubs: false },
    { label: { ru: "Миссия бренда", kz: "Бренд миссиясы", en: "Mission", zh: "品牌使命" }, href: "/mission", hasSubs: false },
    { label: { ru: "Стать партнёром", kz: "Серіктес болу", en: "Partners", zh: "成为合作伙伴" }, href: "/partners", hasSubs: false },
    { label: { ru: "Амбасадоры", kz: "Амбасадорлар", en: "Ambassadors", zh: "大使" }, href: "/ambassadors", hasSubs: false },
    { label: { ru: "Контакты", kz: "Байланыс", en: "Contact", zh: "联系人" }, href: "/contact", hasSubs: false },
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

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    useEffect(() => { if (!open) setCatalogOpen(false); }, [open]);

    const socials = [
        { href: INSTAGRAM, label: "Instagram", dot: "bg-gradient-to-r from-[#f09433] to-[#bc1888]", shadow: "rgba(188,24,136,0.5)" },
        { href: "https://t.me/ala_su_kz", label: "Telegram", dot: "bg-[#2AABEE]", shadow: "rgba(42,171,238,0.5)" },
        { href: "https://www.tiktok.com/@ala_su.kz", label: "TikTok", dot: "bg-gradient-to-r from-[#00f2fe] to-[#fe0979]", shadow: "rgba(254,9,121,0.5)" },
        { href: "https://wa.me/77008878887", label: "WhatsApp", dot: "bg-[#25D366]", shadow: "rgba(37,211,102,0.5)" },
    ];

    return (
        <>
            <div onClick={onClose}
                className={`fixed inset-0 z-[210] bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />

            <div className={`fixed top-0 right-0 bottom-0 z-[220] w-full max-w-[min(450px,100vw)] bg-[#020917]/90 backdrop-blur-3xl flex flex-col transition-transform duration-700 ease-[cubic-bezier(.22,.97,.36,1)] overflow-hidden border-l border-white/[0.05] ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-6 border-b border-white/[0.05]">
                    <Link href="/" onClick={onClose} className="group">
                        <span className="text-xl font-black tracking-[0.25em] text-white select-none group-hover:text-blue-400 transition-colors duration-300">ALASU</span>
                    </Link>
                    <button onClick={onClose} className="group w-12 h-12 flex items-center justify-center rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform duration-300 group-hover:rotate-90">
                            <line x1="2" y1="2" x2="16" y2="16" /><line x1="16" y1="2" x2="2" y2="16" />
                        </svg>
                    </button>
                </div>

                <nav className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 gap-1 overflow-y-auto py-4">
                    {navLinks.map((item, i) => (
                        <div key={i}>
                            {item.hasSubs ? (
                                <div>
                                    {/* Каталог — кнопка с дропдауном */}
                                    <button
                                        onClick={() => setCatalogOpen(v => !v)}
                                        className="group flex items-center gap-5 sm:gap-6 py-2 w-full text-left"
                                        style={{
                                            transform: open ? "translateX(0)" : "translateX(30px)",
                                            opacity: open ? 1 : 0,
                                            transitionProperty: "transform, opacity",
                                            transitionDuration: "0.8s",
                                            transitionTimingFunction: "cubic-bezier(.22,.97,.36,1)",
                                            transitionDelay: open ? `${i * 70}ms` : "0ms",
                                        }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                        <span className="relative text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white/30 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                                            {item.label[lang] ?? item.label.ru}
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                                style={{ transform: catalogOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.35s ease", marginTop: 4, opacity: 0.5 }}>
                                                <path d="M5 7l5 5 5-5" />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* Подпункты с анимацией */}
                                    <div style={{ maxHeight: catalogOpen ? "220px" : "0px", overflow: "hidden", transition: "max-height 0.45s cubic-bezier(.22,.97,.36,1)" }}>
                                        <div className="pl-7 sm:pl-9 pt-1 pb-3 flex flex-col gap-2">
                                            {catalogSubs.map((sub, si) => (
                                                <Link key={si} href={sub.href} onClick={onClose}
                                                    className="group flex items-center gap-3 py-1 transition-all duration-200"
                                                    style={{
                                                        opacity: catalogOpen ? 1 : 0,
                                                        transform: catalogOpen ? "translateX(0)" : "translateX(12px)",
                                                        transition: `opacity 0.35s ease ${si * 70}ms, transform 0.35s ease ${si * 70}ms`,
                                                    }}
                                                >
                                                    <span className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                                                        style={{ background: sub.dot, boxShadow: `0 0 10px ${sub.dot}90` }} />
                                                    <span className="text-lg sm:text-xl font-bold text-white/35 group-hover:text-white transition-colors duration-200 tracking-wide">
                                                        {sub.label[lang] ?? sub.label.ru}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link href={item.href} onClick={onClose}
                                    className="group flex items-center gap-5 sm:gap-6 py-2"
                                    style={{
                                        transform: open ? "translateX(0)" : "translateX(30px)",
                                        opacity: open ? 1 : 0,
                                        transitionProperty: "transform, opacity",
                                        transitionDuration: "0.8s",
                                        transitionTimingFunction: "cubic-bezier(.22,.97,.36,1)",
                                        transitionDelay: open ? `${i * 70}ms` : "0ms",
                                    }}
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                    <span className="relative text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white/30 group-hover:text-white transition-colors duration-300">
                                        {item.label[lang] ?? item.label.ru}
                                        <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-blue-500 group-hover:w-full transition-all duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                    </span>
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="mt-6 pt-6 border-t border-white/[0.05] grid gap-3">
                        {socials.map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noreferrer" onClick={onClose}
                                className="group flex items-center gap-5 text-lg sm:text-xl font-bold tracking-tight text-white/40 hover:text-white transition-colors duration-300"
                                style={{
                                    transform: open ? "translateX(0)" : "translateX(20px)",
                                    opacity: open ? 1 : 0,
                                    transitionProperty: "transform, opacity",
                                    transitionDuration: "0.8s",
                                    transitionTimingFunction: "cubic-bezier(.22,.97,.36,1)",
                                    transitionDelay: open ? `${(navLinks.length + i) * 70}ms` : "0ms",
                                }}
                            >
                                <span className={`w-1.5 h-1.5 rounded-full ${s.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    style={{ boxShadow: `0 0 10px ${s.shadow}` }} />
                                {s.label}
                            </a>
                        ))}
                    </div>
                </nav>

                <div className="relative z-10 px-6 sm:px-10 py-7">
                    <p className="text-[10px] text-white/20 tracking-widest uppercase">© 2026 ALASU</p>
                </div>
            </div>
        </>
    );
}
