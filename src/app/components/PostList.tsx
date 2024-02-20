import { Post } from '@/types'
import React from 'react'
import PostDetail from './PostDetail';

type PostListProps = {
    posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
    return (
        <div className="new-post">
            {/* {posts.reverse().map((post) => (
                <PostDetail key={post.id} post={post} />
            ))} */}
        </div>
    )
}

export default PostList
