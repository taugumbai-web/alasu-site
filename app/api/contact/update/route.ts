import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");
const ADMIN_PIN = process.env.ADMIN_PIN ?? "123";

export async function POST(req: NextRequest) {
    try {
        const { pin, id, status } = await req.json();
        if (pin !== ADMIN_PIN) {
            return NextResponse.json({ error: "Неверный PIN" }, { status: 401 });
        }
        if (!fs.existsSync(DATA_FILE)) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }
        const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
        const entry = data.contacts?.find((c: { id: string }) => c.id === id);
        if (!entry) return NextResponse.json({ error: "Not found" }, { status: 404 });
        entry.status = status;
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
