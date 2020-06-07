// import the author model
// i.e. provide the controller a link to the author model
var visa = require("../models/test");

// function to handle a request to get all authors
const getAllVisa = (req, res) => {
    res.send(visa); // return the list of authors
};

// function to handle a request to a particular author
const getAuthorByID = (req, res) => {
    // search for author in the database via ID
    const author = visa.find(author => author.id === req.params.id);

    if (visa) {
        // send back the author details
        res.send(visa);
    } else {
        // you can decide what to return if author is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// remember to export the functions
module.exports = {
    getAllVisa,
    getAuthorByID,
};
