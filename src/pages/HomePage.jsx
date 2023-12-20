import { useSelector } from "react-redux";
import PostsGrid from "../components/PostsGrid";
import { selectPosts } from "../redux/posts/postsSelectors";

function HomePage() {
  // Використати селектор для отримання постів
  const posts = useSelector(selectPosts);

  return <PostsGrid posts={posts} />;
}

export default HomePage;
