import { addUser, deleteUser } from './../utils/helpers';

const emptyUsers = [];
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'ottomen2712@gmail.com',
        company: 'SoftServe',
    },
    {
        id: 2,
        name: 'Jean Smith',
        email: 'test@gmail.com',
        company: 'Test',
    },
];
const user = {
    name: 'Jean Smith',
    email: 'test@gmail.com',
    company: 'Test',
};
describe('Add new user', () => {
    test('to the empty list returns an array with single user', () => {
        expect(addUser(user, emptyUsers).length).toBe(1);
    });
    test('to the empty list returns an array with 3 users', () => {
        expect(addUser(user, users).length).toBe(3);
    });
});
describe('Delete user', () => {
    test('from the empty array throws Error', () => {
        expect(() => {
            deleteUser(user, emptyUsers);
        }).toThrow('User not found');
    });
    test('non existing user throws Error', () => {
        expect(() => {
            deleteUser(user, users);
        }).toThrow('User not found');
    });
});
