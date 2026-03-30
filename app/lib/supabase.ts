import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

if (!url || !key) {
    console.error("❌ SUPABASE_URL or SUPABASE_SERVICE_KEY is not set");
}

export const supabase = createClient(
    url ?? "https://placeholder.supabase.co",
    key ?? "placeholder-key"
);
