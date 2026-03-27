(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/shared.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BurgerMenu",
    ()=>BurgerMenu,
    "INSTAGRAM",
    ()=>INSTAGRAM,
    "IgIcon",
    ()=>IgIcon,
    "TelegramIcon",
    ()=>TelegramIcon,
    "TikTokIcon",
    ()=>TikTokIcon,
    "catalogSubs",
    ()=>catalogSubs,
    "navLinks",
    ()=>navLinks,
    "useLang",
    ()=>useLang,
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const INSTAGRAM = "https://www.instagram.com/ala_su.kz?igsh=em9nOTVtYXA0Z3Nv";
const VALID_LANGS = [
    "ru",
    "kz",
    "en",
    "zh"
];
const LANG_KEY = "alasu_lang";
function useLang() {
    _s();
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLang.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const stored = localStorage.getItem(LANG_KEY);
            return stored && VALID_LANGS.includes(stored) ? stored : "ru";
        }
    }["useLang.useState"]);
    const setLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLang.useCallback[setLang]": (l)=>{
            setLangState(l);
            if ("TURBOPACK compile-time truthy", 1) localStorage.setItem(LANG_KEY, l);
        }
    }["useLang.useCallback[setLang]"], []);
    return [
        lang,
        setLang
    ];
}
_s(useLang, "Ra9S8tbnMuvGK6eXd0h2XWlvnFY=");
const catalogSubs = [
    {
        label: {
            ru: "Вода",
            kz: "Су",
            en: "Water",
            zh: "水"
        },
        href: "/catalog/water",
        dot: "#2563eb"
    },
    {
        label: {
            ru: "Ала Лимонати",
            kz: "Ала Лимонати",
            en: "Ala Lemonati",
            zh: "柠檬水"
        },
        href: "/catalog/lemonade",
        dot: "#f59e0b"
    },
    {
        label: {
            ru: "Напиток Энергетик",
            kz: "Энергетикалық сусын",
            en: "Energy Drink",
            zh: "能量饮料"
        },
        href: "/catalog/energy",
        dot: "#22c55e"
    }
];
const navLinks = [
    {
        label: {
            ru: "Главная",
            kz: "Басты бет",
            en: "Home",
            zh: "主页"
        },
        href: "/",
        hasSubs: false
    },
    {
        label: {
            ru: "Каталог",
            kz: "Каталог",
            en: "Catalog",
            zh: "目录"
        },
        href: "/catalog",
        hasSubs: true
    },
    {
        label: {
            ru: "История бренда",
            kz: "Бренд тарихы",
            en: "Story",
            zh: "品牌故事"
        },
        href: "/story",
        hasSubs: false
    },
    {
        label: {
            ru: "Миссия бренда",
            kz: "Бренд миссиясы",
            en: "Mission",
            zh: "品牌使命"
        },
        href: "/mission",
        hasSubs: false
    },
    {
        label: {
            ru: "Стать партнёром",
            kz: "Серіктес болу",
            en: "Partners",
            zh: "成为合作伙伴"
        },
        href: "/partners",
        hasSubs: false
    },
    {
        label: {
            ru: "Амбасадоры",
            kz: "Амбасадорлар",
            en: "Ambassadors",
            zh: "大使"
        },
        href: "/ambassadors",
        hasSubs: false
    },
    {
        label: {
            ru: "Контакты",
            kz: "Байланыс",
            en: "Contact",
            zh: "联系人"
        },
        href: "/contact",
        hasSubs: false
    }
];
function useReveal() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["useReveal.useEffect"], {
                threshold: 0.12
            });
            obs.observe(el);
            return ({
                "useReveal.useEffect": ()=>obs.disconnect()
            })["useReveal.useEffect"];
        }
    }["useReveal.useEffect"], []);
    return {
        ref,
        visible
    };
}
_s1(useReveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
function IgIcon({ size = 18 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5"
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17.5",
                y1: "6.5",
                x2: "17.51",
                y2: "6.5"
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/shared.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
_c = IgIcon;
function TelegramIcon({ size = 18 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m22 2-7 20-4-9-9-4Z"
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 2 11 13"
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 72,
                columnNumber: 45
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/shared.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
_c1 = TelegramIcon;
function TikTokIcon({ size = 18 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
        }, void 0, false, {
            fileName: "[project]/app/components/shared.tsx",
            lineNumber: 79,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/shared.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
_c2 = TikTokIcon;
function BurgerMenu({ open, onClose, lang }) {
    _s2();
    const [catalogOpen, setCatalogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BurgerMenu.useEffect": ()=>{
            document.body.style.overflow = open ? "hidden" : "";
            return ({
                "BurgerMenu.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["BurgerMenu.useEffect"];
        }
    }["BurgerMenu.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BurgerMenu.useEffect": ()=>{
            if (!open) setCatalogOpen(false);
        }
    }["BurgerMenu.useEffect"], [
        open
    ]);
    const socials = [
        {
            href: INSTAGRAM,
            label: "Instagram",
            dot: "bg-gradient-to-r from-[#f09433] to-[#bc1888]",
            shadow: "rgba(188,24,136,0.5)"
        },
        {
            href: "https://t.me/ala_su_kz",
            label: "Telegram",
            dot: "bg-[#2AABEE]",
            shadow: "rgba(42,171,238,0.5)"
        },
        {
            href: "https://www.tiktok.com/@ala_su.kz",
            label: "TikTok",
            dot: "bg-gradient-to-r from-[#00f2fe] to-[#fe0979]",
            shadow: "rgba(254,9,121,0.5)"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: `fixed inset-0 z-[210] bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 bottom-0 z-[220] w-full max-w-[min(450px,100vw)] bg-[#020917]/90 backdrop-blur-3xl flex flex-col transition-transform duration-700 ease-[cubic-bezier(.22,.97,.36,1)] overflow-hidden border-l border-white/[0.05] ${open ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center justify-between px-6 sm:px-10 py-6 border-b border-white/[0.05]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: onClose,
                                className: "group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-black tracking-[0.25em] text-white select-none group-hover:text-blue-400 transition-colors duration-300",
                                    children: "ALASU"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/shared.tsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "group w-12 h-12 flex items-center justify-center rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    className: "transition-transform duration-300 group-hover:rotate-90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "2",
                                            y1: "2",
                                            x2: "16",
                                            y2: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shared.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "16",
                                            y1: "2",
                                            x2: "2",
                                            y2: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/shared.tsx",
                                            lineNumber: 115,
                                            columnNumber: 67
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/shared.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 gap-1 overflow-y-auto py-4",
                        children: [
                            navLinks.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: item.hasSubs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCatalogOpen((v)=>!v),
                                                className: "group flex items-center gap-5 sm:gap-6 py-2 w-full text-left",
                                                style: {
                                                    transform: open ? "translateX(0)" : "translateX(30px)",
                                                    opacity: open ? 1 : 0,
                                                    transitionProperty: "transform, opacity",
                                                    transitionDuration: "0.8s",
                                                    transitionTimingFunction: "cubic-bezier(.22,.97,.36,1)",
                                                    transitionDelay: open ? `${i * 70}ms` : "0ms"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white/30 group-hover:text-white transition-colors duration-300 flex items-center gap-2",
                                                        children: [
                                                            item.label[lang] ?? item.label.ru,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "20",
                                                                height: "20",
                                                                viewBox: "0 0 20 20",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2.5",
                                                                strokeLinecap: "round",
                                                                style: {
                                                                    transform: catalogOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                                    transition: "transform 0.35s ease",
                                                                    marginTop: 4,
                                                                    opacity: 0.5
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M5 7l5 5 5-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/shared.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/shared.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 126,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxHeight: catalogOpen ? "220px" : "0px",
                                                    overflow: "hidden",
                                                    transition: "max-height 0.45s cubic-bezier(.22,.97,.36,1)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-7 sm:pl-9 pt-1 pb-3 flex flex-col gap-2",
                                                    children: catalogSubs.map((sub, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: sub.href,
                                                            onClick: onClose,
                                                            className: "group flex items-center gap-3 py-1 transition-all duration-200",
                                                            style: {
                                                                opacity: catalogOpen ? 1 : 0,
                                                                transform: catalogOpen ? "translateX(0)" : "translateX(12px)",
                                                                transition: `opacity 0.35s ease ${si * 70}ms, transform 0.35s ease ${si * 70}ms`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125",
                                                                    style: {
                                                                        background: sub.dot,
                                                                        boxShadow: `0 0 10px ${sub.dot}90`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/shared.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg sm:text-xl font-bold text-white/35 group-hover:text-white transition-colors duration-200 tracking-wide",
                                                                    children: sub.label[lang] ?? sub.label.ru
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/shared.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, si, true, {
                                                            fileName: "[project]/app/components/shared.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/shared.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 149,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/shared.tsx",
                                        lineNumber: 124,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: onClose,
                                        className: "group flex items-center gap-5 sm:gap-6 py-2",
                                        style: {
                                            transform: open ? "translateX(0)" : "translateX(30px)",
                                            opacity: open ? 1 : 0,
                                            transitionProperty: "transform, opacity",
                                            transitionDuration: "0.8s",
                                            transitionTimingFunction: "cubic-bezier(.22,.97,.36,1)",
                                            transitionDelay: open ? `${i * 70}ms` : "0ms"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 182,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white/30 group-hover:text-white transition-colors duration-300",
                                                children: [
                                                    item.label[lang] ?? item.label.ru,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -bottom-2 left-0 w-0 h-[3px] bg-blue-500 group-hover:w-full transition-all duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 183,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/shared.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/app/components/shared.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-6 border-t border-white/[0.05] grid gap-3",
                                children: socials.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: s.href,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        onClick: onClose,
                                        className: "group flex items-center gap-5 text-lg sm:text-xl font-bold tracking-tight text-white/40 hover:text-white transition-colors duration-300",
                                        style: {
                                            transform: open ? "translateX(0)" : "translateX(20px)",
                                            opacity: open ? 1 : 0,
                                            transitionProperty: "transform, opacity",
                                            transitionDuration: "0.8s",
                                            transitionTimingFunction: "cubic-bezier(.22,.97,.36,1)",
                                            transitionDelay: open ? `${(navLinks.length + i) * 70}ms` : "0ms"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-1.5 h-1.5 rounded-full ${s.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-300`,
                                                style: {
                                                    boxShadow: `0 0 10px ${s.shadow}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 205,
                                                columnNumber: 33
                                            }, this),
                                            s.label
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/components/shared.tsx",
                                        lineNumber: 194,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 192,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 px-6 sm:px-10 py-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-white/20 tracking-widest uppercase",
                            children: "© 2026 ALASU"
                        }, void 0, false, {
                            fileName: "[project]/app/components/shared.tsx",
                            lineNumber: 214,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 213,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s2(BurgerMenu, "Uwzj4Ycqd4wwMMxZtZvbjotUXzw=");
_c3 = BurgerMenu;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "IgIcon");
__turbopack_context__.k.register(_c1, "TelegramIcon");
__turbopack_context__.k.register(_c2, "TikTokIcon");
__turbopack_context__.k.register(_c3, "BurgerMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/shared.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Footer({ lang }) {
    const t = (ru, kz, en, zh)=>{
        if (lang === "kz") return kz;
        if (lang === "en") return en ?? ru;
        if (lang === "zh") return zh ?? ru;
        return ru;
    };
    // Все ссылки кроме «Главная» (она уже в логотипе)
    const footerLinks = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].filter((l)=>l.href !== "/");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-[#010611] border-t border-white/[0.03] pt-20 pb-12 z-40 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 md:px-10 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10 items-start mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "inline-block no-underline group mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl font-black tracking-[0.2em] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-500",
                                            children: "ALASU"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 29,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-white/35 tracking-[0.25em] uppercase font-light mb-6",
                                        children: "Khan Tengri · 7010m · Natural Mineral Water"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSTAGRAM"],
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IgIcon"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 58
                                                }, this),
                                                hover: "bg-gradient-to-tr from-[#f09433] to-[#bc1888]",
                                                label: "Instagram"
                                            },
                                            {
                                                href: "https://t.me/ala_su_kz",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelegramIcon"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 73
                                                }, this),
                                                hover: "bg-[#2AABEE]",
                                                label: "Telegram"
                                            },
                                            {
                                                href: "https://www.tiktok.com/@ala_su.kz",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TikTokIcon"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 84
                                                }, this),
                                                hover: "bg-gradient-to-tr from-[#00f2fe] to-[#fe0979]",
                                                label: "TikTok"
                                            }
                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: s.href,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                "aria-label": s.label,
                                                className: "group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/35 bg-white/[0.04] transition-all duration-300 hover:scale-110 text-white/45 hover:text-white",
                                                children: [
                                                    s.icon,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `absolute inset-0 ${s.hover} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 44,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 flex flex-col gap-4 text-[12px] tracking-[0.12em] uppercase font-bold",
                                children: footerLinks.slice(0, Math.ceil(footerLinks.length / 2)).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "group flex items-center gap-3 w-fit no-underline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 h-1 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 57,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/35 group-hover:text-white transition-colors duration-300",
                                                children: item.label[lang] ?? item.label.ru
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block w-0 h-[1.5px] bg-blue-500 group-hover:w-6 transition-all duration-500 ease-out"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 61,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 flex flex-col gap-4 text-[12px] tracking-[0.12em] uppercase font-bold",
                                children: [
                                    footerLinks.slice(Math.ceil(footerLinks.length / 2)).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "group flex items-center gap-3 w-fit no-underline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1 h-1 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/35 group-hover:text-white transition-colors duration-300",
                                                    children: item.label[lang] ?? item.label.ru
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block w-0 h-[1.5px] bg-blue-500 group-hover:w-6 transition-all duration-500 ease-out"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 29
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-4 border-t border-white/[0.05]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-white/25 tracking-[0.2em] uppercase mb-2",
                                                children: t("Телефон", "Телефон", "Phone", "电话")
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 79,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+77008878887",
                                                className: "text-base font-black tracking-widest text-white/50 hover:text-white transition-colors duration-300 no-underline",
                                                children: "+7 700 887 88 87"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 82,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/[0.05] gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-white/20 tracking-[0.25em] font-medium uppercase",
                                children: [
                                    "© 2026 ALASU. ",
                                    t("Все права защищены.", "Барлық құқықтар қорғалған.", "All rights reserved.", "版权所有。")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-white/15 tracking-[0.2em] uppercase",
                                children: "Khan Tengri · Kazakhstan"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none -z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[25vw] font-black tracking-tight text-white/[0.013] whitespace-nowrap leading-none",
                    children: "ALASU"
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/catalog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ─── SEO ─────────────────────────────────────────────────────────── */ // Note: export metadata from a server component wrapper if needed
// For now metadata is defined in the layout
/* ─── Data ───────────────────────────────────────────────────────────── */ const products = [
    {
        img: "/still.png",
        label: {
            ru: "Негазированная вода",
            kz: "Газсыз су",
            en: "Still Water",
            zh: "无气水"
        },
        desc: {
            ru: "Чистая природная вода из источников Хан Тэнгри без газа. Идеальна для ежедневного употребления.",
            kz: "Хан Тәңірінің бастауларынан алынған таза табиғи газсыз су. Күнделікті қолдануға өте қолайлы.",
            en: "Pure natural still water from the Khan Tengri springs. Perfect for everyday hydration.",
            zh: "来自汗腾格里泉水的纯天然无气水，非常适合日常饮用。"
        },
        badge: {
            ru: "Без газа",
            kz: "Газсыз",
            en: "Still",
            zh: "无气"
        },
        accent: "#2563eb",
        accentRgb: "37,99,235"
    },
    {
        img: "/sparkling.png",
        label: {
            ru: "Газированная вода",
            kz: "Газды су",
            en: "Sparkling Water",
            zh: "气泡水"
        },
        desc: {
            ru: "Живая вода с пузырьками — освежает и бодрит. Природный газ подчёркивает чистый вкус Хан Тэнгри.",
            kz: "Көпіршіктері бар тірі су — сергітеді және жандандырады.",
            en: "Sparkling water with natural bubbles — refreshing and invigorating. The natural carbonation enhances the clean Khan Tengri taste.",
            zh: "天然气泡水，清爽提神，天然碳酸突显汗腾格里的纯净口感。"
        },
        badge: {
            ru: "С газом",
            kz: "Газды",
            en: "Sparkling",
            zh: "气泡"
        },
        accent: "#38bdf8",
        accentRgb: "56,189,248"
    },
    {
        img: "/mineral.png",
        label: {
            ru: "С добавлением воды Zam Zam",
            kz: "Zam Zam суымен",
            en: "With Zam Zam Water",
            zh: "添加渗渗泉水"
        },
        desc: {
            ru: "Уникальное сочетание горной воды Хан Тэнгри с добавлением священной воды Zam Zam.",
            kz: "Хан Тэнгри тау суының Zam Zam қасиетті суымен бірегей үйлесімі.",
            en: "A unique blend of Khan Tengri mountain water with the sacred Zam Zam water.",
            zh: "汗腾格里山泉水与神圣渗渗泉水的独特融合。"
        },
        badge: {
            ru: "Zam Zam",
            kz: "Zam Zam",
            en: "Zam Zam",
            zh: "渗渗泉"
        },
        accent: "#c2824a",
        accentRgb: "194,130,74"
    },
    {
        img: "/sport.png",
        label: {
            ru: "SPORT+",
            kz: "SPORT+",
            en: "SPORT+",
            zh: "运动+"
        },
        desc: {
            ru: "Специальная формула для спортсменов. Обогащена электролитами для быстрого восстановления.",
            kz: "Спортшылар мен белсенді адамдарға арнайы формула.",
            en: "Special formula for athletes. Enriched with electrolytes for fast recovery.",
            zh: "专为运动员设计的配方，富含电解质，快速恢复体力。"
        },
        badge: {
            ru: "Для спорта",
            kz: "Спортқа арналған",
            en: "Sport",
            zh: "运动"
        },
        accent: "#94a3b8",
        accentRgb: "148,163,184"
    }
];
function getLangField(obj, lang) {
    if (lang === "en") return obj.en ?? obj.ru;
    if (lang === "zh") return obj.zh ?? obj.ru;
    if (lang === "kz") return obj.kz;
    return obj.ru;
}
/* ─── Mobile product cards (instead of 3D drum on small screens) ─── */ function MobileProductGrid({ lang }) {
    var _s = __turbopack_context__.k.signature();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 pb-16",
        children: products.map(_s((p, i)=>{
            _s();
            const reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: reveal.ref,
                className: "rounded-[1.5rem] border p-6 flex flex-col gap-4 transition-all duration-700",
                style: {
                    background: `linear-gradient(145deg, rgba(7,28,82,0.6), rgba(2,13,43,0.8))`,
                    borderColor: `rgba(${p.accentRgb},0.3)`,
                    boxShadow: `0 10px 40px -10px rgba(${p.accentRgb},0.3)`,
                    opacity: reveal.visible ? 1 : 0,
                    transform: reveal.visible ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${i * 0.1}s`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block text-[10px] font-bold tracking-[0.14em] uppercase rounded-full px-3 py-1 self-start",
                        style: {
                            border: `1px solid ${p.accent}60`,
                            color: p.accent,
                            background: `${p.accent}15`
                        },
                        children: getLangField(p.badge, lang)
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 96,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: p.img,
                            alt: getLangField(p.label, lang),
                            className: "w-28 h-auto object-contain",
                            style: {
                                filter: `drop-shadow(0 12px 24px rgba(${p.accentRgb},0.5))`
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 103,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 102,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-black tracking-wider uppercase text-white mb-1",
                                children: getLangField(p.label, lang)
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 111,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/50 leading-relaxed font-light",
                                children: getLangField(p.desc, lang)
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 112,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 110,
                        columnNumber: 25
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 83,
                columnNumber: 21
            }, this);
        }, "Nmu2Qso8UhYsLw83s88TA9II0Gg=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
            ];
        }))
    }, void 0, false, {
        fileName: "[project]/app/catalog/page.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}
_c = MobileProductGrid;
/* ─── 3D Drum Carousel ───────────────────────────────────────────────── */ const drumProducts = [
    ...products,
    ...products
];
const COUNT = drumProducts.length;
const ANGLE_STEP = 360 / COUNT;
const RADIUS = 340;
function DrumCarousel({ lang }) {
    _s();
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeRaw = Math.round(-rotation / ANGLE_STEP);
    const active = (activeRaw % COUNT + COUNT) % COUNT;
    const startAuto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumCarousel.useCallback[startAuto]": ()=>{
            if (autoRef.current) clearInterval(autoRef.current);
            autoRef.current = setInterval({
                "DrumCarousel.useCallback[startAuto]": ()=>{
                    setRotation({
                        "DrumCarousel.useCallback[startAuto]": (r)=>Math.round(r / ANGLE_STEP) * ANGLE_STEP - ANGLE_STEP
                    }["DrumCarousel.useCallback[startAuto]"]);
                }
            }["DrumCarousel.useCallback[startAuto]"], 4000);
        }
    }["DrumCarousel.useCallback[startAuto]"], []);
    const stopAuto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumCarousel.useCallback[stopAuto]": ()=>{
            if (autoRef.current) clearInterval(autoRef.current);
        }
    }["DrumCarousel.useCallback[stopAuto]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrumCarousel.useEffect": ()=>{
            startAuto();
            return ({
                "DrumCarousel.useEffect": ()=>stopAuto()
            })["DrumCarousel.useEffect"];
        }
    }["DrumCarousel.useEffect"], [
        startAuto,
        stopAuto
    ]);
    const onMouseDown = (e)=>{
        stopAuto();
        setIsDragging(true);
        dragStart.current = {
            x: e.clientX,
            rot: rotation,
            time: Date.now()
        };
    };
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumCarousel.useCallback[handleMove]": (clientX)=>{
            if (!isDragging || !dragStart.current) return;
            const dx = clientX - dragStart.current.x;
            setRotation(dragStart.current.rot + dx * 0.4);
        }
    }["DrumCarousel.useCallback[handleMove]"], [
        isDragging
    ]);
    const handleEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumCarousel.useCallback[handleEnd]": (clientX)=>{
            if (!isDragging || !dragStart.current) return;
            setIsDragging(false);
            const dx = clientX - dragStart.current.x;
            const dt = Date.now() - dragStart.current.time;
            let finalRot = dragStart.current.rot + dx * 0.4;
            if (dt > 10 && dt < 400 && Math.abs(dx) > 30) {
                finalRot += dx / dt * 150;
            }
            setRotation(Math.round(finalRot / ANGLE_STEP) * ANGLE_STEP);
            startAuto();
            dragStart.current = null;
        }
    }["DrumCarousel.useCallback[handleEnd]"], [
        isDragging,
        startAuto
    ]);
    const onMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumCarousel.useCallback[onMouseMove]": (e)=>handleMove(e.clientX)
    }["DrumCarousel.useCallback[onMouseMove]"], [
        handleMove
    ]);
    const onMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumCarousel.useCallback[onMouseUp]": (e)=>handleEnd(e.clientX)
    }["DrumCarousel.useCallback[onMouseUp]"], [
        handleEnd
    ]);
    const onTouchStart = (e)=>{
        stopAuto();
        setIsDragging(true);
        dragStart.current = {
            x: e.touches[0].clientX,
            rot: rotation,
            time: Date.now()
        };
    };
    const onTouchMove = (e)=>handleMove(e.touches[0].clientX);
    const onTouchEnd = (e)=>handleEnd(e.changedTouches[0].clientX);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrumCarousel.useEffect": ()=>{
            if (isDragging) {
                window.addEventListener("mousemove", onMouseMove);
                window.addEventListener("mouseup", onMouseUp);
            }
            return ({
                "DrumCarousel.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMouseMove);
                    window.removeEventListener("mouseup", onMouseUp);
                }
            })["DrumCarousel.useEffect"];
        }
    }["DrumCarousel.useEffect"], [
        isDragging,
        onMouseMove,
        onMouseUp
    ]);
    const goTo = (idx)=>{
        stopAuto();
        let diff = (idx - active + COUNT) % COUNT;
        if (diff > COUNT / 2) diff -= COUNT;
        setRotation(Math.round(rotation / ANGLE_STEP) * ANGLE_STEP - diff * ANGLE_STEP);
        setTimeout(startAuto, 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center select-none min-h-[520px] md:min-h-[680px] justify-center w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full flex items-center justify-center origin-center",
                style: {
                    height: 440,
                    cursor: isDragging ? "grabbing" : "grab",
                    perspective: "1100px",
                    transform: "scale(0.78) translateY(-20px)",
                    transformOrigin: "center center"
                },
                onMouseDown: onMouseDown,
                onTouchStart: onTouchStart,
                onTouchMove: onTouchMove,
                onTouchEnd: onTouchEnd,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-16 pointer-events-none",
                        style: {
                            background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(59,130,246,0.15) 0%, transparent 80%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transformStyle: "preserve-3d",
                            transform: `rotateY(${rotation}deg)`,
                            transition: isDragging ? "none" : "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
                            position: "relative",
                            width: 0,
                            height: 0
                        },
                        children: drumProducts.map((p, i)=>{
                            const angle = i * ANGLE_STEP;
                            const isActive = active === i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>!isDragging && goTo(i),
                                style: {
                                    position: "absolute",
                                    width: 180,
                                    left: -90,
                                    top: -165,
                                    transformStyle: "preserve-3d",
                                    transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                                    cursor: isActive ? "default" : "pointer",
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: isActive ? `linear-gradient(145deg, rgba(7,28,82,0.85), rgba(2,13,43,0.85))` : "transparent",
                                        border: isActive ? `2px solid rgba(${p.accentRgb},0.8)` : "1px solid rgba(255,255,255,0.04)",
                                        borderRadius: 16,
                                        padding: "16px 12px",
                                        backdropFilter: "blur(20px)",
                                        boxShadow: isActive ? `0 24px 60px -12px rgba(${p.accentRgb},0.5), inset 0 1px 0 rgba(255,255,255,0.12)` : "0 6px 20px rgba(0,0,0,0.3)",
                                        opacity: isActive ? 1 : 0.35,
                                        transform: isActive ? "scale(1.1)" : "scale(0.88)",
                                        transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
                                        width: "100%",
                                        height: 330,
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                        overflow: "hidden",
                                        backfaceVisibility: "hidden",
                                        WebkitBackfaceVisibility: "hidden"
                                    },
                                    children: [
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: 12,
                                                        left: 12,
                                                        width: 24,
                                                        height: 24,
                                                        borderTop: `2px solid ${p.accent}`,
                                                        borderLeft: `2px solid ${p.accent}`,
                                                        borderRadius: "4px 0 0 0"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: 12,
                                                        right: 12,
                                                        width: 24,
                                                        height: 24,
                                                        borderTop: `2px solid ${p.accent}`,
                                                        borderRight: `2px solid ${p.accent}`,
                                                        borderRadius: "0 4px 0 0"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        bottom: 12,
                                                        left: 12,
                                                        width: 24,
                                                        height: 24,
                                                        borderBottom: `2px solid ${p.accent}`,
                                                        borderLeft: `2px solid ${p.accent}`,
                                                        borderRadius: "0 0 0 4px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        bottom: 12,
                                                        right: 12,
                                                        width: 24,
                                                        height: 24,
                                                        borderBottom: `2px solid ${p.accent}`,
                                                        borderRight: `2px solid ${p.accent}`,
                                                        borderRadius: "0 0 4px 0"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block text-[9px] font-bold tracking-[0.14em] uppercase rounded-full px-3 py-1",
                                                style: {
                                                    border: `1px solid ${p.accent}60`,
                                                    color: p.accent,
                                                    background: `${p.accent}12`
                                                },
                                                children: getLangField(p.badge, lang)
                                            }, void 0, false, {
                                                fileName: "[project]/app/catalog/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center flex-1 my-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: p.img,
                                                alt: getLangField(p.label, lang),
                                                className: "w-24 mb-2 object-contain",
                                                style: {
                                                    filter: `drop-shadow(0 15px 30px rgba(${p.accentRgb},0.6))`,
                                                    animation: isActive ? "drumFloat 4s ease-in-out infinite" : "none"
                                                },
                                                draggable: false
                                            }, void 0, false, {
                                                fileName: "[project]/app/catalog/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-center flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[10px] font-black tracking-widest uppercase text-white mb-1 px-1 leading-tight",
                                                    children: getLangField(p.label, lang)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[8px] text-white/40 leading-relaxed font-light px-2",
                                                    style: {
                                                        minHeight: 36
                                                    },
                                                    children: getLangField(p.desc, lang)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 33
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 236,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 221,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goTo((active - 1 + COUNT) % COUNT),
                        className: "w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 12L6 8l4-4"
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 313,
                                columnNumber: 141
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 313,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 311,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: products.map((p, i)=>{
                            const isDotActive = active % products.length === i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    stopAuto();
                                    const currentMod = active % products.length;
                                    let diff = i - currentMod;
                                    if (diff > products.length / 2) diff -= products.length;
                                    if (diff < -products.length / 2) diff += products.length;
                                    setRotation(Math.round(rotation / ANGLE_STEP) * ANGLE_STEP - diff * ANGLE_STEP);
                                    setTimeout(startAuto, 4000);
                                },
                                style: {
                                    width: isDotActive ? 22 : 8,
                                    height: 8,
                                    borderRadius: 9999,
                                    background: isDotActive ? p.accent : "rgba(255,255,255,0.2)",
                                    transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0
                                }
                            }, i, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 319,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goTo((active + 1) % COUNT),
                        className: "w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 4l4 4-4 4"
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 340,
                                columnNumber: 141
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 340,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 338,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 310,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-[10px] text-white/20 tracking-[0.25em] uppercase",
                children: {
                    ru: "Перетащите или нажмите",
                    kz: "Сүйреп немесе басыңыз",
                    en: "Drag or tap",
                    zh: "拖动或点击"
                }[lang]
            }, void 0, false, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 343,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/catalog/page.tsx",
        lineNumber: 209,
        columnNumber: 9
    }, this);
}
_s(DrumCarousel, "zjRj9vzMvFCW8F0GVQoztUgjsrQ=");
_c1 = DrumCarousel;
function CatalogPage() {
    _s1();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatalogPage.useEffect": ()=>{
            const check = {
                "CatalogPage.useEffect.check": ()=>setIsMobile(window.innerWidth < 768)
            }["CatalogPage.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "CatalogPage.useEffect": ()=>window.removeEventListener("resize", check)
            })["CatalogPage.useEffect"];
        }
    }["CatalogPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes drumFloat {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-10px); }
                }
                @keyframes shimmerSlide {
                    0%   { left: -80%; }
                    100% { left: 130%; }
                }
                .title-anim { animation: fadeUp 0.75s ease-out both; }
                .sub-anim   { animation: fadeUp 0.75s ease-out both 0.1s; }
                .drum-anim  { animation: fadeUp 0.9s ease-out both 0.2s; }
                .sweep-btn { position: relative; overflow: hidden; }
                .sweep-btn::after {
                    content: ''; position: absolute; top: 0; left: -80%;
                    width: 60%; height: 100%;
                    background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%);
                    transition: left 0.5s ease;
                }
                .sweep-btn:hover::after { left: 130%; }
            `
            }, void 0, false, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 366,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#061842] text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BurgerMenu"], {
                        open: menuOpen,
                        onClose: ()=>setMenuOpen(false),
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 393,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.08] backdrop-blur-xl bg-[#061842]/80",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center px-5 sm:px-8 md:px-12 py-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "no-underline",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg sm:text-xl font-black tracking-[0.25em] text-white select-none",
                                        children: "ALASU"
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 sm:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLang((l)=>l === "ru" ? "kz" : "ru"),
                                            className: "px-3 py-1 border border-white/30 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-white/70 hover:text-white hover:border-white/70 transition-colors duration-200 bg-transparent cursor-pointer",
                                            children: lang === "ru" ? "KZ" : "RU"
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMenuOpen(true),
                                            "aria-label": "Открыть меню",
                                            className: "group relative flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/35 backdrop-blur-sm transition-all duration-300 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block w-[18px] h-[1.5px] bg-white/80 rounded-full group-hover:w-[22px] group-hover:bg-white transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block w-[14px] h-[1.5px] bg-white/50 rounded-full group-hover:w-[22px] group-hover:bg-white/80 transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block w-[10px] h-[1.5px] bg-white/30 rounded-full group-hover:w-[22px] group-hover:bg-white/60 transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 397,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 396,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-6 sm:pb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sub-anim flex items-center justify-center gap-3 text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase text-blue-400/80 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-6 sm:w-8 h-px bg-blue-400/40"
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 421,
                                        columnNumber: 25
                                    }, this),
                                    lang === "ru" ? "Ассортимент · ALASU" : "Ассортимент · ALASU",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-6 sm:w-8 h-px bg-blue-400/40"
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 423,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 420,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "title-anim font-black uppercase tracking-[0.06em] leading-none text-white mb-4",
                                style: {
                                    fontSize: "clamp(2rem, 6vw, 4rem)"
                                },
                                children: lang === "ru" ? "Наша продукция" : "Біздің өнімдеріміз"
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 425,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sub-anim text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed font-light mb-8 sm:mb-10 px-2",
                                children: lang === "ru" ? "Природная вода из источников Хан Тэнгри — в четырёх форматах для любого момента." : "Хан Тэнгри бастауларынан алынған табиғи су — кез келген сәт үшін төрт форматта."
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 429,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 419,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drum-anim pb-12 sm:pb-20 pt-2 sm:pt-6",
                        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileProductGrid, {
                            lang: lang
                        }, void 0, false, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 439,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrumCarousel, {
                            lang: lang
                        }, void 0, false, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 441,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 437,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 445,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 392,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s1(CatalogPage, "XbsbnKAxG4aTHsKvg558mpwy8i8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c2 = CatalogPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MobileProductGrid");
__turbopack_context__.k.register(_c1, "DrumCarousel");
__turbopack_context__.k.register(_c2, "CatalogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_5347136d._.js.map