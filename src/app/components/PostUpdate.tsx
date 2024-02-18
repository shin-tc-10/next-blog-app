import { Post } from '@/types';
import Link from 'next/link';
import React from 'react'

type PostUpdateProps = {
    id: string;
}


const PostUpdate = ({ id }: PostUpdateProps) => {

    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

    return (
        <div>
            <button><Link href={`${NEXT_PUBLIC_API_URL}/posts/edit/${id}`}>この記事を編集する</Link></button>
        </div>
    )
}

export default PostUpdate
