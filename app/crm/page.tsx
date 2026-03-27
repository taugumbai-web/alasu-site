"use client";

import { useState, useEffect, useCallback } from "react";

type Category = "distributor" | "client" | "order" | "other";
type ContactStatus = "new" | "read" | "done";

type ContactEntry = {
    id: string;
    createdAt: string;
    category: Category;
    name: string;
    phone: string;
    message: string;
    status: ContactStatus;
};

const PIN_KEY = "alasu_crm_pin";
const ADMIN_PIN_FALLBACK = "123";

const CATEGORY_LABELS: Record<Category, string> = {
    distributor: "🤝 Дистрибьютор",
    client: "👤 Клиент",
    order: "📦 Заказ",
    other: "💬 Другое",
};

const CATEGORY_COLORS: Record<Category, string> = {
    distributor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    client: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    order: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    other: "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

const STATUS_LABELS: Record<ContactStatus, string> = {
    new: "🔴 Новый",
    read: "🟡 Прочитан",
    done: "🟢 Готово",
};

const STATUS_COLORS: Record<ContactStatus, string> = {
    new: "bg-red-500/20 text-red-300 border-red-500/30",
    read: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    done: "bg-green-500/20 text-green-300 border-green-500/30",
};

export default function CrmPage() {
    const [pin, setPin] = useState("");
    const [authed, setAuthed] = useState(false);
    const [shake, setShake] = useState(false);
    const [contacts, setContacts] = useState<ContactEntry[]>([]);
    const [filter, setFilter] = useState<Category | "all">("all");
    const [loading, setLoading] = useState(false);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [savedPin, setSavedPin] = useState("");

    useEffect(() => {
        const sp = sessionStorage.getItem(PIN_KEY);
        if (sp) {
            setSavedPin(sp);
            setAuthed(true);
            setPin(sp);
        }
    }, []);

    const fetchContacts = useCallback(async (p: string) => {
        setLoading(true);
        try {
            const r = await fetch("/api/contact/list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pin: p }),
            });
            const data = await r.json();
            if (data.contacts) setContacts(data.contacts);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (authed && savedPin) fetchContacts(savedPin);
    }, [authed, savedPin, fetchContacts]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const r = await fetch("/api/contact/list", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pin }),
        });
        const data = await r.json();
        if (data.contacts !== undefined) {
            sessionStorage.setItem(PIN_KEY, pin);
            setSavedPin(pin);
            setContacts(data.contacts);
            setAuthed(true);
        } else {
            setShake(true);
            setPin("");
            setTimeout(() => setShake(false), 600);
        }
    };

    const updateStatus = async (id: string, status: ContactStatus) => {
        await fetch("/api/contact/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pin: savedPin, id, status }),
        });
        setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
    };

    const stats = {
        distributor: contacts.filter(c => c.category === "distributor"),
        client: contacts.filter(c => c.category === "client"),
        order: contacts.filter(c => c.category === "order"),
        other: contacts.filter(c => c.category === "other"),
    };

    const newCount = (cat: Category) => stats[cat].filter(c => c.status === "new").length;

    const filtered = filter === "all" ? contacts : contacts.filter(c => c.category === filter);

    const formatDate = (iso: string) => {
        const d = new Date(iso);
        return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "2-digit" })
            + " " + d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    };

    if (!authed) {
        return (
            <div className="min-h-screen bg-[#010611] flex items-center justify-center px-4">
                <style>{`
                    @keyframes shake {
                        0%,100%{transform:translateX(0)}
                        20%{transform:translateX(-10px)}
                        40%{transform:translateX(10px)}
                        60%{transform:translateX(-8px)}
                        80%{transform:translateX(8px)}
                    }
                    .shake{animation:shake 0.5s ease}
                `}</style>
                <div className={`w-full max-w-sm ${shake ? "shake" : ""}`}>
                    <div className="text-center mb-8">
                        <div className="alasu-logo text-3xl text-white mb-1">ALASU</div>
                        <div className="text-[11px] text-white/30 tracking-[0.3em] uppercase">CRM Панель</div>
                    </div>
                    <form onSubmit={handleLogin} className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 flex flex-col gap-5">
                        <div>
                            <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">PIN</label>
                            <input
                                type="password"
                                value={pin}
                                onChange={e => setPin(e.target.value)}
                                placeholder="••••"
                                autoFocus
                                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white text-center text-2xl tracking-[0.5em] focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                            />
                        </div>
                        <button type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl tracking-[0.15em] uppercase text-sm transition-all duration-300">
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#010611] text-white">
            <style>{`
                .card-hover { transition: all 0.3s ease; }
                .card-hover:hover { transform: translateY(-2px); }
                .scrollbar-thin::-webkit-scrollbar { width: 4px; }
                .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
                .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
            `}</style>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#010611]/90 backdrop-blur-xl border-b border-white/[0.06] px-4 sm:px-8 py-4 flex items-center justify-between">
                <div>
                    <div className="alasu-logo text-lg">ALASU <span className="text-blue-400/60 font-light text-sm" style={{fontFamily:"inherit", letterSpacing:"normal", textTransform:"none"}}>CRM</span></div>
                </div>
                <button
                    onClick={() => { sessionStorage.removeItem(PIN_KEY); setAuthed(false); setPin(""); setSavedPin(""); setContacts([]); }}
                    className="text-[11px] uppercase tracking-[0.15em] text-white/30 hover:text-white/70 transition-colors border border-white/10 hover:border-white/30 px-4 py-2 rounded-full"
                >
                    Выйти
                </button>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

                {/* Stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {(["distributor", "client", "order", "other"] as Category[]).map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(filter === cat ? "all" : cat)}
                            className={`card-hover text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                                filter === cat
                                    ? "bg-blue-600/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                    : "bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.06] hover:border-white/15"
                            }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <span className="text-2xl">
                                    {cat === "distributor" ? "🤝" : cat === "client" ? "👤" : cat === "order" ? "📦" : "💬"}
                                </span>
                                {newCount(cat) > 0 && (
                                    <span className="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded-full leading-none">
                                        +{newCount(cat)}
                                    </span>
                                )}
                            </div>
                            <div className="text-2xl font-black text-white mb-0.5">{stats[cat].length}</div>
                            <div className="text-[11px] text-white/40 tracking-wide leading-tight">
                                {cat === "distributor" ? "Дистрибьюторы" : cat === "client" ? "Клиенты" : cat === "order" ? "Заказы" : "Другое"}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Filter bar */}
                <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                        {(["all", "distributor", "client", "order", "other"] as const).map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                                    filter === f
                                        ? "bg-blue-600 text-white"
                                        : "bg-white/[0.05] text-white/40 hover:text-white/70 hover:bg-white/[0.08]"
                                }`}
                            >
                                {f === "all" ? `Все (${contacts.length})` :
                                 f === "distributor" ? `Дистр. (${stats.distributor.length})` :
                                 f === "client" ? `Клиенты (${stats.client.length})` :
                                 f === "order" ? `Заказы (${stats.order.length})` :
                                 `Другое (${stats.other.length})`}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => fetchContacts(savedPin)}
                        disabled={loading}
                        className="text-[11px] uppercase tracking-[0.15em] text-white/30 hover:text-white/70 transition-colors border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full"
                    >
                        {loading ? "..." : "↻ Обновить"}
                    </button>
                </div>

                {/* Contact list */}
                {loading ? (
                    <div className="text-center py-16 text-white/20 text-sm tracking-widest uppercase">Загрузка...</div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-16 text-white/20 text-sm tracking-widest uppercase">Нет заявок</div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {filtered.map(c => (
                            <div
                                key={c.id}
                                className="bg-white/[0.025] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300"
                            >
                                {/* Row */}
                                <button
                                    className="w-full text-left px-5 py-4 grid grid-cols-[1fr_auto] gap-3 items-center"
                                    onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                                >
                                    <div className="flex items-center gap-3 flex-wrap min-w-0">
                                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[c.category]} whitespace-nowrap`}>
                                            {CATEGORY_LABELS[c.category]}
                                        </span>
                                        <span className="font-bold text-white text-sm truncate">{c.name}</span>
                                        <a
                                            href={`tel:${c.phone}`}
                                            onClick={e => e.stopPropagation()}
                                            className="text-blue-400/70 hover:text-blue-300 text-sm font-light transition-colors no-underline whitespace-nowrap"
                                        >
                                            {c.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 flex-shrink-0">
                                        <span className="text-[10px] text-white/25 whitespace-nowrap hidden sm:block">{formatDate(c.createdAt)}</span>
                                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${STATUS_COLORS[c.status]} whitespace-nowrap`}>
                                            {STATUS_LABELS[c.status]}
                                        </span>
                                        <span className={`text-white/30 transition-transform duration-200 ${expandedId === c.id ? "rotate-180" : ""}`}>▾</span>
                                    </div>
                                </button>

                                {/* Expanded */}
                                {expandedId === c.id && (
                                    <div className="px-5 pb-5 border-t border-white/[0.05]">
                                        <div className="pt-4 flex flex-col gap-4">
                                            {c.message && (
                                                <div>
                                                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-1.5">Сообщение</p>
                                                    <p className="text-sm text-white/70 leading-relaxed bg-white/[0.02] rounded-xl px-4 py-3 border border-white/[0.05]">
                                                        {c.message}
                                                    </p>
                                                </div>
                                            )}
                                            <div className="text-[11px] text-white/25 sm:hidden">{formatDate(c.createdAt)}</div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 mr-1">Статус:</span>
                                                {(["new", "read", "done"] as ContactStatus[]).map(s => (
                                                    <button
                                                        key={s}
                                                        onClick={() => updateStatus(c.id, s)}
                                                        className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                                                            c.status === s
                                                                ? STATUS_COLORS[s] + " opacity-100"
                                                                : "bg-white/[0.03] border-white/10 text-white/30 hover:border-white/25 hover:text-white/60"
                                                        }`}
                                                    >
                                                        {STATUS_LABELS[s]}
                                                    </button>
                                                ))}
                                                <a
                                                    href={`https://wa.me/${c.phone.replace(/\D/g, "")}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="ml-auto text-[11px] font-bold text-green-400/70 hover:text-green-300 border border-green-500/20 hover:border-green-400/50 px-3 py-1.5 rounded-full transition-all no-underline"
                                                >
                                                    WhatsApp ↗
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
