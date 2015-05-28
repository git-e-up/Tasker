var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('../models/Tasks');

/* GET users listing. */
// get /api/tasks
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function(error, tasks) {
    res.json(tasks);
  });
});

//GET /api/tasks/:id
//localhost:5000/api/tasks/032092-...
router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function(err, task){
    res.json(task);
  });
});

// POST /api/tasks
router.post('/', function(req, res, next){
  console.log(req.body);
  Task.create(req.body, function(err, task){
    res.json(task);
  });
});

//delete by id
router.delete('/:id', function(req, res, next){
  Task.findByIdAndRemove(req.params.id, req.body,
  function(err,task){
    res.send("ur task has been dleted lol");
  });
});

//update by id
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body,
  function(err,task){
    res.send("updated shizz");
  });
});

//update by id alternate
router.patch('/:id', function(req, res, next) {
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body,
  function(err,task){
    res.send("patch yo shizz");
  });
});

module.exports = router;
