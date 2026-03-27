"use client";

import { useState, useRef, useEffect } from "react";

export type Lang = "ru" | "kz" | "en" | "zh";

export const LOCALES: Record<Lang, string> = {
    ru: "RU",
    kz: "KZ",
    en: "EN",
    zh: "中文"
};

export default function LanguageSelector({ 
    lang, 
    setLang,
    position = "bottom"
}: { 
    lang: Lang; 
    setLang: (lang: Lang) => void;
    position?: "top" | "bottom";
}) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Закрывать при клике вне
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative inline-block z-[150]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-1 border border-white/20 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-white/60 hover:text-white hover:border-white/50 transition-colors duration-300"
            >
                {LOCALES[lang]}
            </button>
            
            <div 
                className={`absolute ${position === "bottom" ? "top-[calc(100%+8px)]" : "bottom-[calc(100%+8px)]"} left-1/2 -translate-x-1/2 flex flex-col items-center bg-[#010c1f]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "opacity-100 scale-100 pointer-events-auto shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "opacity-0 scale-95 pointer-events-none"}`}
            >
                {(Object.keys(LOCALES) as Lang[]).map((l) => (
                    <button
                        key={l}
                        onClick={() => {
                            setLang(l);
                            setIsOpen(false);
                        }}
                        className={`w-full text-center px-4 py-2.5 rounded-[10px] text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-200 ${
                            lang === l 
                                ? "bg-blue-500/20 text-blue-400" 
                                : "text-white/50 hover:text-white hover:bg-white/10"
                        }`}
                    >
                        {LOCALES[l]}
                    </button>
                ))}
            </div>
        </div>
    );
}

