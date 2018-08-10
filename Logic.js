const mongoose = require('mongoose');
const assert = require('assert');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/contact-manager');

function toLower(v) {
    return v.toLowerCase();
}

const contactSchema = mongoose.Schema({
    fistname: {type: String, set: toLower},
    lastname: {type: String, set: toLower},
    phone: {type: String, set: toLower},
    email: {type: String, set: toLower}
});

const Contact = mongoose.model('Contact', contactSchema);

const addContact = (contact) => {
    Contact.create(contact, (err) => {
        asser.equal(null, err);
        console.info('New Contact added');
        db.disconnect();
    })
};

const getContact = (name) => {
    const search = new RegExp(name, 'i');
    Contact.find({$or: [{firstname: search}, {lastname: search}]})
        .exec((err, contact) => {
            assert.equal(null, err);
            console.info(contact);
            console.info(`${contact.length} matches`)
            db.disconnect();
        })
};

module.exports = { addContact, getContact };