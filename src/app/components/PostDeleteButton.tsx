'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

type PostDeleteButtonProps = {
    id: string;
}

const PostDeleteButton = ({ id }: PostDeleteButtonProps) => {

    const router = useRouter();

    const handleDelete = async () => {

        const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

        await fetch(`${NEXT_PUBLIC_API_URL}/api/blog/${id}`, {
            method: "DELETE",
            body: JSON.stringify({ id }),
        });

        router.push("/");
        router.refresh();

    }

    return (
        <div>
            <button onClick={handleDelete}>この記事を削除する</button>
        </div>
    )
}

export default PostDeleteButton
