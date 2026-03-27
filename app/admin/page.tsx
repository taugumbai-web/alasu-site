"use client";

import { useState } from "react";
import Link from "next/link";

type ValidResult = {
    valid: true;
    bottles: number;
    time: number;
    product?: "water" | "lemonade";
    createdAt: string;
};
type InvalidResult = {
    valid: false;
    reason: "not_found" | "used";
    usedAt?: string;
};
type Result = ValidResult | InvalidResult | null;

export default function AdminPage() {
    const [pin, setPin]         = useState("");
    const [pinOk, setPinOk]     = useState(false);
    const [pinErr, setPinErr]   = useState(false);
    const [code, setCode]       = useState("");
    const [result, setResult]   = useState<Result>(null);
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);

    const handlePin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!pin.trim()) { setPinErr(true); return; }
        setPinOk(true);
        setPinErr(false);
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!code.trim()) return;
        setLoading(true);
        setResult(null);
        setChecked(false);
        try {
            const res  = await fetch("/api/game/verify", {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify({ code: code.trim().toUpperCase(), pin }),
            });
            const data = await res.json();
            if (res.status === 401) { setPinOk(false); setPinErr(true); return; }
            setResult(data);
            setChecked(true);
        } catch {
            setResult(null);
        } finally {
            setLoading(false);
        }
    };

    const reset = () => { setCode(""); setResult(null); setChecked(false); };

    const fmt = (iso: string) =>
        new Date(iso).toLocaleString("ru-RU", {
            day: "2-digit", month: "2-digit", year: "numeric",
            hour: "2-digit", minute: "2-digit",
        });

    /* ── prize info helpers ── */
    const prizeIcon  = (r: ValidResult) => r.product === "lemonade" ? "🍋" : "🍶";
    const prizeName  = (r: ValidResult) => {
        const n = r.bottles;
        if (r.product === "lemonade") return n === 2 ? "2 лимонати" : "1 лимонати";
        return n === 2 ? "2 бутылки воды" : "1 бутылка воды";
    };
    const gameLabel  = (r: ValidResult) =>
        r.product === "lemonade" ? "🍋 Нарежь фрукты" : "💧 Поймай каплю";
    const scoreLabel = (r: ValidResult) =>
        r.product === "lemonade"
            ? `${r.time} фруктов нарезано`
            : `${r.time}s удержал каплю`;

    return (
        <div className="min-h-screen bg-[#010812] flex flex-col items-center justify-center px-5 py-10">
            <style>{`
                @keyframes fadeUp  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
                @keyframes popIn   { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
                @keyframes shake   { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-8px)} 75%{transform:translateX(8px)} }
            `}</style>

            {/* Logo */}
            <Link href="/" className="no-underline mb-10 select-none">
                <span className="alasu-logo text-2xl text-white/50 hover:text-white/80 transition-colors">
                    ALASU
                </span>
            </Link>

            {/* ══════════════════════════════════
                PIN SCREEN
            ══════════════════════════════════ */}
            {!pinOk && (
                <div className="w-full max-w-xs" style={{ animation: "fadeUp 0.4s ease both" }}>
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-3xl mx-auto mb-4">
                            🔐
                        </div>
                        <h1 className="text-xl font-black uppercase tracking-widest text-white mb-1">
                            Панель продавца
                        </h1>
                        <p className="text-white/30 text-sm">Введите PIN для входа</p>
                    </div>

                    <form onSubmit={handlePin} className="flex flex-col gap-3">
                        <input
                            type="password"
                            inputMode="numeric"
                            value={pin}
                            onChange={e => { setPin(e.target.value); setPinErr(false); }}
                            placeholder="• • • •"
                            autoFocus
                            className="bg-white/[0.04] border px-5 py-4 rounded-2xl text-white text-center text-2xl tracking-[0.5em] placeholder-white/15 focus:outline-none transition-all"
                            style={{
                                borderColor: pinErr ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)",
                                animation: pinErr ? "shake 0.3s ease" : "none",
                            }}
                        />
                        {pinErr && (
                            <p className="text-red-400 text-xs text-center font-bold tracking-wider">
                                Неверный PIN — попробуйте снова
                            </p>
                        )}
                        <button type="submit"
                            className="py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-widest uppercase rounded-2xl transition-all duration-300 active:scale-95"
                            style={{ boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}>
                            Войти
                        </button>
                    </form>
                </div>
            )}

            {/* ══════════════════════════════════
                VERIFY SCREEN
            ══════════════════════════════════ */}
            {pinOk && (
                <div className="w-full max-w-sm" style={{ animation: "fadeUp 0.35s ease both" }}>

                    {/* Header */}
                    <div className="flex items-center justify-between mb-7">
                        <div>
                            <p className="text-[10px] text-white/25 uppercase tracking-widest font-bold">Панель продавца</p>
                            <h1 className="text-lg font-black uppercase tracking-wide text-white">Проверка кода</h1>
                        </div>
                        <button onClick={() => { setPinOk(false); setPin(""); reset(); }}
                            className="text-[10px] text-white/25 hover:text-white/60 uppercase tracking-widest font-bold transition-colors">
                            Выход
                        </button>
                    </div>

                    {/* ── Input form ── */}
                    {!checked && (
                        <form onSubmit={handleVerify} className="flex flex-col gap-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={code}
                                    onChange={e => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, ""))}
                                    placeholder="ALASU-XXXXXX"
                                    autoFocus
                                    maxLength={12}
                                    className="w-full bg-white/[0.04] border border-white/10 px-5 py-5 rounded-2xl text-white text-center text-xl font-black tracking-[0.2em] placeholder-white/15 focus:outline-none focus:border-blue-500/50 transition-all"
                                />
                                {code && (
                                    <button type="button" onClick={() => setCode("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 text-xl transition-colors">
                                        ×
                                    </button>
                                )}
                            </div>

                            <button type="submit" disabled={loading || !code.trim()}
                                className="py-5 bg-blue-600 hover:bg-blue-500 disabled:opacity-30 text-white font-black text-base tracking-widest uppercase rounded-2xl transition-all duration-300 active:scale-95"
                                style={{ boxShadow: code.trim() ? "0 0 40px rgba(59,130,246,0.35)" : "none" }}>
                                {loading
                                    ? <span className="flex items-center justify-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "120ms" }} />
                                        <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "240ms" }} />
                                      </span>
                                    : "Проверить"}
                            </button>

                            <p className="text-center text-white/20 text-xs tracking-widest">
                                Введите код покупателя
                            </p>
                        </form>
                    )}

                    {/* ══════════════════════════
                        RESULT: VALID ✅
                    ══════════════════════════ */}
                    {checked && result?.valid && (
                        <div style={{ animation: "popIn 0.35s cubic-bezier(0.22,1,0.36,1) both" }}>

                            {/* Big prize card */}
                            <div className="rounded-[2rem] overflow-hidden mb-4"
                                style={{
                                    background: "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))",
                                    border: "1px solid rgba(34,197,94,0.3)",
                                    boxShadow: "0 0 60px rgba(34,197,94,0.12)",
                                }}>

                                {/* Top: game + code */}
                                <div className="px-6 pt-6 pb-4 border-b border-white/[0.06]">
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">
                                        {gameLabel(result)}
                                    </p>
                                    <p className="text-white font-black text-lg tracking-[0.18em]">
                                        {code.toUpperCase()}
                                    </p>
                                </div>

                                {/* Prize */}
                                <div className="px-6 py-6 text-center">
                                    <div className="text-6xl mb-3" style={{ animation: "popIn 0.4s 0.1s both" }}>
                                        {prizeIcon(result).repeat(result.bottles)}
                                    </div>
                                    <div className="text-3xl font-black text-white uppercase tracking-wide mb-1">
                                        {prizeName(result)}
                                    </div>
                                    <div className="text-green-400/70 text-xs font-bold uppercase tracking-widest">
                                        ✓ Код действителен
                                    </div>
                                </div>

                                {/* Meta info */}
                                <div className="mx-4 mb-4 rounded-xl bg-white/[0.04] divide-y divide-white/[0.05]">
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-white/30 text-xs uppercase tracking-wider">Результат</span>
                                        <span className="text-white/70 text-xs font-bold">{scoreLabel(result)}</span>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-white/30 text-xs uppercase tracking-wider">Выдан</span>
                                        <span className="text-white/50 text-xs font-bold">{fmt(result.createdAt)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action */}
                            <div className="bg-green-500/10 border border-green-400/25 rounded-2xl px-5 py-4 text-center mb-4">
                                <p className="text-green-300 font-black text-base">
                                    👉 Выдайте {prizeName(result)}
                                </p>
                            </div>

                            <button onClick={reset}
                                className="w-full py-4 border border-white/10 hover:border-white/25 text-white/40 hover:text-white text-sm font-black tracking-widest uppercase rounded-2xl transition-all duration-300">
                                Проверить другой код
                            </button>
                        </div>
                    )}

                    {/* ══════════════════════════
                        RESULT: NOT FOUND ❌
                    ══════════════════════════ */}
                    {checked && result && !result.valid && result.reason === "not_found" && (
                        <div className="rounded-[2rem] border border-red-400/25 bg-red-500/[0.07] p-7 text-center"
                            style={{ animation: "popIn 0.35s ease both" }}>
                            <div className="text-5xl mb-4">❌</div>
                            <h2 className="text-xl font-black uppercase text-white mb-2">
                                Код не найден
                            </h2>
                            <p className="text-white/35 text-sm leading-relaxed mb-6">
                                Такого кода не существует.<br />
                                Проверьте правильность ввода — все буквы латиница.
                            </p>
                            <p className="text-red-400/50 text-xs font-black tracking-wider mb-6">
                                {code.toUpperCase()}
                            </p>
                            <button onClick={reset}
                                className="w-full py-4 bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white/50 hover:text-white text-sm font-black tracking-widest uppercase rounded-2xl transition-all">
                                Попробовать снова
                            </button>
                        </div>
                    )}

                    {/* ══════════════════════════
                        RESULT: ALREADY USED ⚠️
                    ══════════════════════════ */}
                    {checked && result && !result.valid && result.reason === "used" && (
                        <div className="rounded-[2rem] border border-orange-400/25 bg-orange-500/[0.07] p-7 text-center"
                            style={{ animation: "popIn 0.35s ease both" }}>
                            <div className="text-5xl mb-4">🚫</div>
                            <h2 className="text-xl font-black uppercase text-white mb-2">
                                Уже использован
                            </h2>
                            <p className="text-white/35 text-sm leading-relaxed mb-3">
                                Этот код уже был активирован.<br />
                                Выдача невозможна.
                            </p>
                            {result.usedAt && (
                                <div className="inline-block bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-2 mb-6">
                                    <p className="text-white/25 text-[10px] uppercase tracking-widest mb-0.5">Использован</p>
                                    <p className="text-orange-400/70 text-sm font-bold">{fmt(result.usedAt)}</p>
                                </div>
                            )}
                            <button onClick={reset}
                                className="w-full py-4 bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white/50 hover:text-white text-sm font-black tracking-widest uppercase rounded-2xl transition-all">
                                Проверить другой код
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
