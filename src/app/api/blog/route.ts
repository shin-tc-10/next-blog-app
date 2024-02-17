import { NextResponse } from "next/server";
import { notFound } from "next/navigation";
import { NextApiResponse } from "next";
import { supabase } from "@/util/supabaseClient";

export async function GET(request: Request, response: NextApiResponse) {
    const { data, error } = await supabase.from("posts").select("*");

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data);
}