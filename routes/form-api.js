const express = require('express');
const router = express.Router();
const status = require('http-status');

const Form = require('../models/form')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* GET a form by its ID. */
router.get('/form/:formId', (req, res) => {
  var formId = req.params.formId;

  Form.findById(formId, function(err, form) {
    if (err) return res.status(status.BAD_REQUEST).json(err);
    // We serve as json the form founded
    res.status(status.OK).json(form);
  });
});

/* POST: save a new form */
router.post('/form', (req, res) => {
  var data = req.body;
  // create a new form
  var newForm = Form({
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    company: data.company
  });

  // save the form
  newForm.save(function(err, form) {
    if (err) return res.status(status.BAD_REQUEST).json(err);
    //get form id of new form from callback
    res.status(status.OK).json({ message: 'Form saved', formId: form._id });
  });
});

/* PUT: update a new form */
router.put('/form', (req, res) => {
  var data = req.body;
  var id = data._id;

  // Properties to update on an exiting form
  var formToUpdate = {
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    company: data.company
  };

  // find the form with id :id
  Form.findByIdAndUpdate(id, formToUpdate, function(err, form) {
    if (err) return res.status(status.BAD_REQUEST).json(err);

    // The form has been updated
    res.status(status.OK).json(formToUpdate);
  });
});

/* GET all saved forms */
router.get('/forms', (req, res) => {
  Form.find({}, function(err, forms) {
    if (err) return res.status(status.BAD_REQUEST).json(err);

    // object of all the forms
    res.status(status.OK).json(forms);
  });
});

/* DELETE: delete a form by id */
router.delete('/form/:formId', (req, res) => {
  var formId = req.params.formId;

  // find the form by id and remove it
  Form.findByIdAndRemove(formId, function(err) {
    if (err) return res.status(status.BAD_REQUEST).json(err);

    // The form has been deleted
    res.status(status.OK).json({message: 'Deleted Form'});
  });
});

module.exports = router;