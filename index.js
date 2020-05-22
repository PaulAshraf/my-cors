const express = require('express');
const axios = require('axios')
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my CORS bypasser</h1></br>'+
    '<h2>Send <code>GET</code> requests at <code>/:link</code> to bypass CORS</h2>')
})

app.get('/:link', (req, res) => {
    const link = req.params.link
    console.log(link)
    axios.get(link).then((body) => {
        console.log('ok')
        res.send(body.data)
    }).catch((error) => {
        console.log('error')
        res.send(error)
    })
})

const port = 8080;
const server = app.listen(process.env.PORT || port, function () {
   console.log("listening on port " + port)
})
