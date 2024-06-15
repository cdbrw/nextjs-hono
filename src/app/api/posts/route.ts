interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  { id: 1, title: 'This is my first post', content: 'Just trying out the app' },
  { id: 2, title: 'Subscribe!', content: 'More content on the way ;)' },
  { id: 3, title: 'Like the video', content: 'Really helps the channel' },
  { id: 4, title: "Let me know what you'd like to see next", content: ':D' },
];

export async function GET() {
  return Response.json({ posts });
}
