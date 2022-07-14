const express = require('express');

const Lecture = require('../model/lecture.model');

const crudController = require('./crud.controller');

const router = express.Router();

//Lecture


router.post ("", crudController.post(Lecture))
router.get("", crudController.get(Lecture))
router.get("/:id", crudController.getOne(Lecture))
router.patch("/:id", crudController.updateOne(Lecture))
router.delete("/:id", crudController.DeleteOne(Lecture))

module.exports = router;