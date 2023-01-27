/**
 * @param {Object} user
 * @param {Array} users
 * @returns {Array}
 */
export function deleteUser(user, users) {
    const userFound = users.find((item) => item.id === user.id);
    if (typeof userFound === 'undefined') {
        throw new Error('User not found');
    }
    return users.filter((item) => item.id !== user.id);
}

/**
 * @param {Object} data
 * @param {Array} users
 * @returns {Array}
 */
export function addUser(data, users) {
    const { name, email, company } = data;
    let newUsers = [...users];
    const id = newUsers.length > 0 ? newUsers[newUsers.length - 1].id + 1 : 1; //Dummy ID generation

    newUsers.push({
        id,
        name,
        email,
        company: {
            name: company,
        },
    });

    return newUsers;
}
