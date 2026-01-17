import useFetch from "../hooks/useFetch";

const FetchDemo = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>useFetch Demo</h3>
      <ul>
        {data.slice(0, 5).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDemo;
