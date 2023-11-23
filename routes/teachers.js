const express = require("express");

const TEACHERS = require("../mock/teachers");
const requireAPIKey = require("../middlewares/requireAPIKey");
const logRequestMethod = require("../middlewares/logRequestMethod");

const teachersRouter = express.Router();

teachersRouter.use(requireAPIKey);
teachersRouter.use("/:id", logRequestMethod);

// GET all
teachersRouter.get("/", (req, res) => {
  const { from, to } = req.query;
  if (from && to) {
    const newTeachers = TEACHERS.filter(
      (teacher) => teacher.age >= from && teacher.age <= to
    );
    res.json(newTeachers);
  } else {
    res.json(TEACHERS);
  }
});

// GET with id
teachersRouter.get("/:id", (req, res) => {
  const teacher = TEACHERS.find(
    (teacher) => teacher.id === parseInt(req.params.id)
  );
  console.log(teacher);
  res.json(teacher);
});

module.exports = teachersRouter;
