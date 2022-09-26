

function addData() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        let cstmrData = ''
        data.forEach(function(user) {
            cstmrData += `
            <tr>
            <td> ${user.name} </td>
            <td> ${user.username}</td>
            <td> ${user.email}</td>
            <td> ${user.address.city}</td>
            <td> ${user.phone}</td>
            <td> ${user.website}</td>
            <td> ${user.company.name}</td>
            </tr>
            `
        })
    document.getElementById('data').innerHTML = cstmrData
    })
}

document.getElementById('btn').addEventListener("click", addData)
