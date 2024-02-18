import PostList from "./components/PostList";

export default async function Home() {

  const NEXT_API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ブログ記事一覧をSSRで取得する
  const response = await fetch(`${NEXT_API_URL}/api/blog`, { cache: 'no-store' });
  const posts = await response.json();

  return (
    <main>
      <div className="contents">
        <div className="new-post-list">
          {/* <p>新着記事一覧</p> */}
          <PostList posts={posts} />
        </div>
        <div className="side-bar">
          <div className="profile">
            <p>運営者情報</p>
            <p>運営者情報です。運営者情報です。運営者情報です。運営者情報です。運営者情報です。運営者情報です。運営者情報です。運営者情報です。</p>
          </div>
        </div>
      </div>
    </main>
  )
}