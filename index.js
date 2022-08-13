// importing express
const express = require('express');

// initializing express
const app = express();

const port = 5000;

const userRouter = require('./routers/userRouter');

app.use(express.json());

// middleware
app.use( '/user', userRouter );

// creating a route or endpoint
app.get( '/', (req, res) => {
    res.send('Request accepted on /');
})

app.get('/home', (req, res) => {
    res.send('request at home');
})

// starting the server
app.listen(port, () => {
    console.log('express API started');
})