import GetPosts from "./api/getPosts";
import "./App.css";
import Search from "./components/search";

function App() {
  return (
    <>
      <div>
        <h1>Search</h1>
        <Search />
        <GetPosts />
      </div>
    </>
  );
}

export default App;
