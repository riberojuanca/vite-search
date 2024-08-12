import { useFetch } from "../useFetch";

function GetPosts() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default GetPosts;
