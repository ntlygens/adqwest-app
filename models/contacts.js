const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        label: "First",
        required: true,
        max: 45
    },
    last_name: {
        type: String,
        label: "Last",
        required: true,
        max: 65
    },
    phone: {
        type: String,
        label: "Phone",
        required: false,
        regEx: "/^\d{10}$/",
        max: 10
    }
});


const Contact = module.exports = mongoose.model('Contact', ContactSchema);
//const mongoose = require('mongoose');
