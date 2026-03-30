"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { BurgerMenu, useReveal, useLang, INSTAGRAM } from "../components/shared";
import LanguageSelector from "../components/LanguageSelector";

const features = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
        color: { border: "border-blue-500/20", bg: "from-blue-500/20 to-blue-600/5", hover: "group-hover:border-blue-500/30 group-hover:bg-blue-500/30" },
        title: { ru: "Высокое качество", kz: "Жоғары сапа", en: "High Quality", zh: "高品质" },
        desc: { ru: "Природная вода из экологически чистых источников Хан Тэнгри, прошедшая многоступенчатую очистку.", kz: "Хан Тәңірінің экологиялық таза көздерінен алынған, көпсатылы тазартудан өткен табиғи су.", en: "Natural water from ecologically clean sources of Khan Tengri, through multi-stage purification.", zh: "来自汗腾格里生态清洁源泉的天然水，经多级净化。" },
        delay: 0.2,
        offset: false,
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-indigo-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        color: { border: "border-indigo-500/20", bg: "from-indigo-500/20 to-indigo-600/5", hover: "group-hover:border-indigo-500/30 group-hover:bg-indigo-500/30" },
        title: { ru: "Надёжные поставки", kz: "Сенімді жеткізілім", en: "Reliable Supply", zh: "可靠供应" },
        desc: { ru: "Гарантируем бесперебойную логистику и чёткое соблюдение всех договорённостей и сроков.", kz: "Үздіксіз логистикаға және барлық келісімдер мен мерзімдердің нақты сақталуына кепілдік береміз.", en: "We guarantee uninterrupted logistics and strict adherence to all agreements and deadlines.", zh: "我们保证不间断的物流和严格遵守所有协议和期限。" },
        delay: 0.3,
        offset: true,
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-cyan-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        color: { border: "border-cyan-500/20", bg: "from-cyan-500/20 to-cyan-600/5", hover: "group-hover:border-cyan-500/30 group-hover:bg-cyan-500/30" },
        title: { ru: "Выгодные условия", kz: "Тиімді шарттар", en: "Favorable Terms", zh: "优惠条件" },
        desc: { ru: "Гибкая система скидок для оптовых клиентов и индивидуальный подход к каждому партнёру.", kz: "Көтерме клиенттерге арналған икемді жеңілдіктер жүйесі және әрбір серіктеске жеке көзқарас.", en: "Flexible discount system for wholesale clients and individual approach to each partner.", zh: "为批发客户提供灵活的折扣系统，并对每位合作伙伴采取个性化方法。" },
        delay: 0.4,
        offset: false,
    },
];

export default function PartnersPage() {
    const [lang, setLang] = useLang();
    const [menuOpen, setMenuOpen] = useState(false);
    const revealHeader = useReveal();
    const revealCta = useReveal();
    const L = lang as keyof typeof features[0]["title"];

    return (
        <div className="bg-[#061842] min-h-screen text-white flex flex-col">
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .hero-anim { animation: fadeUp 1s cubic-bezier(0.22,1,0.36,1) both; }
                @keyframes floatOrb {
                    0% { transform: translate(0,0) scale(1); }
                    33% { transform: translate(30px,-50px) scale(1.1); }
                    66% { transform: translate(-20px,20px) scale(0.9); }
                    100% { transform: translate(0,0) scale(1); }
                }
                .orb-1 { animation: floatOrb 15s ease-in-out infinite; }
                .orb-2 { animation: floatOrb 18s ease-in-out infinite reverse; }
                .glass-card {
                    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255,255,255,0.05);
                    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.2);
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

            <header className="sticky top-0 left-0 right-0 z-[100] w-full border-b border-white/[0.08] backdrop-blur-xl bg-[#061842]/80">
                <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5">
                    <Link href="/" className="no-underline group">
                        <span className="alasu-logo text-lg sm:text-xl text-white select-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-400">
                            ALASU
                        </span>
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

            <main className="flex-1 flex flex-col pt-8 sm:pt-12 pb-24 sm:pb-32 relative overflow-hidden min-h-screen">
                <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none orb-1" />
                <div className="absolute bottom-[10%] right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none orb-2" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 w-full mt-4 sm:mt-10">
                    {/* Header */}
                    <div
                        ref={revealHeader.ref}
                        className="text-center transition-all duration-[1000ms] ease-out"
                        style={{ opacity: revealHeader.visible ? 1 : 0, transform: revealHeader.visible ? "translateY(0)" : "translateY(40px)" }}
                    >
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <span className="inline-block w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
                            <p className="text-[10px] sm:text-[13px] tracking-[0.35em] sm:tracking-[0.4em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-bold">
                                {lang === "ru" ? "Партнёрство" : lang === "kz" ? "Серіктестік" : lang === "en" ? "Partnership" : "合作伙伴关系"}
                            </p>
                            <span className="inline-block w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-blue-500" />
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.04em] leading-[1.15] text-white mb-4 sm:mb-6">
                            {lang === "ru" ? (
                                <>Стать нашим{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">партнёром</span></>
                            ) : lang === "kz" ? (
                                <>Біздің{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">серіктес</span>{" "}болыңыз</>
                            ) : lang === "en" ? (
                                <>Become Our{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Partner</span></>
                            ) : (
                                <>成为我们的<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">合作伙伴</span></>
                            )}
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto mb-12 sm:mb-16 px-2">
                            {lang === "ru"
                                ? <>Мы открыты для сотрудничества с дистрибьюторами, торговыми сетями и бизнесом. <span className="alasu-logo text-white/60">ALASU</span> — это качество, которому доверяют.</>
                                : lang === "kz"
                                ? <>Біз дистрибьюторлармен, сауда желілерімен және бизнеспен ынтымақтастыққа ашықпыз. <span className="alasu-logo text-white/60">ALASU</span> — бұл сенім артатын сапа.</>
                                : lang === "en"
                                ? <>We are open to cooperation with distributors, retail chains and businesses. <span className="alasu-logo text-white/60">ALASU</span> is quality you can trust.</>
                                : <>我们向分销商、零售链和企业开放合作。<span className="alasu-logo text-white/60">ALASU</span>是值得信赖的品质。</>}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-24 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-blue-500/10 blur-[80px] -z-10 rounded-[100%]" />
                        {features.map((f, i) => {
                            const rev = useReveal();
                            return (
                                <div
                                    key={i}
                                    ref={rev.ref}
                                    className={`glass-card p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] group hover:border-white/10 transition-all duration-700 ${f.offset ? "sm:translate-y-0 md:translate-y-8" : ""}`}
                                    style={{
                                        opacity: rev.visible ? 1 : 0,
                                        transform: rev.visible ? (f.offset ? "translateY(32px)" : "translateY(0)") : "translateY(48px)",
                                        transition: `opacity 0.8s ease ${f.delay}s, transform 0.8s ease ${f.delay}s`,
                                    }}
                                >
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${f.color.bg} border ${f.color.border} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 ${f.color.hover} transition-all duration-500`}>
                                        {f.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{f.title[L]}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed font-light">{f.desc[L]}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div
                        ref={revealCta.ref}
                        className="relative flex flex-col items-center justify-center text-center glass-card p-8 sm:p-12 md:p-16 rounded-[1.5rem] sm:rounded-[2.5rem] border-t border-white/10 overflow-hidden transition-all duration-[1000ms] ease-out"
                        style={{ opacity: revealCta.visible ? 1 : 0, transform: revealCta.visible ? "translateY(0)" : "translateY(40px)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-[2.5rem] pointer-events-none" />
                        <p className="text-[11px] sm:text-[12px] text-blue-300/80 tracking-[0.2em] font-bold uppercase mb-4 relative z-10">
                            {lang === "ru" ? "Начните сотрудничество" : lang === "kz" ? "Ынтымақтастықты бастаңыз" : lang === "en" ? "Start Cooperation" : "开始合作"}
                        </p>
                        <a
                            href="tel:+77008878887"
                            className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 transition-all duration-300 mb-8 sm:mb-10 group relative z-10"
                        >
                            +7 700 887 88 87
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-500 group-hover:w-1/2 rounded-full" />
                        </a>
                        <a
                            href={`https://wa.me/77008878887?text=${encodeURIComponent(lang === "ru" ? "Здравствуйте! Интересует партнёрство с ALASU." : lang === "kz" ? "Сәлеметсіз! ALASU-мен серіктестік қызықтырады." : lang === "en" ? "Hello! I am interested in partnership with ALASU." : "您好！我对与ALASU的合作感兴趣。")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="sweep-btn relative z-10 inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.8)] hover:scale-105 transition-all duration-300 no-underline"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            {lang === "ru" ? "Написать в WhatsApp" : lang === "kz" ? "WhatsApp-қа жазу" : lang === "en" ? "Write on WhatsApp" : "WhatsApp联系"}
                        </a>
                    </div>
                </div>
            </main>

            <Footer lang={lang} />
        </div>
    );
}
