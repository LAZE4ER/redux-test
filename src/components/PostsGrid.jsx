import PropTypes from 'prop-types';
import { SimpleGrid } from '@chakra-ui/react';
import PostItem from './PostItem';

function PostsGrid({ posts }) {
  return (
    <SimpleGrid minChildWidth="300px" gap="16px">
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </SimpleGrid>
  );
}

PostsGrid.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsGrid;
