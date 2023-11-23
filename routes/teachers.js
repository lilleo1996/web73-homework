const express = require("express");

const TEACHERS = require("../mock/teachers");

const teachersRouter = express.Router();

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

teachersRouter.get("/:id", (req, res) => {
  const teacher = TEACHERS.find(
    (teacher) => teacher.id === parseInt(req.params.id)
  );
  console.log(teacher);
  res.json(teacher);
});

module.exports = teachersRouter;
