'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";

const CreateArticle = () => {
    const router = useRouter();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const NEXT_API_URL = process.env.NEXT_PUBLIC_API_URL;

    const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();
        setLoading(true);

        await fetch(`${NEXT_API_URL}/api/blog`, {
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>タイトル</label>
                <br />
                <input type="text" placeholder='タイトル' value={title} onChange={e => setTitle(e.target.value)} />
                <label>URL</label>
                <br />
                <input type="text" placeholder='URL' value={id} onChange={e => setId(e.target.value)} />
                <label>本文</label>
                <br />
                <textarea placeholder='本文' value={content} onChange={e => setContent(e.target.value)} />
                <br />
                <button type="submit">投稿</button>
            </form>
        </div >
    )
}

export default CreateArticle;
