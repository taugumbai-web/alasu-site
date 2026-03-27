import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "codes.json");

function ensureFile() {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify({ codes: {} }));
}

function readData(): { codes: Record<string, CodeEntry> } {
    ensureFile();
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

function writeData(data: { codes: Record<string, CodeEntry> }) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

type CodeEntry = {
    createdAt: string;
    bottles: number;
    time: number;
    product: "water" | "lemonade";
    used: boolean;
    usedAt: string | null;
};

// Characters without ambiguous lookalikes (no 0/O, 1/I/l)
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateCode(existing: Record<string, CodeEntry>): string {
    let code: string;
    do {
        let rand = "";
        for (let i = 0; i < 6; i++) rand += CHARS[Math.floor(Math.random() * CHARS.length)];
        code = `ALASU-${rand}`;
    } while (existing[code]);
    return code;
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

        const data = readData();
        const code = generateCode(data.codes);

        data.codes[code] = {
            createdAt: new Date().toISOString(),
            bottles,
            time: Math.floor(time),
            product: product === "lemonade" ? "lemonade" : "water",
            used: false,
            usedAt: null,
        };

        writeData(data);

        return NextResponse.json({ code });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
