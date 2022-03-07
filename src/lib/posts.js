import { auth } from '../lib/auth.js';

export async function getAllPosts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
  );
  const { posts } = await response.json();
  return posts;
}

export async function createPost(data) {
  const user = auth.currentUser();
  const accessToken = user.token.access_token;
  await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
