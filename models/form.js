// Schema for form fields

const mongoose = require('mongoose')

const formSchema = mongoose.Schema({
	firstName: String,
	lastName:  String,
	address:   String,
	company:   String,
	salary:    Number
});

// compile model from schema
const form = mongoose.model('Form', formSchema);

module.exports = form;