const express = require('express');

const app = express();


app.get('/', (request, response) => {
    return response.json({message: 'Testando com objeto'});
})
app.listen(5050);