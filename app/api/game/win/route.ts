import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateCode(): string {
    let rand = "";
    for (let i = 0; i < 6; i++) {
        rand += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    return `ALASU-${rand}`;
}

export async function POST(req: NextRequest) {
    try {
        const { time, bottles, product } = await req.json();

        const code = generateCode();

        const { data, error } = await supabase
            .from("game_codes")
            .insert({
                code,
                bottles,
                time: Math.floor(time),
                product: product === "lemonade" ? "lemonade" : "water",
                used: false,
                used_at: null,
            })
            .select();

        if (error) {
            console.error("❌ SUPABASE ERROR FULL:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ code, data });

    } catch (e: any) {
        console.error("❌ SERVER ERROR FULL:", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}