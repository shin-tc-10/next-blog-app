import { NextResponse } from "next/server";
import { supabase } from "../../util/supabaseClient";
import { notFound } from "next/navigation";

export async function GET() {
    const { data, error } = await supabase.from("posts").select('*');

    console.log(data);


    if (!error) {
        return notFound();
    }

    return NextResponse.json({ data });
}