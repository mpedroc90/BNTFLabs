var express = require("express");
var router = express.Router();
var userRepository =  require("../models/repository");

/* Get All users */
router.get("/", function(req, res, next) {
  res.render("index", {
    users: userRepository.getUsers(),
  });
});

/** Update  user **/
router.post("/:id", function(req, res, next) {

  var user= userRepository.partialUpdate(req.params.id, req.body)
  if(user == null  )
    res.status(404).send();
  else 
    res.json(user);
});

/** Get User By Id **/
router.get("/:id", function(req, res, next) {
  res.json(userRepository.findById(req.params.id));
});

/** Delete user **/
router.delete("/:id", function(req, res, next) {
  userRepository.delete(req.params.id);
  res.status(200).send();
});

module.exports = router;