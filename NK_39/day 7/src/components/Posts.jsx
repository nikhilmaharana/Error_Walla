import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/postsApi";

const Posts = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // cache valid for 5 seconds
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>React Query Server State Demo</h3>

      <button onClick={refetch}>Refetch</button>
      {isFetching && <p>Updating data...</p>}

      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
