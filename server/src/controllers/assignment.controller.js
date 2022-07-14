const express = require('express');

const Assignment = require('../model/assignment.model');

const crudController = require('./crud.controller');

const router = express.Router();

//Assignment


router.post ("", crudController.post(Assignment))
router.get("", crudController.get(Assignment))
router.get("/:id", crudController.getOne(Assignment))
router.patch("/:id", crudController.updateOne(Assignment))
router.delete("/:id", crudController.DeleteOne(Assignment))

module.exports = router;