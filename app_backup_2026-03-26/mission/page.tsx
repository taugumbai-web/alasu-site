"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { BurgerMenu, useReveal, useLang } from "../components/shared";
import LanguageSelector from "../components/LanguageSelector";

const txt = {
    label:  { ru: "Миссия бренда", kz: "Бренд миссиясы", en: "Brand Mission", zh: "品牌使命" },
    title:  {
        ru: ["МЫ ЗА", "ЗДОРОВУЮ", "НАЦИЮ"],
        kz: ["біз саламатты", "ұлт үшін", ""],
        en: ["WE ARE FOR", "A HEALTHY", "NATION"],
        zh: ["我们支持", "健康", "民族"],
    },
    card1: {
        ru: "Мы стремимся сделать качественную питьевую воду доступной каждому и сформировать привычку ежедневного здорового потребления.",
        kz: "Біз сапалы ауыз суды әркімге қолжетімді етуге және күнделікті салауатты тұтыну әдетін қалыптастыруға тырысамыз.",
        en: "We strive to make quality drinking water accessible to everyone and build a habit of daily healthy consumption.",
        zh: "我们致力于让每个人都能获得优质饮用水，培养每日健康饮水的习惯。",
    },
    card2: {
        ru: "Наша цель – быть частью культуры правильного выбора и вносить вклад в здоровую нацию и здоровое будущее поколения.",
        kz: "Біздің мақсатымыз – дұрыс таңдау мәдениетінің бір бөлігі болу және саламатты ұлт пен дені сау болашақ ұрпаққа үлес қосу.",
        en: "Our goal is to be part of a culture of right choices and contribute to a healthy nation and healthy future generations.",
        zh: "我们的目标是成为正确选择文化的一部分，为健康民族和健康未来一代做出贡献。",
    },
};

export default function MissionPage() {
    const [lang, setLang] = useLang();
    const [menuOpen, setMenuOpen] = useState(false);

    const reveal1 = useReveal();
    const reveal2 = useReveal();
    const reveal3 = useReveal();

    const L = lang as keyof typeof txt.card1;
    const titleLines = txt.title[L] ?? txt.title.ru;

    return (
        <div className="bg-[#061842] min-h-screen text-white">
            <style>{`
                @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
                .hero-anim { animation: fadeUp 1s ease-out both; }
                @keyframes floatOrb {
                    0%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)}
                    66%{transform:translate(-20px,20px) scale(0.9)} 100%{transform:translate(0,0) scale(1)}
                }
                .orb-1{animation:floatOrb 15s ease-in-out infinite}
                .orb-2{animation:floatOrb 18s ease-in-out infinite reverse}
                .orb-3{animation:floatOrb 20s ease-in-out infinite 2s}
                .glass-card{
                    background:linear-gradient(135deg,rgba(255,255,255,0.03) 0%,rgba(255,255,255,0.01) 100%);
                    backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.05);
                    box-shadow:0 8px 32px 0 rgba(0,0,0,0.2);
                }
            `}</style>

            <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />

            <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.08] backdrop-blur-xl bg-[#061842]/80">
                <div className="flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5">
                    <Link href="/" className="no-underline group">
                        <span className="text-lg sm:text-xl font-black tracking-[0.25em] text-white select-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-400">
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

            <main className="pt-28 sm:pt-32 pb-24 sm:pb-32 relative overflow-hidden min-h-screen flex flex-col justify-center">
                <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none orb-1" />
                <div className="absolute top-[40%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none orb-2" />
                <div className="absolute -bottom-[10%] left-[20%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none orb-3" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_20%,transparent_100%)] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 w-full mt-4 sm:mt-10">
                    <div ref={reveal1.ref} className="transition-all duration-[1000ms] ease-out"
                        style={{ opacity: reveal1.visible ? 1 : 0, transform: reveal1.visible ? "translateY(0)" : "translateY(48px)" }}>
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <span className="inline-block w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
                            <p className="text-[10px] sm:text-[13px] tracking-[0.35em] sm:tracking-[0.4em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-bold">
                                {txt.label[L] ?? txt.label.ru}
                            </p>
                            <span className="inline-block w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-blue-500" />
                        </div>

                        <h1 className="font-black uppercase tracking-tight leading-[1] text-white hero-anim mb-4"
                            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", textShadow: "0 0 80px rgba(59,130,246,0.4)" }}>
                            Ala Su <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 inline-block mt-1 sm:mt-2">
                                {titleLines[0]}<br className="hidden sm:block" />
                                {titleLines[1]}<br className="hidden sm:block" />
                                {titleLines[2]}
                            </span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-16 mt-12 sm:mt-20 lg:mt-32">
                        <div className="lg:col-span-7 relative">
                            <div className="absolute -top-12 -left-4 sm:-top-16 sm:-left-8 text-[120px] sm:text-[200px] leading-none text-white/5 font-serif select-none pointer-events-none z-0">"</div>
                            <div ref={reveal2.ref}
                                className="glass-card p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] transition-all duration-[1000ms] ease-out delay-200 relative overflow-hidden group hover:border-white/10"
                                style={{ opacity: reveal2.visible ? 1 : 0, transform: reveal2.visible ? "translateY(0)" : "translateY(48px)" }}>
                                <div className="absolute top-0 right-0 w-40 sm:w-48 h-40 sm:h-48 bg-blue-500/10 rounded-full blur-[50px] transition-all duration-700 group-hover:bg-blue-500/20 group-hover:scale-150 pointer-events-none" />
                                <p className="text-lg sm:text-xl md:text-[26px] text-blue-50/90 leading-[1.6] font-light relative z-10 tracking-wide">
                                    {txt.card1[L] ?? txt.card1.ru}
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col justify-end mt-0 lg:mt-24">
                            <div ref={reveal3.ref}
                                className="glass-card p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-[1000ms] ease-out delay-400 relative overflow-hidden group hover:border-white/10"
                                style={{ opacity: reveal3.visible ? 1 : 0, transform: reveal3.visible ? "translateY(0)" : "translateY(48px)" }}>
                                <div className="absolute bottom-0 left-0 w-36 sm:w-40 h-36 sm:h-40 bg-indigo-500/10 rounded-full blur-[40px] transition-all duration-700 group-hover:bg-indigo-500/20 group-hover:scale-150 pointer-events-none" />
                                <p className="text-base sm:text-lg md:text-[20px] text-white/70 leading-relaxed font-light relative z-10">
                                    {txt.card2[L] ?? txt.card2.ru}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer lang={lang} />
        </div>
    );
}
