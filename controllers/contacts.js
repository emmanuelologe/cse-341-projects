const mongodb = require('../data/database.js');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'applcation/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const contactsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_Id: contactsId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'applcation/json');
        res.status(200).json(contacts[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};