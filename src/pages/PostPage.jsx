import { useParams } from "react-router-dom";
import { Stack, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PostsHorizontalList from "../components/PostsHorizontalList";
import { useSelector } from "react-redux";
import { selectPosts } from "../redux/posts/postsSelectors";

function PostPage() {
  // Використати селектор для отримання постів
  const allPosts = useSelector(selectPosts);

  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(allPosts.find((post) => post.id === Number(postId)));
  }, [allPosts, postId]);

  return (
    <>
      {post && (
        <Stack>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt={post.title}
            borderRadius="lg"
            maxHeight="300px"
            objectFit="cover"
            objectPosition="center"
          />
          <Heading>{post.title}</Heading>
          <Text>{post.text}</Text>
          <PostsHorizontalList posts={allPosts} />
        </Stack>
      )}
    </>
  );
}

export default PostPage;
