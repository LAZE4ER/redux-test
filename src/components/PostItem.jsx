import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostItem({ id, title, text }) {
  return (
    <Card
      maxW={{
        base: '100%',
        md: '300px',
      }}
      flexShrink={0}
    >
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt={title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading
            size="md"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {title}
          </Heading>
          <Text>{text.slice(0, 120)}...</Text>
        </Stack>
      </CardBody>
      <CardFooter pt={0}>
        <ButtonGroup spacing="2" size="sm">
          <Button
            variant="solid"
            colorScheme="blue"
            as={Link}
            to={`/posts/${id}`}
          >
            Read
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PostItem;
