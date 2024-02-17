import React from 'react'
import Image from 'next/image';


const page = async ({ params }: { params: { id: string } }) => {

    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/blog/${params.id}`, { next: { revalidate: 10 } });

    const postDetail = await res.json();

    return (
        <div>
            <Image src={`https://source.unsplash.com/collection/1346951/1000×300?sig=${postDetail.id}`} alt="" width={1280} height={300} />
            <p>{postDetail.title}</p>
            <p>{postDetail.content}</p>
            <p>{postDetail.createdAt}</p>
        </div>
    )
}

export default page
