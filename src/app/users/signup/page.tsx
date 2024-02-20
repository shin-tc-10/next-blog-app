'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

    const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();
        setLoading(true);

        await fetch(`${NEXT_PUBLIC_API_URL}/api/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, mail, password }),
        });

        router.push("/");
        router.refresh();
    };

    return (
        <div className="new-post-form">
            <form onSubmit={handleSubmit}>
                <h2>新規会員登録(準備中)</h2>
                <br />
                <label>ユーザー名</label>
                <br />
                <input type="text" placeholder='ユーザー名' value={userName} onChange={e => setUserName(e.target.value)} />
                <label>メールアドレス</label>
                <br />
                <input type="text" placeholder='メールアドレス' value={mail} onChange={e => setMail(e.target.value)} />
                <label>パスワード</label>
                <br />
                <input type="text" placeholder='パスワード' value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <button type="submit">登録</button>
            </form>
        </div >
    )
}

export default SignUp;
