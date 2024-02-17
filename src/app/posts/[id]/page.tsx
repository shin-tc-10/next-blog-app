import React from 'react'
import Image from 'next/image';
import PostDeleteButton from '@/app/components/PostDeleteButton';

const page = async ({ params }: { params: { id: string } }) => {

    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/blog/${params.id}`, { next: { revalidate: 10 } });

    console.log("個別ページのresponse" + response);

    // try {
    const postDetail = await response.json();
    console.log("個別ページのresponse", postDetail);

    return (
        <div>
            <Image src={`https://source.unsplash.com/collection/1346951/1000×300?sig=${postDetail.id}`} alt="" width={1280} height={300} />
            <h1>{postDetail.title}</h1>
            <div>{postDetail.content}</div>
            <div><PostDeleteButton id={postDetail.id} /></div>
        </div>
    )
    // } catch (error) {
    //     console.error("JSON パースエラー", error);
    // }
}

export default page
