const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');


    // retrieve contact data
    router.get('/contacts', (req, res, next) => {
        // res.send('Showing data from contact lists');
        Contact.find(function (err, contacts){
            res.json(contacts);
        });
    });

    // add contact data
    router.post('/contacts', (req, res, next) => {
        const newContact = new Contact({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone
        });

        newContact.save((err, contact) => {
            if (err) {
                res.json({msg: 'Falied to add Contact'});
            } else {
                res.json({msg: 'Contact added'});
            }
        });
    });

    // delete contact data
    router.delete('/contacts/:id', (req, res, next) => {
        // function here
        Contact.remove({_id: req.params.id}, function(err, result){
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    });

module.exports = router;
