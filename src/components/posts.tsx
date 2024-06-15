export async function Posts() {
  const data = await fetch('http://localhost:3000/api/posts');
  const { posts } = await data.json();

  return (
    <div className="m-2">
      <h1 className="text-2xl mb-2">My Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="ml-4">
            - {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
