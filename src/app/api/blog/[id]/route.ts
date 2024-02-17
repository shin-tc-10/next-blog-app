import { supabase } from "@/util/supabaseClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }, res: NextApiResponse) {

    const { data, error } = await supabase.from("posts").select("*").eq("id", params.id).single();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    // ここでdataの内容を確認
    console.log('Dataの中身はこちら:', data);

    return NextResponse.json(data);

}

export async function POST(req: Request, res: NextApiResponse) {
    const { id, title, content } = await req.json();

    await supabase.from("posts").insert({ id, title, content });

    // if (error) {
    //     return NextResponse.json(error);
    // }
    // // ここでdataの内容を確認
    // console.log('Dataの中身はこちら:', data);
    // console.log('Dataの中身はこちら:', error);


    // return NextResponse.json(data);

}

export async function DELETE(req: Request, { params }: { params: { id: string } }, res: NextApiResponse) {

    await supabase.from("posts").delete().eq("id", params.id).single();

    // if (error) {
    //     return NextResponse.json(error);
    // }

    // // ここでdataの内容を確認
    // console.log('Dataの中身はこちら:', data);

    // return NextResponse.json(data);

}
