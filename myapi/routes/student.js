const express = require('express');
const router = express.Router();
const student = require('../models/student_models');

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    student.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult[0]);
        response.json(dbResult[0]);
      }
    });
  } else {
    student.get(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});


router.post('/', 
function(request, response) {
  student.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
        console.log(dbResult);
      response.json(dbResult.insertId);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  student.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  student.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;