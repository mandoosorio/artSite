const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://MunmiaB:Cheese@artworks.ajnml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;