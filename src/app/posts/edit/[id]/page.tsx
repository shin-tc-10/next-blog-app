'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";


const UpdatePost = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {

        const fetchFunction = async () => {
            const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/blog/${params.id}`, { next: { revalidate: 10 } });
            const postDetail = await response.json();

            setId(postDetail.id);
            setTitle(postDetail.title);
            setContent(postDetail.content);
        };

        fetchFunction();

    }, [])

    const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();
        setLoading(true);

        await fetch(`${NEXT_PUBLIC_API_URL}/api/blog`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, title, content }),
        });

        router.push("/");
        router.refresh();
    };

    return (
        <div className="new-post-form">
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
                <button type="submit">更新</button>
            </form>
        </div >
    )
}

export default UpdatePost;
