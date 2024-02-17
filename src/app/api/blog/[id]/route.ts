import { supabase } from "@/util/supabaseClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }, res: NextApiResponse) {

    const { data, error } = await supabase.from("posts").select("*").eq("id", params.id).single();

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data);

}

export async function POST(req: Request, res: NextApiResponse) {
    const { id, title, content } = await req.json();

    const { data, error } = await supabase.from("posts").insert({ id, title, content });

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data);

}