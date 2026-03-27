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
    "WhatsAppIcon",
    ()=>WhatsAppIcon,
    "catalogSubs",
    ()=>catalogSubs,
    "gameSubs",
    ()=>gameSubs,
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
            ru: "Напиток со вкусом энергетика",
            kz: "Энергетик дәміндегі сусын",
            en: "Energy-Flavored Drink",
            zh: "能量口味饮料"
        },
        href: "/catalog/energy",
        dot: "#22c55e"
    }
];
const gameSubs = [
    {
        label: {
            ru: "💧 Поймай каплю",
            kz: "💧 Тамшыны ұстай тұр",
            en: "💧 Drop Challenge",
            zh: "💧 水滴挑战"
        },
        href: "/play",
        dot: "#60a5fa"
    },
    {
        label: {
            ru: "🍋 Нарежь фрукты",
            kz: "🍋 Жемістерді кес",
            en: "🍋 Fruit Slice",
            zh: "🍋 切水果"
        },
        href: "/fruits",
        dot: "#fbbf24"
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
        hasSubs: false,
        isGames: false
    },
    {
        label: {
            ru: "Каталог",
            kz: "Каталог",
            en: "Catalog",
            zh: "目录"
        },
        href: "/catalog",
        hasSubs: true,
        isGames: false
    },
    {
        label: {
            ru: "История бренда",
            kz: "Бренд тарихы",
            en: "Story",
            zh: "品牌故事"
        },
        href: "/story",
        hasSubs: false,
        isGames: false
    },
    {
        label: {
            ru: "Миссия бренда",
            kz: "Бренд миссиясы",
            en: "Mission",
            zh: "品牌使命"
        },
        href: "/mission",
        hasSubs: false,
        isGames: false
    },
    {
        label: {
            ru: "Стать партнёром",
            kz: "Серіктес болу",
            en: "Partners",
            zh: "成为合作伙伴"
        },
        href: "/partners",
        hasSubs: false,
        isGames: false
    },
    {
        label: {
            ru: "Амбасадоры",
            kz: "Амбасадорлар",
            en: "Ambassadors",
            zh: "大使"
        },
        href: "/ambassadors",
        hasSubs: false,
        isGames: false
    },
    {
        label: {
            ru: "Контакты",
            kz: "Байланыс",
            en: "Contact",
            zh: "联系人"
        },
        href: "/contact",
        hasSubs: false,
        isGames: false
    },
    {
        label: {
            ru: "🎮 Игры",
            kz: "🎮 Ойындар",
            en: "🎮 Games",
            zh: "🎮 游戏"
        },
        href: "/play",
        hasSubs: false,
        isGames: true
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
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17.5",
                y1: "6.5",
                x2: "17.51",
                y2: "6.5"
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/shared.tsx",
        lineNumber: 68,
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
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 2 11 13"
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 78,
                columnNumber: 45
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/shared.tsx",
        lineNumber: 77,
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
            lineNumber: 85,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/shared.tsx",
        lineNumber: 84,
        columnNumber: 9
    }, this);
}
_c2 = TikTokIcon;
function WhatsAppIcon({ size = 18 }) {
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
            d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        }, void 0, false, {
            fileName: "[project]/app/components/shared.tsx",
            lineNumber: 92,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/shared.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, this);
}
_c3 = WhatsAppIcon;
function BurgerMenu({ open, onClose, lang }) {
    _s2();
    const [catalogOpen, setCatalogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
            if (!open) {
                setCatalogOpen(false);
                setHovered(null);
            }
        }
    }["BurgerMenu.useEffect"], [
        open
    ]);
    const socials = [
        {
            href: INSTAGRAM,
            label: "Instagram"
        },
        {
            href: "https://t.me/ala_su_kz",
            label: "Telegram"
        },
        {
            href: "https://www.tiktok.com/@ala_su.kz",
            label: "TikTok"
        },
        {
            href: "https://wa.me/77008878887",
            label: "WhatsApp"
        }
    ];
    const delay = (i)=>open ? `${80 + i * 65}ms` : "0ms";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[300] pointer-events-none",
        "aria-hidden": !open,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: "absolute inset-0 transition-opacity duration-500",
                style: {
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                    background: "radial-gradient(ellipse 120% 100% at 70% 50%, #020c22 0%, #010814 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-700",
                style: {
                    background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
                    opacity: open ? 1 : 0
                }
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-700",
                style: {
                    background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)",
                    opacity: open ? 1 : 0
                }
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-black text-white transition-all duration-700",
                    style: {
                        fontSize: "clamp(8rem, 22vw, 22rem)",
                        letterSpacing: "-0.04em",
                        opacity: open ? 0.025 : 0,
                        transform: open ? "translateY(0)" : "translateY(40px)"
                    },
                    children: "ALASU"
                }, void 0, false, {
                    fileName: "[project]/app/components/shared.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden transition-opacity duration-700",
                style: {
                    opacity: open ? 0.06 : 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 1440 200",
                    className: "w-full",
                    preserveAspectRatio: "none",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,200 L120,140 L240,165 L400,90 L520,125 L660,55 L780,95 L900,30 L1020,75 L1160,120 L1280,85 L1440,110 L1440,200 Z",
                        fill: "rgba(96,165,250,1)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 156,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/shared.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col overflow-hidden transition-opacity duration-500",
                style: {
                    pointerEvents: open ? "auto" : "none",
                    opacity: open ? 1 : 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center justify-between px-6 sm:px-12 md:px-16 pt-6 sm:pt-8 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: onClose,
                                className: "no-underline transition-all duration-500",
                                style: {
                                    opacity: open ? 1 : 0,
                                    transform: open ? "none" : "translateY(-10px)",
                                    transitionDelay: open ? "60ms" : "0ms"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "alasu-logo text-xl sm:text-2xl text-white hover:text-blue-300 transition-colors duration-300 select-none",
                                    children: "ALASU"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/shared.tsx",
                                    lineNumber: 171,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-500",
                                style: {
                                    opacity: open ? 1 : 0,
                                    transform: open ? "none" : "translateY(-10px)",
                                    transitionDelay: open ? "60ms" : "0ms"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 rounded-full border border-white/15 group-hover:border-white/40 group-hover:scale-110 transition-all duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shared.tsx",
                                        lineNumber: 181,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 18 18",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.8",
                                        strokeLinecap: "round",
                                        className: "text-white/50 group-hover:text-white transition-all duration-300 group-hover:rotate-90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "2",
                                                y1: "2",
                                                x2: "16",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 184,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "16",
                                                y1: "2",
                                                x2: "2",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 184,
                                                columnNumber: 67
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/shared.tsx",
                                        lineNumber: 182,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 176,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 167,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col md:flex-row overflow-hidden px-6 sm:px-12 md:px-16 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex flex-col justify-between w-[260px] lg:w-[300px] flex-shrink-0 pr-10 border-r border-white/[0.05]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-8 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "transition-all duration-700",
                                                style: {
                                                    opacity: open ? 1 : 0,
                                                    transform: open ? "none" : "translateY(20px)",
                                                    transitionDelay: open ? "150ms" : "0ms"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] tracking-[0.38em] uppercase text-blue-400/50 font-bold mb-2",
                                                        children: "Khan Tengri"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/20 text-xs font-light leading-relaxed",
                                                        children: lang === "ru" ? "Чистая горная вода\nВысота 7010м" : lang === "kz" ? "Таза тау суы\n7010м биіктік" : lang === "en" ? "Pure mountain water\nAltitude 7010m" : "纯净山泉水\n海拔7010米"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 195,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "transition-all duration-700",
                                                style: {
                                                    opacity: open ? 1 : 0,
                                                    transform: open ? "none" : "translateY(20px)",
                                                    transitionDelay: open ? "220ms" : "0ms"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] tracking-[0.38em] uppercase text-white/20 font-bold mb-3",
                                                        children: lang === "ru" ? "Контакты" : lang === "kz" ? "Байланыс" : lang === "en" ? "Contact" : "联系"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+77008878887",
                                                        className: "block text-sm font-bold text-white/35 hover:text-white transition-colors duration-300 no-underline tracking-wider",
                                                        children: "+7 700 887 88 87"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 205,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/shared.tsx",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pb-4 flex flex-col gap-3",
                                        children: socials.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: s.href,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                onClick: onClose,
                                                className: "text-[11px] font-black tracking-[0.2em] uppercase text-white/20 hover:text-white transition-all duration-300 no-underline group flex items-center gap-2",
                                                style: {
                                                    opacity: open ? 1 : 0,
                                                    transform: open ? "none" : "translateX(-12px)",
                                                    transition: `opacity 0.6s ease ${200 + i * 60}ms, transform 0.6s ease ${200 + i * 60}ms, color 0.3s`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-px bg-white/15 group-hover:w-6 group-hover:bg-blue-400 transition-all duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 37
                                                    }, this),
                                                    s.label
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 221,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shared.tsx",
                                        lineNumber: 219,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 193,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex-1 flex flex-col justify-center md:pl-12 lg:pl-16 gap-0 overflow-y-auto",
                                children: [
                                    navLinks.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-white/[0.04] last:border-0",
                                            children: item.isGames ? /* ── Games group ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-3 sm:py-4 transition-all duration-700",
                                                style: {
                                                    opacity: open ? 1 : 0,
                                                    transform: open ? "none" : "translateY(30px)",
                                                    transitionDelay: delay(i)
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] font-black tracking-[0.38em] uppercase text-blue-400/40 mb-3 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-4 h-px bg-blue-400/30"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/shared.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 45
                                                            }, this),
                                                            lang === "ru" ? "Игры" : lang === "kz" ? "Ойындар" : lang === "en" ? "Games" : "游戏"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-0.5",
                                                        children: gameSubs.map((g, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: g.href,
                                                                onClick: onClose,
                                                                onMouseEnter: ()=>setHovered(100 + gi),
                                                                onMouseLeave: ()=>setHovered(null),
                                                                className: "group flex items-center gap-4 sm:gap-5 py-1.5 no-underline",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300",
                                                                        style: {
                                                                            background: g.dot,
                                                                            opacity: hovered === 100 + gi ? 1 : 0.35
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/shared.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-black uppercase tracking-tight transition-all duration-300",
                                                                        style: {
                                                                            fontSize: "clamp(1.1rem, 2.8vw, 2.2rem)",
                                                                            color: hovered === 100 + gi ? "#fff" : hovered !== null ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.45)"
                                                                        },
                                                                        children: g.label[lang] ?? g.label.ru
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/shared.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto mr-2 w-0 h-px group-hover:w-8 transition-all duration-500",
                                                                        style: {
                                                                            background: g.dot
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/shared.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, gi, true, {
                                                                fileName: "[project]/app/components/shared.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 237,
                                                columnNumber: 37
                                            }, this) : item.hasSubs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCatalogOpen((v)=>!v),
                                                        onMouseEnter: ()=>setHovered(i),
                                                        onMouseLeave: ()=>setHovered(null),
                                                        className: "group w-full flex items-center justify-between py-3 sm:py-4 text-left transition-all duration-700",
                                                        style: {
                                                            opacity: open ? 1 : 0,
                                                            transform: open ? "none" : "translateY(30px)",
                                                            transitionDelay: delay(i)
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-baseline gap-4 sm:gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-black text-blue-400/30 tracking-widest tabular-nums transition-colors duration-300 group-hover:text-blue-400/70",
                                                                        children: String(i + 1).padStart(2, "0")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/shared.tsx",
                                                                        lineNumber: 278,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-black uppercase tracking-tight leading-none transition-all duration-300",
                                                                        style: {
                                                                            fontSize: "clamp(1.5rem, 4vw, 3.2rem)",
                                                                            color: hovered === i ? "#fff" : hovered !== null ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)"
                                                                        },
                                                                        children: item.label[lang] ?? item.label.ru
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/shared.tsx",
                                                                        lineNumber: 281,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/shared.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 20 20",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                className: "text-white/20 group-hover:text-white/60 transition-all duration-300 flex-shrink-0 mr-2",
                                                                style: {
                                                                    transform: catalogOpen ? "rotate(45deg)" : "rotate(0deg)"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M10 4v12M4 10h12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/shared.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/shared.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            maxHeight: catalogOpen ? "200px" : "0px",
                                                            overflow: "hidden",
                                                            transition: "max-height 0.4s cubic-bezier(.22,.97,.36,1)"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-10 sm:pl-14 pb-3 flex flex-col gap-1",
                                                            children: catalogSubs.map((sub, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: sub.href,
                                                                    onClick: onClose,
                                                                    className: "group flex items-center gap-3 py-1.5 no-underline transition-all duration-300",
                                                                    style: {
                                                                        opacity: catalogOpen ? 1 : 0,
                                                                        transform: catalogOpen ? "none" : "translateX(10px)",
                                                                        transition: `opacity 0.35s ease ${si * 60}ms, transform 0.35s ease ${si * 60}ms`
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-4 h-px rounded-full transition-all duration-300 group-hover:w-8",
                                                                            style: {
                                                                                background: sub.dot
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/shared.tsx",
                                                                            lineNumber: 306,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-base sm:text-lg font-bold text-white/30 group-hover:text-white transition-colors duration-300 tracking-wide",
                                                                            children: sub.label[lang] ?? sub.label.ru
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/shared.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, si, true, {
                                                                    fileName: "[project]/app/components/shared.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 53
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/shared.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                onClick: onClose,
                                                onMouseEnter: ()=>setHovered(i),
                                                onMouseLeave: ()=>setHovered(null),
                                                className: "group flex items-center gap-4 sm:gap-6 py-3 sm:py-4 no-underline transition-all duration-700",
                                                style: {
                                                    opacity: open ? 1 : 0,
                                                    transform: open ? "none" : "translateY(30px)",
                                                    transitionDelay: delay(i)
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black text-blue-400/30 tracking-widest tabular-nums transition-colors duration-300 group-hover:text-blue-400/70",
                                                        children: String(i + 1).padStart(2, "0")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-black uppercase tracking-tight leading-none transition-all duration-300",
                                                        style: {
                                                            fontSize: "clamp(1.5rem, 4vw, 3.2rem)",
                                                            color: hovered === i ? "#fff" : hovered !== null ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)"
                                                        },
                                                        children: item.label[lang] ?? item.label.ru
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-auto mr-2 w-0 h-px bg-blue-400 group-hover:w-10 transition-all duration-500 ease-out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/shared.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 317,
                                                columnNumber: 37
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/app/components/shared.tsx",
                                            lineNumber: 234,
                                            columnNumber: 29
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex md:hidden flex-wrap gap-4 pt-6 mt-2 border-t border-white/[0.05]",
                                        children: socials.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: s.href,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                onClick: onClose,
                                                className: "text-[10px] font-black tracking-[0.2em] uppercase text-white/25 hover:text-white transition-colors duration-300 no-underline",
                                                style: {
                                                    opacity: open ? 1 : 0,
                                                    transition: `opacity 0.6s ease ${300 + i * 60}ms`
                                                },
                                                children: s.label
                                            }, i, false, {
                                                fileName: "[project]/app/components/shared.tsx",
                                                lineNumber: 345,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shared.tsx",
                                        lineNumber: 343,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 232,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center justify-between px-6 sm:px-12 md:px-16 pb-6 sm:pb-8 pt-4 border-t border-white/[0.04]",
                        style: {
                            opacity: open ? 1 : 0,
                            transition: "opacity 0.6s ease 400ms"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] text-white/15 tracking-[0.3em] uppercase",
                                children: "© 2026 ALASU · Kazakhstan"
                            }, void 0, false, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 358,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] text-white/10 tracking-[0.25em] uppercase",
                                children: "Khan Tengri · 7010m"
                            }, void 0, false, {
                                fileName: "[project]/app/components/shared.tsx",
                                lineNumber: 359,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/shared.tsx",
                        lineNumber: 356,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/shared.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/shared.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
_s2(BurgerMenu, "JCY8TcCbB0wQwl6jh1kRWZ9zaBY=");
_c4 = BurgerMenu;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "IgIcon");
__turbopack_context__.k.register(_c1, "TelegramIcon");
__turbopack_context__.k.register(_c2, "TikTokIcon");
__turbopack_context__.k.register(_c3, "WhatsAppIcon");
__turbopack_context__.k.register(_c4, "BurgerMenu");
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
    // Все ссылки кроме «Главная» и блока «Игры» (игры выводятся отдельно через gameSubs)
    const footerLinks = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].filter((l)=>l.href !== "/" && !l.isGames);
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
                                            className: "alasu-logo text-4xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-500",
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
                                            },
                                            {
                                                href: "https://wa.me/77008878887",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 76
                                                }, this),
                                                hover: "bg-[#25D366]",
                                                label: "WhatsApp"
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
                                                        lineNumber: 48,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 45,
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
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/35 group-hover:text-white transition-colors duration-300",
                                                children: item.label[lang] ?? item.label.ru
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block w-0 h-[1.5px] bg-blue-500 group-hover:w-6 transition-all duration-500 ease-out"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 62,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 57,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 55,
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
                                                    lineNumber: 71,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/35 group-hover:text-white transition-colors duration-300",
                                                    children: item.label[lang] ?? item.label.ru
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block w-0 h-[1.5px] bg-blue-500 group-hover:w-6 transition-all duration-500 ease-out"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 70,
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
                                                lineNumber: 80,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+77008878887",
                                                className: "text-base font-black tracking-widest text-white/50 hover:text-white transition-colors duration-300 no-underline",
                                                children: "+7 700 887 88 87"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-white/25 tracking-[0.2em] uppercase mb-2",
                                                        children: t("Адрес", "Мекенжай", "Address", "地址")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-bold text-white/45 tracking-wide",
                                                                children: t("ул. Тобаякова 52", "Тобаяков к. 52", "Tobayakova 52", "托巴亚科瓦52")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://2gis.kz/search/Тобаякова%2052",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-[9px] font-black tracking-widest uppercase text-blue-400/60 hover:text-blue-300 transition-colors duration-300 no-underline border border-blue-400/20 hover:border-blue-400/50 px-2 py-0.5 rounded-full",
                                                                children: "2ГИС"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-4 border-t border-white/[0.05]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-white/25 tracking-[0.2em] uppercase mb-2",
                                                children: t("Игры", "Ойындар", "Games", "游戏")
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1.5",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameSubs"].map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: g.href,
                                                        className: "text-[11px] font-bold text-white/40 hover:text-white transition-colors duration-300 no-underline tracking-wide",
                                                        children: g.label[lang] ?? g.label.ru
                                                    }, i, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 68,
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
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-white/15 tracking-[0.2em] uppercase",
                                children: "Khan Tengri · Kazakhstan"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 123,
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
                    className: "text-[25vw] text-white/[0.013] whitespace-nowrap leading-none",
                    style: {
                        fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        textTransform: "lowercase"
                    },
                    children: "ALASU"
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 135,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 134,
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
"[project]/app/components/LanguageSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCALES",
    ()=>LOCALES,
    "default",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const LOCALES = {
    ru: "RU",
    kz: "KZ",
    en: "EN",
    zh: "中文"
};
function LanguageSelector({ lang, setLang, position = "bottom" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Закрывать при клике вне
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSelector.useEffect": ()=>{
            const handleClickOutside = {
                "LanguageSelector.useEffect.handleClickOutside": (event)=>{
                    if (ref.current && !ref.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["LanguageSelector.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "LanguageSelector.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["LanguageSelector.useEffect"];
        }
    }["LanguageSelector.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative inline-block z-[150]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "px-3 py-1 border border-white/20 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-white/60 hover:text-white hover:border-white/50 transition-colors duration-300",
                children: LOCALES[lang]
            }, void 0, false, {
                fileName: "[project]/app/components/LanguageSelector.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${position === "bottom" ? "top-[calc(100%+8px)]" : "bottom-[calc(100%+8px)]"} left-1/2 -translate-x-1/2 flex flex-col items-center bg-[#010c1f]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "opacity-100 scale-100 pointer-events-auto shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "opacity-0 scale-95 pointer-events-none"}`,
                children: Object.keys(LOCALES).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setLang(l);
                            setIsOpen(false);
                        },
                        className: `w-full text-center px-4 py-2.5 rounded-[10px] text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-200 ${lang === l ? "bg-blue-500/20 text-blue-400" : "text-white/50 hover:text-white hover:bg-white/10"}`,
                        children: LOCALES[l]
                    }, l, false, {
                        fileName: "[project]/app/components/LanguageSelector.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/LanguageSelector.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/LanguageSelector.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
_s(LanguageSelector, "ToG9rmXF9WtAhZvt+b52CAy06So=");
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/LanguageSelector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ─── Data ─────────────────────────────────────────────────────── */ const products = [
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
            ru: "Живая вода с пузырьками — освежает и бодрит. Природный газ подчёркивает вкус Хан Тэнгри.",
            kz: "Көпіршіктері бар тірі су — сергітеді және жандандырады.",
            en: "Sparkling water with natural bubbles — refreshing and invigorating.",
            zh: "天然气泡水，清爽提神。"
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
            ru: "С добавлением Zam Zam",
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
function f(obj, lang) {
    if (lang === "en") return obj.en ?? obj.ru;
    if (lang === "zh") return obj.zh ?? obj.ru;
    if (lang === "kz") return obj.kz;
    return obj.ru;
}
const CIRC = 2 * Math.PI * 20;
/* ══════════════════════════════════════════════════════════════════
   MOBILE — snap scroll
══════════════════════════════════════════════════════════════════ */ function MobileCarousel({ lang }) {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onScroll = ()=>{
        if (!ref.current) return;
        const idx = Math.round(ref.current.scrollLeft / ref.current.offsetWidth);
        setCurrent(Math.max(0, Math.min(products.length - 1, idx)));
    };
    const goTo = (i)=>ref.current?.scrollTo({
            left: i * ref.current.offsetWidth,
            behavior: "smooth"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                onScroll: onScroll,
                className: "flex overflow-x-auto snap-x snap-mandatory pb-2",
                style: {
                    scrollbarWidth: "none"
                },
                children: products.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 w-full snap-center px-6 pt-2 pb-4 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full max-w-[300px] rounded-[2rem] p-8 flex flex-col items-center gap-5 overflow-hidden",
                            style: {
                                background: `linear-gradient(145deg,rgba(7,28,82,0.75),rgba(2,13,43,0.92))`,
                                border: `1px solid rgba(${p.accentRgb},0.45)`,
                                boxShadow: `0 0 70px -15px rgba(${p.accentRgb},0.4),inset 0 1px 0 rgba(255,255,255,0.05)`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-12 -right-12 w-52 h-52 rounded-full pointer-events-none",
                                    style: {
                                        background: `radial-gradient(circle,rgba(${p.accentRgb},0.2) 0%,transparent 70%)`,
                                        filter: "blur(28px)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase rounded-full px-3.5 py-1.5",
                                    style: {
                                        border: `1px solid ${p.accent}55`,
                                        color: p.accent,
                                        background: `${p.accent}15`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                            style: {
                                                background: p.accent,
                                                boxShadow: `0 0 5px ${p.accent}`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 33
                                        }, this),
                                        f(p.badge, lang)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: p.img,
                                    alt: f(p.label, lang),
                                    className: "relative z-10 w-44 h-auto object-contain",
                                    style: {
                                        filter: `drop-shadow(0 20px 40px rgba(${p.accentRgb},0.65))`,
                                        animation: "drumFloat 4s ease-in-out infinite"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-black tracking-widest uppercase text-white mb-2 leading-tight",
                                            children: f(p.label, lang)
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/50 leading-relaxed font-light",
                                            children: f(p.desc, lang)
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this)
                    }, i, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2 pb-8 mt-1",
                children: products.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goTo(i),
                        style: {
                            width: current === i ? 28 : 8,
                            height: 8,
                            borderRadius: 9999,
                            background: current === i ? p.accent : "rgba(255,255,255,0.2)",
                            transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                            border: "none",
                            cursor: "pointer",
                            padding: 0
                        }
                    }, i, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/catalog/page.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
_s(MobileCarousel, "uk7RW1FgUKMhEG3JFjqTO73R6kg=");
_c = MobileCarousel;
/* ══════════════════════════════════════════════════════════════════
   DESKTOP — info panel + 3-D drum
══════════════════════════════════════════════════════════════════ */ const DRUM_R = 300;
function DrumShowcase({ lang }) {
    _s1();
    const drum = [
        ...products,
        ...products
    ];
    const COUNT = drum.length;
    const STEP = 360 / COUNT;
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(rotation);
    rotRef.current = rotation;
    const activeRaw = Math.round(-rotation / STEP);
    const active = (activeRaw % COUNT + COUNT) % COUNT;
    const activeIdx = active % products.length;
    const ap = products[activeIdx];
    const startAuto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumShowcase.useCallback[startAuto]": ()=>{
            if (autoRef.current) clearInterval(autoRef.current);
            autoRef.current = setInterval({
                "DrumShowcase.useCallback[startAuto]": ()=>setRotation({
                        "DrumShowcase.useCallback[startAuto]": (r)=>Math.round(r / STEP) * STEP - STEP
                    }["DrumShowcase.useCallback[startAuto]"])
            }["DrumShowcase.useCallback[startAuto]"], 4500);
        }
    }["DrumShowcase.useCallback[startAuto]"], [
        STEP
    ]);
    const stopAuto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumShowcase.useCallback[stopAuto]": ()=>{
            if (autoRef.current) clearInterval(autoRef.current);
        }
    }["DrumShowcase.useCallback[stopAuto]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrumShowcase.useEffect": ()=>{
            startAuto();
            return ({
                "DrumShowcase.useEffect": ()=>stopAuto()
            })["DrumShowcase.useEffect"];
        }
    }["DrumShowcase.useEffect"], [
        startAuto,
        stopAuto
    ]);
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumShowcase.useCallback[goTo]": (idx)=>{
            stopAuto();
            let diff = (idx - active + COUNT) % COUNT;
            if (diff > COUNT / 2) diff -= COUNT;
            setRotation(Math.round(rotRef.current / STEP) * STEP - diff * STEP);
            setTimeout(startAuto, 4500);
        }
    }["DrumShowcase.useCallback[goTo]"], [
        active,
        COUNT,
        STEP,
        startAuto,
        stopAuto
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrumShowcase.useEffect": ()=>{
            const onKey = {
                "DrumShowcase.useEffect.onKey": (e)=>{
                    if (e.key === "ArrowLeft") goTo((active - 1 + COUNT) % COUNT);
                    if (e.key === "ArrowRight") goTo((active + 1) % COUNT);
                }
            }["DrumShowcase.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "DrumShowcase.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["DrumShowcase.useEffect"];
        }
    }["DrumShowcase.useEffect"], [
        active,
        COUNT,
        goTo
    ]);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumShowcase.useCallback[handleMove]": (x)=>{
            if (!dragging || !dragRef.current) return;
            setRotation(dragRef.current.rot + (x - dragRef.current.x) * 0.4);
        }
    }["DrumShowcase.useCallback[handleMove]"], [
        dragging
    ]);
    const handleEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DrumShowcase.useCallback[handleEnd]": (x)=>{
            if (!dragging || !dragRef.current) return;
            setDragging(false);
            const dx = x - dragRef.current.x;
            const dt = Date.now() - dragRef.current.time;
            let fin = dragRef.current.rot + dx * 0.4;
            if (dt < 400 && Math.abs(dx) > 30) fin += dx / dt * 150;
            setRotation(Math.round(fin / STEP) * STEP);
            startAuto();
            dragRef.current = null;
        }
    }["DrumShowcase.useCallback[handleEnd]"], [
        dragging,
        STEP,
        startAuto
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrumShowcase.useEffect": ()=>{
            if (!dragging) return;
            const mm = {
                "DrumShowcase.useEffect.mm": (e)=>handleMove(e.clientX)
            }["DrumShowcase.useEffect.mm"];
            const mu = {
                "DrumShowcase.useEffect.mu": (e)=>handleEnd(e.clientX)
            }["DrumShowcase.useEffect.mu"];
            window.addEventListener("mousemove", mm);
            window.addEventListener("mouseup", mu);
            return ({
                "DrumShowcase.useEffect": ()=>{
                    window.removeEventListener("mousemove", mm);
                    window.removeEventListener("mouseup", mu);
                }
            })["DrumShowcase.useEffect"];
        }
    }["DrumShowcase.useEffect"], [
        dragging,
        handleMove,
        handleEnd
    ]);
    const hint = {
        ru: "Перетащите · ← →",
        kz: "Сүйреп · ← →",
        en: "Drag · ← →",
        zh: "拖动 · ← →"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    top: "50%",
                    right: "3%",
                    transform: "translateY(-50%)",
                    width: 680,
                    height: 680,
                    background: `radial-gradient(ellipse,rgba(${ap.accentRgb},0.1) 0%,transparent 65%)`,
                    filter: "blur(60px)",
                    borderRadius: "50%",
                    transition: "background 1.4s ease"
                }
            }, void 0, false, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 216,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-8 md:px-12 grid lg:grid-cols-[1fr_520px] gap-4 lg:gap-10 items-center",
                style: {
                    minHeight: 580
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 py-10 lg:py-0",
                        style: {
                            animation: "infoIn 0.55s cubic-bezier(0.22,1,0.36,1) both"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 -left-2 font-black leading-none select-none pointer-events-none tabular-nums",
                                style: {
                                    fontSize: "clamp(80px,14vw,180px)",
                                    color: `rgba(${ap.accentRgb},0.055)`,
                                    lineHeight: 1
                                },
                                children: String(activeIdx + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 234,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 mb-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase rounded-full px-4 py-2",
                                    style: {
                                        border: `1px solid ${ap.accent}50`,
                                        color: ap.accent,
                                        background: `${ap.accent}12`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                            style: {
                                                background: ap.accent,
                                                boxShadow: `0 0 6px ${ap.accent},0 0 14px ${ap.accent}55`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 29
                                        }, this),
                                        f(ap.badge, lang)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "relative z-10 font-black uppercase leading-[1.05] text-white mb-4",
                                style: {
                                    fontSize: "clamp(1.8rem,4vw,3rem)",
                                    letterSpacing: "0.02em",
                                    textShadow: `0 0 80px rgba(${ap.accentRgb},0.3)`
                                },
                                children: f(ap.label, lang)
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 250,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 h-[2px] w-14 rounded-full mb-5",
                                style: {
                                    background: `linear-gradient(90deg,${ap.accent},transparent)`,
                                    transition: "background 0.8s ease"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 256,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "relative z-10 text-white/55 leading-relaxed text-[15px] font-light max-w-xs mb-8",
                                children: f(ap.desc, lang)
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 260,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex items-center gap-4 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>goTo((active - 1 + COUNT) % COUNT),
                                        className: "w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95",
                                        style: {
                                            borderColor: `rgba(${ap.accentRgb},0.35)`,
                                            background: `rgba(${ap.accentRgb},0.08)`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "15",
                                            height: "15",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10 12L6 8l4-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/catalog/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 149
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-11 h-11",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "44",
                                                height: "44",
                                                viewBox: "0 0 48 48",
                                                style: {
                                                    transform: "rotate(-90deg)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "24",
                                                        cy: "24",
                                                        r: "20",
                                                        fill: "none",
                                                        stroke: "rgba(255,255,255,0.07)",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/catalog/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "24",
                                                        cy: "24",
                                                        r: "20",
                                                        fill: "none",
                                                        stroke: ap.accent,
                                                        strokeWidth: "2",
                                                        strokeDasharray: `${CIRC}`,
                                                        strokeDashoffset: "0",
                                                        strokeLinecap: "round",
                                                        style: {
                                                            animation: "countdownRing 4.5s linear forwards",
                                                            opacity: 0.75
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/catalog/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, `ring-${activeIdx}`, true, {
                                                fileName: "[project]/app/catalog/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-0 flex items-center justify-center text-[10px] font-bold tabular-nums",
                                                style: {
                                                    color: "rgba(255,255,255,0.45)"
                                                },
                                                children: [
                                                    activeIdx + 1,
                                                    "/",
                                                    products.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/catalog/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>goTo((active + 1) % COUNT),
                                        className: "w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95",
                                        style: {
                                            borderColor: `rgba(${ap.accentRgb},0.35)`,
                                            background: `rgba(${ap.accentRgb},0.08)`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "15",
                                            height: "15",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 4l4 4-4 4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/catalog/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 149
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1.5",
                                        children: products.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>goTo(i),
                                                style: {
                                                    width: activeIdx === i ? 22 : 7,
                                                    height: 7,
                                                    borderRadius: 9999,
                                                    background: activeIdx === i ? ap.accent : "rgba(255,255,255,0.18)",
                                                    transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: 0
                                                }
                                            }, i, false, {
                                                fileName: "[project]/app/catalog/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 265,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "relative z-10 mt-5 text-[10px] text-white/20 tracking-[0.22em] uppercase",
                                children: hint[lang] ?? hint.en
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 308,
                                columnNumber: 21
                            }, this)
                        ]
                    }, activeIdx, true, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 230,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative select-none",
                        style: {
                            height: 520
                        },
                        onMouseDown: (e)=>{
                            stopAuto();
                            setDragging(true);
                            dragRef.current = {
                                x: e.clientX,
                                rot: rotation,
                                time: Date.now()
                            };
                        },
                        onTouchStart: (e)=>{
                            stopAuto();
                            setDragging(true);
                            dragRef.current = {
                                x: e.touches[0].clientX,
                                rot: rotation,
                                time: Date.now()
                            };
                        },
                        onTouchMove: (e)=>handleMove(e.touches[0].clientX),
                        onTouchEnd: (e)=>handleEnd(e.changedTouches[0].clientX),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-14 left-1/2 -translate-x-1/2 pointer-events-none",
                                style: {
                                    width: 220,
                                    height: 55,
                                    background: `radial-gradient(ellipse,rgba(${ap.accentRgb},0.3) 0%,transparent 70%)`,
                                    filter: "blur(14px)",
                                    transition: "background 0.8s ease"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 321,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                style: {
                                    perspective: "1200px",
                                    cursor: dragging ? "grabbing" : "grab"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        transformStyle: "preserve-3d",
                                        transform: `rotateY(${rotation}deg)`,
                                        transition: dragging ? "none" : "transform 0.85s cubic-bezier(0.22,1,0.36,1)",
                                        width: 0,
                                        height: 0,
                                        position: "relative"
                                    },
                                    children: drum.map((p, i)=>{
                                        const isActive = active === i;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>!dragging && goTo(i),
                                            style: {
                                                position: "absolute",
                                                width: 200,
                                                left: -100,
                                                top: -215,
                                                transformStyle: "preserve-3d",
                                                transform: `rotateY(${i * STEP}deg) translateZ(${DRUM_R}px)`,
                                                cursor: isActive ? "default" : "pointer",
                                                backfaceVisibility: "hidden",
                                                WebkitBackfaceVisibility: "hidden"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "100%",
                                                    height: 400,
                                                    position: "relative",
                                                    opacity: isActive ? 1 : 0.2,
                                                    transform: isActive ? "scale(1.06) translateY(-10px)" : "scale(0.86)",
                                                    transition: "all 0.75s cubic-bezier(0.22,1,0.36,1)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    backfaceVisibility: "hidden",
                                                    WebkitBackfaceVisibility: "hidden"
                                                },
                                                children: [
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "absolute",
                                                            top: "8%",
                                                            left: "50%",
                                                            transform: "translateX(-50%)",
                                                            width: 110,
                                                            height: "68%",
                                                            background: `radial-gradient(ellipse,rgba(${p.accentRgb},0.14) 0%,transparent 70%)`,
                                                            filter: "blur(18px)",
                                                            pointerEvents: "none"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/catalog/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 49
                                                    }, this),
                                                    isActive && [
                                                        {
                                                            s: 5,
                                                            l: "16%",
                                                            b: "30%",
                                                            delay: "0s",
                                                            dur: "3.2s"
                                                        },
                                                        {
                                                            s: 4,
                                                            l: "77%",
                                                            b: "40%",
                                                            delay: "0.9s",
                                                            dur: "2.8s"
                                                        },
                                                        {
                                                            s: 6,
                                                            l: "26%",
                                                            b: "20%",
                                                            delay: "1.6s",
                                                            dur: "3.6s"
                                                        },
                                                        {
                                                            s: 3,
                                                            l: "64%",
                                                            b: "24%",
                                                            delay: "0.4s",
                                                            dur: "2.5s"
                                                        },
                                                        {
                                                            s: 5,
                                                            l: "83%",
                                                            b: "50%",
                                                            delay: "1.3s",
                                                            dur: "3.9s"
                                                        },
                                                        {
                                                            s: 4,
                                                            l: "10%",
                                                            b: "44%",
                                                            delay: "2.1s",
                                                            dur: "3.0s"
                                                        },
                                                        {
                                                            s: 3,
                                                            l: "50%",
                                                            b: "16%",
                                                            delay: "0.7s",
                                                            dur: "2.7s"
                                                        }
                                                    ].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                width: d.s,
                                                                height: d.s * 1.35,
                                                                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                                                background: `rgba(${p.accentRgb},0.55)`,
                                                                boxShadow: `0 0 ${d.s * 2}px rgba(${p.accentRgb},0.4)`,
                                                                left: d.l,
                                                                bottom: d.b,
                                                                animation: `floatDrop ${d.dur} ease-in-out infinite ${d.delay}`,
                                                                pointerEvents: "none"
                                                            }
                                                        }, i, false, {
                                                            fileName: "[project]/app/catalog/page.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 49
                                                        }, this)),
                                                    isActive && [
                                                        0,
                                                        0.7,
                                                        1.4
                                                    ].map((delay, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                bottom: "6%",
                                                                left: "50%",
                                                                width: 72,
                                                                height: 16,
                                                                borderRadius: "50%",
                                                                border: `1px solid rgba(${p.accentRgb},0.5)`,
                                                                animation: `rippleOut 2.1s ease-out infinite ${delay}s`,
                                                                pointerEvents: "none"
                                                            }
                                                        }, i, false, {
                                                            fileName: "[project]/app/catalog/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 49
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: p.img,
                                                        alt: f(p.label, lang),
                                                        style: {
                                                            position: "relative",
                                                            zIndex: 1,
                                                            width: "92%",
                                                            maxHeight: 370,
                                                            objectFit: "contain",
                                                            filter: isActive ? `drop-shadow(0 28px 55px rgba(${p.accentRgb},0.75))` : `drop-shadow(0 8px 18px rgba(${p.accentRgb},0.15))`,
                                                            animation: isActive ? "drumFloat 4s ease-in-out infinite" : "none",
                                                            transition: "filter 0.7s ease"
                                                        },
                                                        draggable: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/catalog/page.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/catalog/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 41
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 328,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 314,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/catalog/page.tsx",
        lineNumber: 214,
        columnNumber: 9
    }, this);
}
_s1(DrumShowcase, "WIagn5hzWFfWtGjd4o77VDc+GCs=");
_c1 = DrumShowcase;
function CatalogPage() {
    _s2();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    const labels = {
        header: {
            ru: "Ассортимент · ALASU",
            kz: "Ассортимент · ALASU",
            en: "Range · ALASU",
            zh: "产品系列 · ALASU"
        },
        title: {
            ru: "Наша продукция",
            kz: "Біздің өнімдеріміз",
            en: "Our Products",
            zh: "我们的产品"
        },
        sub: {
            ru: "Природная вода из источников Хан Тэнгри — в четырёх форматах для любого момента.",
            kz: "Хан Тэнгри бастауларынан алынған табиғи су — кез келген сәт үшін төрт форматта.",
            en: "Natural water from Khan Tengri springs — four formats for every moment.",
            zh: "汗腾格里泉水，四种规格，适合每一刻。"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes fadeUp    { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:none} }
                @keyframes drumFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                @keyframes infoIn    { from{opacity:0;transform:translateX(-24px)} to{opacity:1;transform:none} }
                @keyframes scanline  { 0%{top:-38%} 100%{top:138%} }
                @keyframes shimmer   { 0%{left:-60%} 65%{left:130%} 100%{left:130%} }
                @keyframes countdownRing {
                    from { stroke-dashoffset: 0 }
                    to   { stroke-dashoffset: ${CIRC.toFixed(2)} }
                }
                @keyframes floatDrop {
                    0%   { transform: translateY(0)     scale(1);   opacity: 0.7; }
                    70%  { transform: translateY(-28px) scale(0.7); opacity: 0.3; }
                    100% { transform: translateY(-44px) scale(0.4); opacity: 0;   }
                }
                @keyframes rippleOut {
                    0%   { transform: translateX(-50%) scale(0.5); opacity: 0.55; }
                    100% { transform: translateX(-50%) scale(3);   opacity: 0;    }
                }
            `
            }, void 0, false, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 453,
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
                        lineNumber: 475,
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
                                        className: "alasu-logo text-lg sm:text-xl text-white select-none",
                                        children: "ALASU"
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 sm:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            lang: lang,
                                            setLang: setLang
                                        }, void 0, false, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 484,
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
                                                    lineNumber: 487,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block w-[14px] h-[1.5px] bg-white/50 rounded-full group-hover:w-[22px] group-hover:bg-white/80 transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block w-[10px] h-[1.5px] bg-white/30 rounded-full group-hover:w-[22px] group-hover:bg-white/60 transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/catalog/page.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/catalog/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/catalog/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 479,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 478,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-28 sm:pt-32 pb-6 text-center",
                        style: {
                            animation: "fadeUp 0.75s ease-out both"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center justify-center gap-3 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-blue-400/80 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-6 sm:w-8 h-px bg-blue-400/40"
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 25
                                    }, this),
                                    labels.header[lang],
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-6 sm:w-8 h-px bg-blue-400/40"
                                    }, void 0, false, {
                                        fileName: "[project]/app/catalog/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 498,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-black uppercase tracking-[0.06em] leading-none text-white mb-4",
                                style: {
                                    fontSize: "clamp(2rem,6vw,4rem)"
                                },
                                children: labels.title[lang]
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 503,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed font-light mb-2 px-2",
                                children: labels.sub[lang]
                            }, void 0, false, {
                                fileName: "[project]/app/catalog/page.tsx",
                                lineNumber: 507,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 496,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-16 sm:pb-24 pt-2",
                        style: {
                            animation: "fadeUp 0.9s ease-out 0.15s both"
                        },
                        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileCarousel, {
                            lang: lang
                        }, void 0, false, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 515,
                            columnNumber: 27
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrumShowcase, {
                            lang: lang
                        }, void 0, false, {
                            fileName: "[project]/app/catalog/page.tsx",
                            lineNumber: 516,
                            columnNumber: 27
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 513,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/app/catalog/page.tsx",
                        lineNumber: 520,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/catalog/page.tsx",
                lineNumber: 474,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s2(CatalogPage, "IahFF7ehQ/QO4/+N1WYcqL2NhzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = CatalogPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MobileCarousel");
__turbopack_context__.k.register(_c1, "DrumShowcase");
__turbopack_context__.k.register(_c2, "CatalogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_f736457c._.js.map