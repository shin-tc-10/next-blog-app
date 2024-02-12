'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";

const CreateArticle = () => {
    const router = useRouter();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();
        setLoading(true);

        const newArticle = await fetch(`${API_URL}/api`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, title, content }),
        });

        router.push("/");
        router.refresh();
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label>タイトル</label>
                <br />
                <input type="text" placeholder='タイトル' />
                <label>URL</label>
                <br />
                <input type="text" placeholder='URL' />
                <label>本文</label>
                <br />
                <textarea placeholder='本文' />
                <br />
                <button type="submit">投稿</button>
            </form>
        </main >
    )
}

export default CreateArticle;
