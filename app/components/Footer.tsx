"use client";

import Link from "next/link";
import { Lang, INSTAGRAM, navLinks, gameSubs, IgIcon, TelegramIcon, TikTokIcon, WhatsAppIcon } from "./shared";

export default function Footer({ lang }: { lang: Lang }) {
    const t = (ru: string, kz: string, en?: string, zh?: string) => {
        if (lang === "kz") return kz;
        if (lang === "en") return en ?? ru;
        if (lang === "zh") return zh ?? ru;
        return ru;
    };

    // Все ссылки кроме «Главная» и блока «Игры» (игры выводятся отдельно через gameSubs)
    const footerLinks = navLinks.filter(l => l.href !== "/" && !l.isGames);

    return (
        <footer className="relative bg-[#010611] border-t border-white/[0.03] pt-20 pb-12 z-40 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10 items-start mb-16">

                    {/* Brand */}
                    <div className="md:col-span-4 flex flex-col items-start">
                        <Link href="/" className="inline-block no-underline group mb-3">
                            <div className="alasu-logo text-4xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-500">
                                ALASU
                            </div>
                        </Link>
                        <p className="text-[11px] text-white/35 tracking-[0.25em] uppercase font-light mb-6">
                            Khan Tengri · 7010m · Natural Mineral Water
                        </p>
                        {/* Соцсети */}
                        <div className="flex gap-3">
                            {[
                                { href: INSTAGRAM, icon: <IgIcon size={17} />, hover: "bg-gradient-to-tr from-[#f09433] to-[#bc1888]", label: "Instagram" },
                                { href: "https://t.me/ala_su_kz", icon: <TelegramIcon size={17} />, hover: "bg-[#2AABEE]", label: "Telegram" },
                                { href: "https://www.tiktok.com/@ala_su.kz", icon: <TikTokIcon size={17} />, hover: "bg-gradient-to-tr from-[#00f2fe] to-[#fe0979]", label: "TikTok" },
                                { href: "https://wa.me/77008878887", icon: <WhatsAppIcon size={17} />, hover: "bg-[#25D366]", label: "WhatsApp" },
                            ].map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                                    className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/35 bg-white/[0.04] transition-all duration-300 hover:scale-110 text-white/45 hover:text-white">
                                    {s.icon}
                                    <span className={`absolute inset-0 ${s.hover} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav col 1 — первая половина ссылок */}
                    <div className="md:col-span-4 flex flex-col gap-4 text-[12px] tracking-[0.12em] uppercase font-bold">
                        {footerLinks.slice(0, Math.ceil(footerLinks.length / 2)).map((item, i) => (
                            <Link key={i} href={item.href} className="group flex items-center gap-3 w-fit no-underline">
                                <span className="w-1 h-1 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300 flex-shrink-0" />
                                <span className="text-white/35 group-hover:text-white transition-colors duration-300">
                                    {item.label[lang] ?? item.label.ru}
                                </span>
                                <span className="block w-0 h-[1.5px] bg-blue-500 group-hover:w-6 transition-all duration-500 ease-out" />
                            </Link>
                        ))}
                    </div>

                    {/* Nav col 2 — вторая половина ссылок + телефон */}
                    <div className="md:col-span-4 flex flex-col gap-4 text-[12px] tracking-[0.12em] uppercase font-bold">
                        {footerLinks.slice(Math.ceil(footerLinks.length / 2)).map((item, i) => (
                            <Link key={i} href={item.href} className="group flex items-center gap-3 w-fit no-underline">
                                <span className="w-1 h-1 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300 flex-shrink-0" />
                                <span className="text-white/35 group-hover:text-white transition-colors duration-300">
                                    {item.label[lang] ?? item.label.ru}
                                </span>
                                <span className="block w-0 h-[1.5px] bg-blue-500 group-hover:w-6 transition-all duration-500 ease-out" />
                            </Link>
                        ))}

                        <div className="mt-4 pt-4 border-t border-white/[0.05]">
                            <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase mb-2">
                                {t("Телефон", "Телефон", "Phone", "电话")}
                            </p>
                            <a href="tel:+77008878887" className="text-base font-black tracking-widest text-white/50 hover:text-white transition-colors duration-300 no-underline">
                                +7 700 887 88 87
                            </a>
                            <div className="mt-4">
                                <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase mb-2">
                                    {t("Адрес", "Мекенжай", "Address", "地址")}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold text-white/45 tracking-wide">
                                        {t("ул. Тобаякова 52", "Тобаяков к. 52", "Tobayakova 52", "托巴亚科瓦52")}
                                    </span>
                                    <a
                                        href="https://2gis.kz/search/Тобаякова%2052"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[9px] font-black tracking-widest uppercase text-blue-400/60 hover:text-blue-300 transition-colors duration-300 no-underline border border-blue-400/20 hover:border-blue-400/50 px-2 py-0.5 rounded-full"
                                    >
                                        2ГИС
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Games */}
                        <div className="mt-4 pt-4 border-t border-white/[0.05]">
                            <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase mb-2">
                                {t("Игры", "Ойындар", "Games", "游戏")}
                            </p>
                            <div className="flex flex-col gap-1.5">
                                {gameSubs.map((g, i) => (
                                    <Link key={i} href={g.href} className="text-[11px] font-bold text-white/40 hover:text-white transition-colors duration-300 no-underline tracking-wide">
                                        {g.label[lang] ?? g.label.ru}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/[0.05] gap-3">
                    <p className="text-[10px] text-white/20 tracking-[0.25em] font-medium uppercase">
                        © 2026 ALASU. {t("Все права защищены.", "Барлық құқықтар қорғалған.", "All rights reserved.", "版权所有。")}
                    </p>
                    <p className="text-[10px] text-white/15 tracking-[0.2em] uppercase">
                        Khan Tengri · Kazakhstan
                    </p>
                </div>
            </div>

            {/* Huge background text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10">
                <span className="text-[25vw] text-white/[0.013] whitespace-nowrap leading-none" style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 800, letterSpacing: "-0.02em", textTransform: "lowercase" }}>
                    ALASU
                </span>
            </div>
        </footer>
    );
}
