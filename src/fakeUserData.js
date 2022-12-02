import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';

const User = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    address: faker.address.city(),
    phone: faker.phone.number(),
    age: faker.datatype.number({ min: 18, max: 100 }),
    occupation: faker.company.name(),
    vehicle: faker.vehicle.vehicle(),
  };
}

Array.from({ length: 100 }).forEach(() => {
  User.push(createRandomUser());
});

export default User;
