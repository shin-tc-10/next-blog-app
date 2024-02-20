import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <h1><Link href="/">Next Blog App</Link></h1>
            </div>
            <div>
                <Link href="users/signup/" as="/users/signup"><button>新規会員登録</button></Link>
                <Link href="users/login/" as="/users/login"><button>ログイン</button></Link>
                <Link href="posts/new/" as="/posts/new"><button>新規投稿を追加</button></Link>

            </div>
        </header>
    )
}

export default Header
