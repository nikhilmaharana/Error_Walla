import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, fetchPost, fetchPosts } from "../api/postsApi";

export const postsKeys = {
  all: ["posts"],
  list: () => ["posts", "list"],
  detail: (id) => ["posts", "detail", id],
};

export function usePosts() {
  return useQuery({
    queryKey: postsKeys.list(),
    queryFn: fetchPosts,
    // SWR-style caching behavior:
    staleTime: 60 * 1000,     // fresh for 1 minute
    gcTime: 10 * 60 * 1000,   // keep in cache for 10 minutes (v5 uses gcTime)
  });
}

export function usePost(id) {
  return useQuery({
    queryKey: postsKeys.detail(id),
    queryFn: () => fetchPost(id),
    enabled: !!id, // don’t run until id exists
  });
}

export function useCreatePost() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // invalidation = refetch list -> keeps UI synced
      qc.invalidateQueries({ queryKey: postsKeys.list() });
    },
  });
}
