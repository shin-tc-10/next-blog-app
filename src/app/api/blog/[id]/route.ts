import { supabase } from "@/util/supabaseClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
    const { id, title, content } = await req.json();

    const { data, error } = await supabase.from("posts").insert([{ id, title, content, createdAt: new Date().toISOString() }]);

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data), { status: 201 };

}
