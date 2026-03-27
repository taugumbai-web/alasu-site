"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { BurgerMenu, useReveal, useLang, INSTAGRAM, IgIcon, TelegramIcon, TikTokIcon } from "../components/shared";
import LanguageSelector from "../components/LanguageSelector";

export default function ContactPage() {
    const [lang, setLang] = useLang();
    const [menuOpen, setMenuOpen] = useState(false);
    const reveal = useReveal();

    const t = (ru: string, kz: string, en: string, zh?: string) => {
        if (lang === "kz") return kz;
        if (lang === "en") return en;
        if (lang === "zh") return zh ?? en;
        return ru;
    };

    const sendWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const f = e.currentTarget;
        const name = (f.elements.namedItem("name") as HTMLInputElement).value;
        const phone = (f.elements.namedItem("phone") as HTMLInputElement).value;
        const text = (f.elements.namedItem("text") as HTMLTextAreaElement).value;
        const message = lang === "en"
            ? `Name: ${name}\nPhone: ${phone}\nMessage: ${text}`
            : `Имя: ${name}\nТелефон: ${phone}\nКомментарий: ${text}`;
        window.open(`https://wa.me/77008878887?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <div className="bg-[#061842] min-h-screen text-white flex flex-col">
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .sweep-btn { position: relative; overflow: hidden; }
                .sweep-btn::after {
                    content: ''; position: absolute; top: 0; left: -80%;
                    width: 60%; height: 100%;
                    background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%);
                    transition: left 0.5s ease;
                }
                .sweep-btn:hover::after { left: 130%; }
            `}</style>

            <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />

            <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.08] backdrop-blur-xl bg-[#061842]/80">
                <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5">
                    <Link href="/" className="no-underline">
                        <span className="text-lg sm:text-xl font-black tracking-[0.25em] text-white select-none">ALASU</span>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-6">
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

            <main className="flex-1 flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-20">
                <div
                    ref={reveal.ref}
                    className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start md:items-center w-full transition-all duration-[1000ms] ease-out"
                    style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "translateY(0)" : "translateY(40px)" }}
                >
                    {/* Left info */}
                    <div>
                        <p className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase text-blue-400/80 mb-5 sm:mb-6 font-bold">
                            <span className="inline-block w-6 sm:w-8 h-px bg-blue-400/40" />
                            {t("Контакты", "Байланыс", "Contacts", "联系")}
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.05em] leading-[1.1] text-white mb-4 sm:mb-6 drop-shadow-md">
                            {t("Свяжитесь с нами", "Хабарласыңыз", "Contact Us", "联系我们")}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/50 mb-8 sm:mb-12 leading-relaxed font-light max-w-md">
                            {t(
                                "Оставьте номер — и мы перезвоним вам в течение дня. Мы всегда рады сотрудничеству.",
                                "Нөміріңізді қалдырыңыз, біз сізге күні бойы хабарласамыз.",
                                "Leave your number and we'll call you back during the day. We're always happy to cooperate.",
                                "留下您的电话，我们将在当天回电。我们随时欢迎合作。"
                            )}
                        </p>

                        <div className="flex flex-col gap-6 sm:gap-8">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-bold">{t("Телефон", "Телефон", "Phone", "电话")}</p>
                                <a href="tel:+77008878887" className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide hover:text-blue-400 transition-colors duration-300">
                                    +7 700 887 88 87
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-bold">{t("Мы в соцсетях", "Біз әлеуметтік желілерде", "Follow us", "关注我们")}</p>
                                <div className="flex flex-col gap-3 sm:gap-4">
                                    {[
                                        { href: INSTAGRAM, label: "Instagram", icon: <IgIcon size={20} />, color: "group-hover:border-blue-400 group-hover:bg-blue-400/10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
                                        { href: "https://t.me/ala_su_kz", label: "Telegram", icon: <TelegramIcon size={20} />, color: "group-hover:border-[#2AABEE] group-hover:bg-[#2AABEE]/10 group-hover:shadow-[0_0_15px_rgba(42,171,238,0.3)]" },
                                        { href: "https://www.tiktok.com/@ala_su.kz", label: "TikTok", icon: <TikTokIcon size={20} />, color: "group-hover:border-[#00f2fe] group-hover:bg-[#00f2fe]/10 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.3)]" },
                                    ].map((s, i) => (
                                        <a key={i} href={s.href} target="_blank" rel="noreferrer"
                                            className="group inline-flex items-center gap-3 sm:gap-4 text-white/50 hover:text-white transition-all duration-500 text-sm tracking-[0.15em] no-underline">
                                            <span className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${s.color}`}>
                                                {s.icon}
                                            </span>
                                            <span className="font-light">{s.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={sendWhatsApp}
                        className="relative bg-[#040e25]/60 p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] grid gap-5 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl group/form"
                    >
                        <div className="absolute -top-20 -right-20 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />
                        <div className="absolute -bottom-20 -left-20 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 grid gap-4 sm:gap-5">
                            {[
                                { id: "name", label: t("Имя", "Аты-жөніңіз", "Name", "姓名"), type: "text" },
                                { id: "phone", label: t("Телефон", "Телефон", "Phone", "电话"), type: "tel" },
                            ].map((field) => (
                                <div key={field.id} className="relative">
                                    <input
                                        id={field.id}
                                        name={field.id}
                                        type={field.type}
                                        placeholder=" "
                                        required
                                        className="peer w-full h-[60px] sm:h-[70px] bg-white/[0.02] border border-white/10 px-5 sm:px-6 pt-5 sm:pt-6 pb-2 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 font-light text-sm sm:text-[15px]"
                                    />
                                    <label htmlFor={field.id}
                                        className="absolute left-5 sm:left-6 top-[12px] sm:top-[14px] text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-white/50 transition-all duration-300 peer-placeholder-shown:top-[20px] sm:peer-placeholder-shown:top-[24px] peer-placeholder-shown:text-[13px] sm:peer-placeholder-shown:text-[15px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/40 peer-focus:!top-[12px] sm:peer-focus:!top-[14px] peer-focus:!text-[9px] sm:peer-focus:!text-[10px] peer-focus:!uppercase peer-focus:!tracking-[0.15em] peer-focus:!text-blue-400 pointer-events-none">
                                        {field.label}
                                    </label>
                                </div>
                            ))}

                            <div className="relative">
                                <textarea id="text" name="text" placeholder=" " rows={3}
                                    className="peer w-full bg-white/[0.02] border border-white/10 px-5 sm:px-6 pt-7 sm:pt-8 pb-4 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 resize-none font-light text-sm sm:text-[15px]" />
                                <label htmlFor="text"
                                    className="absolute left-5 sm:left-6 top-[12px] sm:top-[14px] text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-white/50 transition-all duration-300 peer-placeholder-shown:top-[22px] sm:peer-placeholder-shown:top-[24px] peer-placeholder-shown:text-[13px] sm:peer-placeholder-shown:text-[15px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/40 peer-focus:!top-[12px] sm:peer-focus:!top-[14px] peer-focus:!text-[9px] sm:peer-focus:!text-[10px] peer-focus:!uppercase peer-focus:!tracking-[0.15em] peer-focus:!text-blue-400 pointer-events-none">
                                    {t("Комментарий", "Пікір", "Comment", "留言")}
                                </label>
                            </div>

                            <button type="submit"
                                className="sweep-btn w-full bg-blue-600 font-bold text-white tracking-[0.2em] uppercase py-4 sm:py-5 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300 mt-1 relative overflow-hidden group border border-blue-500/50 hover:border-blue-400 text-sm sm:text-base">
                                <span className="relative z-10">{t("Отправить", "Жіберу", "Send", "发送")}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Decorative */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                    <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-400/5 rounded-full blur-[120px]" />
                </div>
            </main>

            <Footer lang={lang} />
        </div>
    );
}
