import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = process.env.NEXT_PROJECT_URL!;
const SUPABASE_API_KEY = process.env.NEXT_PROJECT_API_KEY!;

export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY, {
    auth: {
        persistSession: false,
    },
});