const mongoose = require('mongoose');
async function connect() {
    try{
        mongoose.connect('mongodb+srv://Mayki:W1a5KgWQHX1gxeV3@wtm.ye85e7v.mongodb.net/?retryWrites=true&w=majority')
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