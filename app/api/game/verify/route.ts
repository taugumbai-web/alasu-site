import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

const ADMIN_PIN = process.env.ADMIN_PIN ?? "123";

export async function POST(req: NextRequest) {
    try {
        const { code, pin } = await req.json();

        if (!pin || pin !== ADMIN_PIN) {
            return NextResponse.json({ error: "Неверный PIN" }, { status: 401 });
        }

        if (!code || typeof code !== "string") {
            return NextResponse.json({ error: "Введите код" }, { status: 400 });
        }

        const key = code.trim().toUpperCase();

        const { data: entry, error } = await supabase
            .from("game_codes")
            .select("*")
            .eq("code", key)
            .single();

        if (error || !entry) {
            return NextResponse.json({ valid: false, reason: "not_found" });
        }

        if (entry.used) {
            return NextResponse.json({ valid: false, reason: "used", usedAt: entry.used_at });
        }

        const { error: updateError } = await supabase
            .from("game_codes")
            .update({ used: true, used_at: new Date().toISOString() })
            .eq("code", key);

        if (updateError) {
            console.error("Supabase update error:", updateError.message);
            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }

        return NextResponse.json({
            valid: true,
            bottles: entry.bottles,
            time: entry.time,
            product: entry.product ?? "water",
            createdAt: entry.created_at,
        });
    } catch (e) {
        console.error("Verify route error:", e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
