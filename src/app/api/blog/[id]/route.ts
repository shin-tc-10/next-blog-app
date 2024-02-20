import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }, res: NextApiResponse) {

    const { data } = await supabase.from("Post").select("*").eq("id", params.id).single();

    return NextResponse.json(data);

}

export async function DELETE(req: Request, res: NextApiResponse) {
    const { id } = await req.json();

    await supabase.from("Post").delete().eq("id", id);


}