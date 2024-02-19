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
          <p>--当ブログについて--</p>
          <br />
          <span>・当ブログはNext.jsで作られています。<br />・どなたでも自由に投稿や編集が可能です。<br />・記事の画像はランダムに表示されます。</span>
        </div>
        <br />
        <br />
        <div className="profile">
          <p>--当ブログの機能--</p>
          <br />
          <span>・新規投稿 / 記事参照 / 記事編集 / 記事削除<br />・ログイン(実装予定) / 会員登録(実装予定)</span>
        </div>
      </div>
    </div>
  )
}