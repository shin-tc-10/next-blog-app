import { Post } from '@/types';
import React from 'react'

type PostDetailProps = {
    post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
    return (
        <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.createdAt}</p>
        </div>
    )
}

export default PostDetail
