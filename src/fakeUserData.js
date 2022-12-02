import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';

const User = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 100000 }).forEach(() => {
  User.push(createRandomUser());
});

export default User;
