import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

const ADMIN_PIN = process.env.ADMIN_PIN ?? "123";

export async function POST(req: NextRequest) {
    try {
        const { pin } = await req.json();
        if (pin !== ADMIN_PIN) {
            return NextResponse.json({ error: "Неверный PIN" }, { status: 401 });
        }

        const { data, error } = await supabase
            .from("contacts")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Supabase select error:", error.message);
            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }

        // Normalize snake_case to camelCase for frontend compatibility
        const contacts = (data ?? []).map((c) => ({
            id: c.id,
            createdAt: c.created_at,
            category: c.category,
            name: c.name,
            phone: c.phone,
            message: c.message,
            status: c.status,
        }));

        return NextResponse.json({ contacts });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
