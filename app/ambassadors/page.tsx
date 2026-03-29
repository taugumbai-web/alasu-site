"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { BurgerMenu, useReveal, useLang, Lang } from "../components/shared";
import LanguageSelector from "../components/LanguageSelector";

// ─── ДАННЫЕ ──────────────────────────────────────────────────────────────────
// photo: путь к файлу в /public/ambassadors/ (например "/ambassadors/nurlan.jpg")
// instagram: хэндл без @
const people = [
    {
        name: "Нурлан Коянбаев",
        role: { ru: "Амбасадор", kz: "Амбасадор" },
        instagram: "koyanbayevnurlan",
        photo: "/ambassadors/Нурлан Коянбаев .jpeg",
        initials: "НК",
        accent: "#3b82f6",
        span: "row-span-2",
    },
    {
        name: "Nursultan Umirzakov",
        role: { ru: "Амбасадор", kz: "Амбасадор" },
        instagram: "nursultan_rysmaganbet",
        photo: "/ambassadors/Nursultan Umirzakov.jpeg",
        initials: "NU",
        accent: "#6366f1",
        span: "row-span-1",
    },
    {
        name: "Фади Аббасов",
        role: { ru: "Амбасадор", kz: "Амбасадор" },
        instagram: "fadivs",
        photo: "/ambassadors/Фади.jpeg",
        initials: "ФА",
        accent: "#06b6d4",
        span: "row-span-1",
    },
    {
        name: "Алпамыс",
        role: { ru: "Амбасадор", kz: "Амбасадор" },
        instagram: "alpamyspyn",
        photo: "/ambassadors/Алпамыс.jpeg",
        initials: "АЛ",
        accent: "#8b5cf6",
        span: "row-span-2",
    },
    {
        name: "Асу Аманбаев",
        role: { ru: "Амбасадор", kz: "Амбасадор" },
        instagram: "asu_zulfikar57",
        photo: "/ambassadors/Асу Аманбаев .jpeg",
        initials: "АА",
        accent: "#f59e0b",
        span: "row-span-1",
    },
    {
        name: "Анеля Кенжибекова",
        role: { ru: "Амбасадор", kz: "Амбасадор" },
        instagram: "kenjebekovaa",
        photo: "/ambassadors/Анеля Кенжебекова.jpeg",
        initials: "АК",
        accent: "#ec4899",
        span: "row-span-1",
    },
    {
        name: "Zhuma Podcast",
        role: { ru: "Медиапартнёр", kz: "Медиасеріктес" },
        instagram: "zhumapodcast",
        photo: "/ambassadors/Zhuma Podcast.jpeg",
        initials: "ZP",
        accent: "#0ea5e9",
        span: "row-span-2",
    },
    {
        name: "Zhumadilda Eldos",
        role: { ru: "Амбасадор", kz: "Амбасадор" },
        instagram: "zhumaeldos",
        photo: "/ambassadors/Eldos.jpeg",
        initials: "ZE",
        accent: "#14b8a6",
        span: "row-span-1",
    },
];

// ─── КАРТОЧКА ─────────────────────────────────────────────────────────────────
function PersonCard({
    person,
    lang,
    index,
}: {
    person: (typeof people)[0];
    lang: Lang;
    index: number;
}) {
    const rev = useReveal();
    const [imgError, setImgError] = useState(false);
    const isTall = person.span === "row-span-2";

    return (
        <div
            ref={rev.ref}
            className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer ${person.span}`}
            style={{
                opacity: rev.visible ? 1 : 0,
                transform: rev.visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.96)",
                transition: `opacity 0.65s cubic-bezier(.22,.97,.36,1) ${index * 0.07}s, transform 0.65s cubic-bezier(.22,.97,.36,1) ${index * 0.07}s`,
                minHeight: isTall ? 340 : 160,
            }}
        >
            {/* ── Фото / заглушка ── */}
            <div className="absolute inset-0">
                {person.photo && !imgError ? (
                    <Image
                        src={person.photo}
                        alt={person.name}
                        fill
                        sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                            background: `radial-gradient(circle at 35% 35%, ${person.accent}55 0%, #060d22 70%)`,
                        }}
                    >
                        <span
                            className="font-black select-none transition-all duration-500 group-hover:scale-110"
                            style={{
                                fontSize: isTall ? "clamp(3rem, 8vw, 6rem)" : "clamp(2rem, 5vw, 3.5rem)",
                                color: person.accent,
                                textShadow: `0 0 40px ${person.accent}88`,
                                letterSpacing: "0.05em",
                            }}
                        >
                            {person.initials}
                        </span>
                    </div>
                )}
            </div>

            {/* ── Постоянный градиент снизу ── */}
            <div
                className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to top, rgba(6,12,40,0.92) 0%, rgba(6,12,40,0.5) 50%, transparent 100%)",
                }}
            />

            {/* ── Overlay при наведении ── */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                    background: `linear-gradient(135deg, ${person.accent}20 0%, transparent 60%)`,
                    boxShadow: `inset 0 0 0 1.5px ${person.accent}55`,
                    borderRadius: "inherit",
                }}
            />

            {/* ── Контент ── */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                {/* Имя + роль */}
                <div
                    className="sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-400 ease-out"
                >
                    <p
                        className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase mb-1 sm:mb-1.5 opacity-70"
                        style={{ color: person.accent }}
                    >
                        {person.role[lang as "ru" | "kz"] ?? person.role.ru}
                    </p>
                    <h3 className="text-white font-black text-sm sm:text-base md:text-lg leading-tight">
                        {person.name}
                    </h3>
                </div>

                {/* Instagram кнопка — появляется при hover */}
                <a
                    href={`https://www.instagram.com/${person.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="mt-3 flex items-center gap-2 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-3 sm:group-hover:translate-y-0 transition-all duration-350 ease-out max-w-full overflow-hidden"
                    style={{ transitionDelay: "50ms" }}
                >
                    <span
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide max-w-full"
                        style={{
                            background: `linear-gradient(135deg, ${person.accent}30, ${person.accent}18)`,
                            border: `1px solid ${person.accent}55`,
                            color: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        {/* Instagram icon */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                        <span className="truncate">@{person.instagram}</span>
                    </span>
                </a>
            </div>

            {/* ── Угловой номер ── */}
            <div
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                    background: `${person.accent}30`,
                    border: `1px solid ${person.accent}55`,
                    backdropFilter: "blur(8px)",
                }}
            >
                <span className="text-[9px] sm:text-[10px] font-black text-white/70">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>
        </div>
    );
}

// ─── СТРАНИЦА ─────────────────────────────────────────────────────────────────
export default function AmbassadorsPage() {
    const [lang, setLang] = useLang();
    const [menuOpen, setMenuOpen] = useState(false);
    const revealHeader = useReveal();
    const revealCounter = useReveal();

    return (
        <div className="bg-[#060d22] min-h-screen text-white flex flex-col">
            <style>{`
                @keyframes floatOrb {
                    0%   { transform: translate(0,0) scale(1); }
                    33%  { transform: translate(40px,-60px) scale(1.1); }
                    66%  { transform: translate(-30px,30px) scale(0.92); }
                    100% { transform: translate(0,0) scale(1); }
                }
                .orb-1 { animation: floatOrb 18s ease-in-out infinite; }
                .orb-2 { animation: floatOrb 22s ease-in-out infinite reverse; }

                @keyframes ticker {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                .ticker-inner { animation: ticker 22s linear infinite; }
                .ticker-inner:hover { animation-play-state: paused; }

                @keyframes shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .shimmer-text {
                    background: linear-gradient(90deg,#93c5fd 0%,#ffffff 35%,#a5b4fc 55%,#93c5fd 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 5s linear infinite;
                }
            `}</style>

            <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />

            {/* ── Шапка ── */}
            <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.07] backdrop-blur-xl bg-[#060d22]/85">
                <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5">
                    <Link href="/" className="no-underline group">
                        <span className="alasu-logo text-lg sm:text-xl text-white select-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-400">
                            ALASU
                        </span>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-6">
                        <LanguageSelector lang={lang} setLang={setLang} />
                        <button
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                            className="group relative flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                        >
                            <span className="block w-[18px] h-[1.5px] bg-white/80 rounded-full group-hover:w-[22px] transition-all duration-300" />
                            <span className="block w-[14px] h-[1.5px] bg-white/50 rounded-full group-hover:w-[22px] transition-all duration-300" />
                            <span className="block w-[10px] h-[1.5px] bg-white/30 rounded-full group-hover:w-[22px] transition-all duration-300" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col pb-24 sm:pb-32 relative overflow-hidden">

                {/* Orbs */}
                <div className="fixed top-[15%] left-[5%] w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[130px] pointer-events-none orb-1" />
                <div className="fixed bottom-[10%] right-[5%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none orb-2" />

                {/* ── Hero ── */}
                <div
                    ref={revealHeader.ref}
                    className="relative pt-32 sm:pt-36 pb-10 sm:pb-14 px-4 text-center transition-all duration-[900ms] ease-out"
                    style={{ opacity: revealHeader.visible ? 1 : 0, transform: revealHeader.visible ? "translateY(0)" : "translateY(36px)" }}
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="inline-block w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-blue-500/70" />
                        <p className="text-[10px] sm:text-[12px] tracking-[0.38em] uppercase font-bold text-blue-400/80">
                            {lang === "ru" ? "Нас поддерживают" : lang === "kz" ? "Бізді қолдайды" : lang === "en" ? "They support us" : "他们支持我们"}
                        </p>
                        <span className="inline-block w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-blue-500/70" />
                    </div>

                    <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
                        <span className="shimmer-text">
                            {lang === "ru" ? "Амбасадоры" : lang === "kz" ? "Амбасадорлар" : lang === "en" ? "Ambassadors" : "大使"}
                        </span>
                    </h1>

                    <p className="text-white/45 text-base sm:text-lg max-w-lg mx-auto font-light leading-relaxed">
                        {lang === "ru"
                            ? "Лидеры мнений, медиаперсоны и духовные лидеры, которые доверяют ALASU."
                            : lang === "kz"
                            ? "ALASU-ға сенім артқан пікір көшбасшылары, медиатұлғалар және рухани жетекшілер."
                            : lang === "en"
                            ? "Opinion leaders, media personalities and spiritual leaders who trust ALASU."
                            : "信任ALASU的意见领袖、媒体人士和精神领袖。"}
                    </p>
                </div>

                {/* ── Бегущая строка ── */}
                <div className="overflow-hidden border-y border-white/[0.05] py-3 mb-10 sm:mb-14 bg-white/[0.02]">
                    <div className="ticker-inner flex gap-10 whitespace-nowrap select-none">
                        {[...people, ...people].map((p, i) => (
                            <span key={i} className="flex items-center gap-3 text-[11px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-white/25">
                                <span style={{ color: p.accent, opacity: 0.7 }}>✦</span>
                                {p.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ── Счётчик ── */}
                <div
                    ref={revealCounter.ref}
                    className="flex justify-center mb-10 sm:mb-14 transition-all duration-700 ease-out"
                    style={{ opacity: revealCounter.visible ? 1 : 0, transform: revealCounter.visible ? "translateY(0)" : "translateY(20px)" }}
                >
                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
                        <div className="flex -space-x-1.5">
                            {people.slice(0, 5).map((p, i) => (
                                <div
                                    key={i}
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-black border border-[#060d22]"
                                    style={{ background: `linear-gradient(135deg, ${p.accent}88, ${p.accent}44)`, zIndex: 5 - i }}
                                >
                                    {p.initials.slice(0, 1)}
                                </div>
                            ))}
                        </div>
                        <span className="text-white/50 text-[11px] font-bold tracking-[0.1em]">
                            {people.length}
                            {lang === "ru" ? " амбасадоров" : lang === "kz" ? " амбасадор" : lang === "en" ? " ambassadors" : " 位大使"}
                        </span>
                    </div>
                </div>

                {/* ── Bento Grid ── */}
                <div className="max-w-6xl mx-auto px-3 sm:px-5 md:px-8 w-full">
                    <div
                        className="grid gap-3 sm:gap-4"
                        style={{
                            gridTemplateColumns: "repeat(auto-fill, minmax(min(160px, 100%), 1fr))",
                            gridAutoRows: "clamp(180px, 25vw, 200px)",
                        }}
                    >
                        {people.map((person, i) => (
                            <PersonCard key={person.name} person={person} lang={lang} index={i} />
                        ))}
                    </div>
                </div>

                {/* ── Нижний CTA ── */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 w-full mt-16 sm:mt-20">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.07] p-8 sm:p-12 text-center"
                        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(6,13,34,0) 60%)" }}>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.12)_0%,transparent_65%)] pointer-events-none" />
                        <p className="relative text-[11px] sm:text-[12px] tracking-[0.3em] uppercase font-bold text-blue-400/70 mb-3">
                            {lang === "ru" ? "Хочешь быть с нами?" : lang === "kz" ? "Бізбен болғың келе ме?" : lang === "en" ? "Want to join us?" : "想加入我们吗？"}
                        </p>
                        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
                            {lang === "ru" ? "Стань амбасадором ALASU" : lang === "kz" ? "ALASU амбасадоры болыңыз" : lang === "en" ? "Become an ALASU Ambassador" : "成为ALASU大使"}
                        </h2>
                        <a
                            href={`https://wa.me/77008878887?text=${encodeURIComponent(lang === "ru" ? "Хочу стать амбасадором ALASU!" : lang === "kz" ? "ALASU амбасадоры болғым келеді!" : lang === "en" ? "I want to become an ALASU Ambassador!" : "我想成为ALASU大使！")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[12px] sm:text-[13px] font-bold tracking-[0.15em] uppercase hover:from-blue-500 hover:to-blue-400 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_-8px_rgba(37,99,235,0.6)] no-underline"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            {lang === "ru" ? "Написать нам" : lang === "kz" ? "Бізге жазу" : lang === "en" ? "Contact Us" : "联系我们"}
                        </a>
                    </div>
                </div>
            </main>

            <Footer lang={lang} />
        </div>
    );
}
