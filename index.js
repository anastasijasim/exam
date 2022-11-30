fetch('https://testapi.io/api/AnastasijaSim/resource/Test',
   {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    Name: 'Nastja',
    LastName: 'Sim',
    email: 'a.sim@mail.com'
    })
    }
)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
    })