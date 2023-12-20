import PropTypes from 'prop-types';
import { Stack } from '@chakra-ui/react';
import PostItem from './PostItem';

function PostsHorizontalList({ posts }) {
  return (
    <Stack direction="row" overflow="auto">
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </Stack>
  );
}

PostsHorizontalList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsHorizontalList;
