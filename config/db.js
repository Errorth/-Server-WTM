const mongoose = require('mongoose');
async function connect() {
    try{
        mongoose.connect('')
            .then(()=>{
                console.log("SUCCESFULLY CONNECT TO DATABASE")
            })
    }catch (e) {
        console.log("Error with connect", e)
    }
}

module.exports = {
    connect,
}