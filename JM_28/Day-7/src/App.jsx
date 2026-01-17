import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from './api/postsApi'

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) return <h3>Loading...</h3>
  if (error) return <h3>Error loading data</h3>

  return (
    <>
      <h2>React Query Demo (Server State)</h2>

      {data.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

export default App
