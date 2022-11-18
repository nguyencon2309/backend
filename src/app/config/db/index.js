const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/dbblog');
        console.log("thanh cong")
    }
    catch(error){
        console.log("connect fail");
    }
     
}

module.exports = { connect };