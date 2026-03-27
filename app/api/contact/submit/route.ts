import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");

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

function ensureFile() {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify({ contacts: [] }));
}

function readData(): { contacts: ContactEntry[] } {
    ensureFile();
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

function writeData(data: { contacts: ContactEntry[] }) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function genId(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

export async function POST(req: NextRequest) {
    try {
        const { category, name, phone, message } = await req.json();

        if (!name?.trim() || !phone?.trim()) {
            return NextResponse.json({ error: "name and phone required" }, { status: 400 });
        }

        const validCategories: Category[] = ["distributor", "client", "order", "other"];
        const cat: Category = validCategories.includes(category) ? category : "other";

        const data = readData();
        const entry: ContactEntry = {
            id: genId(),
            createdAt: new Date().toISOString(),
            category: cat,
            name: String(name).trim().slice(0, 100),
            phone: String(phone).trim().slice(0, 30),
            message: String(message ?? "").trim().slice(0, 1000),
            status: "new",
        };

        data.contacts.unshift(entry); // newest first
        writeData(data);

        return NextResponse.json({ ok: true, id: entry.id });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
