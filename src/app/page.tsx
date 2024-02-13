import PostList from "./components/PostList";

export default async function Home() {

  const NEXT_API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ブログ記事一覧をSSRで取得する
  const response = await fetch(`${NEXT_API_URL}/api/blog`, { cache: 'no-store' });
  const posts = await response.json();

  return (
    <main>
      <div>
        <p>新着記事一覧</p>
        <PostList posts={posts} />
      </div>
      <div>
        <p>運営者情報</p>
      </div>
    </main>
  )
}