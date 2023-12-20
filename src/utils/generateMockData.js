import { faker } from '@faker-js/faker';

export function generatePosts(count) {
  return new Array(count).fill(null).map((_, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    text: faker.lorem.paragraphs({
      min: 30,
      max: 50,
    }),
    createdAt: faker.date.recent(),
  }));
}
