import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export type Category = "distributor" | "client" | "order" | "other";
export type ContactStatus = "new" | "read" | "done";

export type ContactEntry = {
    id: string;
    createdAt: string;
    category: Category;
    name: string;
    phone: string;
    message: string;
    status: ContactStatus;
};

export async function POST(req: NextRequest) {
    try {
        const { category, name, phone, message } = await req.json();

        if (!name?.trim() || !phone?.trim()) {
            return NextResponse.json({ error: "name and phone required" }, { status: 400 });
        }

        const validCategories: Category[] = ["distributor", "client", "order", "other"];
        const cat: Category = validCategories.includes(category) ? category : "other";

        const { data, error } = await supabase
            .from("contacts")
            .insert({
                category: cat,
                name: String(name).trim().slice(0, 100),
                phone: String(phone).trim().slice(0, 30),
                message: String(message ?? "").trim().slice(0, 1000),
                status: "new",
            })
            .select("id")
            .single();

        if (error || !data) {
            console.error("Supabase insert error:", error?.message);
            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }

        return NextResponse.json({ ok: true, id: data.id });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
