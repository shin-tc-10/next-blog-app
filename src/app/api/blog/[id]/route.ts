import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }, res: NextApiResponse) {

    const { data, error } = await supabase.from("posts").select("*").eq("id", params.id).single();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    if (!data) {
        notFound();
    }

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data);

}

export async function DELETE(req: Request, res: NextApiResponse) {
    const { id } = await req.json();

    const { data, error } = await supabase.from("posts").delete().eq("id", id);

    if (error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data), { status: 201 };

}