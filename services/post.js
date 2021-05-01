const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    number: {
      type:Number  
    },
    email: {
        type:String
    },
    username: {
        type:String
    }
});


module.exports = mongoose.model('Posts', PostSchema);
