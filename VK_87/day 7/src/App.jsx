import React, { useState } from "react";
import { useCreatePost, usePost, usePosts } from "./queries/postsQueries";
import { useQueryClient } from "@tanstack/react-query";
import { fetchPost } from "./api/postsApi";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const qc = useQueryClient();

  const posts = usePosts();
  const post = usePost(selectedId);
  const createPost = useCreatePost();

  async function prefetch(id) {
    // Prefetch = faster detail open (very common pattern)
    await qc.prefetchQuery({
      queryKey: ["posts", "detail", id],
      queryFn: () => fetchPost(id),
      staleTime: 60 * 1000,
    });
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <h2>React Query Demo (Server State + SWR patterns)</h2>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* LEFT: LIST */}
        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
          <h3>Posts (cached list)</h3>

          {posts.isLoading && <p>Loading list...</p>}
          {posts.isError && <p style={{ color: "red" }}>{String(posts.error.message)}</p>}

          <button
            onClick={() => posts.refetch()}
            disabled={posts.isFetching}
            style={{ marginBottom: 10 }}
          >
            {posts.isFetching ? "Refreshing..." : "Manual Refetch"}
          </button>

          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {posts.data?.map((p) => (
              <li key={p.id} style={{ marginBottom: 6 }}>
                <button
                  onMouseEnter={() => prefetch(p.id)}
                  onClick={() => setSelectedId(p.id)}
                >
                  #{p.id}
                </button>{" "}
                {p.title}
              </li>
            ))}
          </ul>

          <p style={{ marginTop: 10, fontSize: 12, opacity: 0.8 }}>
            Tip: Open Devtools → see cache, stale/fresh, refetching.
          </p>
        </div>

        {/* RIGHT: DETAIL + MUTATION */}
        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
          <h3>Post Detail (cached by id)</h3>

          {!selectedId && <p>Select a post from left.</p>}

          {selectedId && post.isLoading && <p>Loading detail...</p>}
          {selectedId && post.isError && <p style={{ color: "red" }}>{String(post.error.message)}</p>}

          {post.data && (
            <div>
              <h4>
                #{post.data.id}: {post.data.title}
              </h4>
              <p>{post.data.body}</p>
            </div>
          )}

          <hr />

          <h3>Create Post (mutation + invalidate)</h3>
          <button
            onClick={() =>
              createPost.mutate({
                title: "New Post from React Query",
                body: "This is a demo create mutation.",
                userId: 1,
              })
            }
            disabled={createPost.isPending}
          >
            {createPost.isPending ? "Creating..." : "Create Post"}
          </button>

          {createPost.isError && (
            <p style={{ color: "red" }}>{String(createPost.error.message)}</p>
          )}
          {createPost.isSuccess && (
            <p style={{ color: "green" }}>
              Created! List invalidated → refetches.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
