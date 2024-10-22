const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/', (_request, response) => {
  response.send({ hello: 'Atkooo ho oh oh ho ho' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
