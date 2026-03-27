import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "codes.json");
const ADMIN_PIN = process.env.ADMIN_PIN ?? "123";

type CodeEntry = {
    createdAt: string;
    bottles: number;
    time: number;
    product?: "water" | "lemonade";
    used: boolean;
    usedAt: string | null;
};

function readData(): { codes: Record<string, CodeEntry> } {
    if (!fs.existsSync(DATA_FILE)) return { codes: {} };
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

function writeData(data: { codes: Record<string, CodeEntry> }) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function POST(req: NextRequest) {
    try {
        const { code, pin } = await req.json();

        if (!pin || pin !== ADMIN_PIN) {
            return NextResponse.json({ error: "Неверный PIN" }, { status: 401 });
        }

        if (!code || typeof code !== "string") {
            return NextResponse.json({ error: "Введите код" }, { status: 400 });
        }

        const data = readData();
        const key = code.trim().toUpperCase();
        const entry = data.codes[key];

        if (!entry) {
            return NextResponse.json({ valid: false, reason: "not_found" });
        }

        if (entry.used) {
            return NextResponse.json({
                valid: false,
                reason: "used",
                usedAt: entry.usedAt,
            });
        }

        // Mark as used
        entry.used = true;
        entry.usedAt = new Date().toISOString();
        writeData(data);

        return NextResponse.json({
            valid: true,
            bottles: entry.bottles,
            time: entry.time,
            product: entry.product ?? "water",
            createdAt: entry.createdAt,
        });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
