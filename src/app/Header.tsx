import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <h1><Link href="/">Next Blog App</Link></h1>
            </div>
            <div>
                <button><Link href="posts/new/" as="/posts/new">新規投稿を追加</Link></button>
            </div>
        </header>
    )
}

export default Header
