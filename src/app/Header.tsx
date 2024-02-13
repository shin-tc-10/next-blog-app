import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <h1><Link href="/">Next Blog App</Link></h1>
            </div>
            <div>
                <button><Link href="posts/new">記事を書く</Link></button>
            </div>
        </header>
    )
}

export default Header
