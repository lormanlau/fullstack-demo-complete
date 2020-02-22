const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const test = {
    results: "success"
}
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));


app.get('/', (request, response) => {
    response.send("Hello World")
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/sampleget', (req, res) => {

    res.send(test)
    // res.status(400).send("Error")
})

app.post('/samplepost', (req, res) => {
    console.log(req.body)
    res.send(test)
})

app.get('/search/:pokemon', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + req.params.pokemon)
    .then(response => {
        console.log(response.data)
        res.send({data: response.data})
    })
    // res.send(test)
})

app.post('/search', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + req.body.value)
    .then(response => {
        console.log(response.data)
        res.send({data: response.data})
    })
})

app.listen(5000, () => {console.log("server running on port 5000")})