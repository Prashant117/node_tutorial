const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.end("Hello, you are on HOMEPAGE");
})

app.get('/contact-us', (req, res) => {
    res.end("you can contact me at prashant@gmail.com");
})

app.get('/tweet', (req, res) => {
    res.end("Here are your tweets!");
})

app.post('/tweet', (req, res) => {
    res.status(201).end("Your tweets are updated!")
})

app.listen(port, () => console.log(`your server is running on PORT: ${port}`))
