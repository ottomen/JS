export function deleteRow(cell, users) {
    return users.filter((item) => item.id !== cell.id)
}

export function appendRow(data, users) {
    const { name, email, company } = data
    let newUsers = [...users]
    const id = newUsers.length > 0 ? newUsers[newUsers.length - 1].id + 1 : 1 //Dummy ID generation

    newUsers.push({
        id,
        name,
        email,
        company: {
            name: company,
        },
    })

    return newUsers
}
