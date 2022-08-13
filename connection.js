// importing mongoose pacakge 
const mongoose = require('mongoose');
const dbname = 'mytestdb24';
const url = `mongodb+srv://shitigopal:Loveshiti77@cluster0.mplv5.mongodb.net/${dbname}?retryWrites=true&w=majority`


// async function- returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;

//synchronous - one by one 
//asynchronous - simultaneous 