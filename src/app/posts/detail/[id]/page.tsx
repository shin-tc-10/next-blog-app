import React from 'react'
import Image from 'next/image';
import PostDeleteButton from '@/app/components/PostDeleteButton';
import Link from 'next/link';
import PostUpdate from '@/app/components/PostUpdate';

const page = async ({ params }: { params: { id: string } }) => {

    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/blog/${params.id}`, { next: { revalidate: 10 } });
    const postDetail = await response.json();

    return (
        <div className="post-detail-area">
            <h1>{postDetail.title}</h1>
            <p>公開日：{new Date(postDetail.createdAt).toLocaleDateString('ja-JP')}</p>
            <div className="post-image">
                <Image src={`https://source.unsplash.com/collection/1346951/1000×300?sig=${postDetail.id}`} alt="" width={1280} height={300} />
            </div>
            <div className="post-detail-content">{postDetail.content}</div>
            <div><PostUpdate id={postDetail.id} /></div>
            <div><PostDeleteButton id={postDetail.id} /></div>
        </div>
    )
}

export default page
