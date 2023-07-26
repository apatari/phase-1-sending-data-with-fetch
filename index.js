// Add your code here

function submitData(userName, userEmail) {
    const user = {
        name: userName,
        email: userEmail
    }
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => addToBody(data.id))
    .catch(error => {
        document.querySelector('body').append(error.message)
    })
}

const addToBody = (id) => {
    document.querySelector('body').append(id)
}