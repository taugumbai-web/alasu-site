import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

const ADMIN_PIN = process.env.ADMIN_PIN ?? "123";

export async function POST(req: NextRequest) {
    try {
        const { pin, id, status } = await req.json();
        if (pin !== ADMIN_PIN) {
            return NextResponse.json({ error: "Неверный PIN" }, { status: 401 });
        }

        if (!["new", "read", "done"].includes(status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }

        const { error } = await supabase
            .from("contacts")
            .update({ status })
            .eq("id", id);

        if (error) {
            console.error("Supabase update error:", error.message);
            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
