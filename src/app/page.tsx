import PostList from "./components/PostList";

export default async function Home() {

  const NEXT_API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ブログ記事一覧をSSRで取得する
  const response = await fetch(`${NEXT_API_URL}/api/blog`, { cache: 'no-store' });

  try {
    const posts = await response.json();
    console.log("トップページのposts", posts);

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
  } catch (error) {
    console.error("JSON パースエラー", error);
  }
}