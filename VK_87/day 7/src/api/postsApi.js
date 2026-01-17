const BASE = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  const res = await fetch(`${BASE}/posts?_limit=10`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function fetchPost(id) {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export async function createPost(newPost) {
  const res = await fetch(`${BASE}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
}
