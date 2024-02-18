import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type PostDetailProps = {
    post: Post;
}

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const PostDetail = ({ post }: PostDetailProps) => {
    return (
        <div className="post-detail" key={post.id}>
            <Link href={`${NEXT_PUBLIC_API_URL}/posts/${post.id}`} ><Image src={`https://source.unsplash.com/collection/1346951/1000×300?sig=${post.id}`} alt="" width={1200} height={675} /></Link>
            <Link href={`${NEXT_PUBLIC_API_URL}/posts/${post.id}`}><p>{post.title}</p></Link>
            <Link href={`${NEXT_PUBLIC_API_URL}/posts/${post.id}`}><p>{post.createdAt}</p></Link>
        </div>
    )
}

export default PostDetail
