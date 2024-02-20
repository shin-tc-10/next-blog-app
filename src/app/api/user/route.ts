import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// const bcrypt = require("bcrypt");

export async function POST(req: Request, res: NextApiResponse) {
    const { userName, mail, password } = await req.json();

    // const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("User").insert([{ userName: userName, mail: mail, password: password }]);

    // if (error) {
    //     return NextResponse.json(error);
    // }

    // return NextResponse.json({ status: 201 });

}
