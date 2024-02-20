import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {

    const { data } = await supabase.from("Post").select("*");

    return NextResponse.json(data);

}

export async function POST(req: Request, res: NextApiResponse) {
    const { id, title, content } = await req.json();

    await supabase.from("Post").insert([{ id, title, content, createdAt: new Date().toISOString() }]);

}

export async function PUT(req: Request, res: NextApiResponse) {

    const { id, title, content } = await req.json();

    const { error } = await supabase
        .from('Post')
        .update({ id: id, title: title, content: content, createdAt: new Date().toISOString() })
        .eq('id', id)

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json({ status: 201 });

}
