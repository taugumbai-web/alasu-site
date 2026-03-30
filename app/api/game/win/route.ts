import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateCode(): string {
    let rand = "";
    for (let i = 0; i < 6; i++) rand += CHARS[Math.floor(Math.random() * CHARS.length)];
    return `ALASU-${rand}`;
}

export async function POST(req: NextRequest) {
    try {
        const { time, bottles, product } = await req.json();

        if (
            typeof time !== "number" || time < 0 ||
            typeof bottles !== "number" || bottles < 1 || bottles > 2
        ) {
            return NextResponse.json({ error: "Invalid request" }, { status: 400 });
        }

        const code = generateCode();

        try {
            const { error } = await supabase.from("game_codes").insert({
                code,
                bottles,
                time: Math.floor(time),
                product: product === "lemonade" ? "lemonade" : "water",
                used: false,
                used_at: null,
            });
            if (error) console.error("Supabase insert error:", error.message);
        } catch (dbErr) {
            console.error("Supabase exception:", dbErr);
        }

        // Always return code regardless of DB result
        return NextResponse.json({ code });
    } catch (e) {
        console.error("Win route error:", e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
