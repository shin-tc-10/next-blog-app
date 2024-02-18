import PostList from "./components/PostList";

export default async function Home() {

  const NEXT_API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ブログ記事一覧をSSRで取得する
  const response = await fetch(`${NEXT_API_URL}/api/blog`, { cache: 'no-store' });
  const posts = await response.json();

  return (
    <div className="contents">
      <div className="new-post-list">
        <PostList posts={posts} />
      </div>
      <div className="side-bar">
        <div className="profile">
          <p>当ブログについて</p>
          <br />
          <p>当ブログは、Next.jsで作られています。どなたでも自由に投稿可能です。記事のサムネイル画像はランダムに表示されます。</p>
        </div>
      </div>
    </div>
  )
}