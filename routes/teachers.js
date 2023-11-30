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
  res.json(teacher);
});

// POST
teachersRouter.post("/", (req, res) => {
  const newStudent = {
    id: TEACHERS.length + 1,
    ...req.body,
  };
  TEACHERS.push(newStudent);
  res.json(newStudent);
});

// PUT with id
teachersRouter.put("/:id", (req, res) => {
  const teacherIndex = TEACHERS.findIndex(
    (teacher) => teacher.id == req.params.id
  );
  if (teacherIndex === -1) {
    res.send("Not found teacher");
  } else {
    const updatedTeacher = { ...TEACHERS[teacherIndex], ...req.body };
    TEACHERS[teacherIndex] = updatedTeacher;
    res.json(updatedTeacher);
  }
});

// DELETE with id
teachersRouter.delete("/:id", (req, res) => {
  const teacherIndex = TEACHERS.findIndex(
    (teacher) => teacher.id == req.params.id
  );
  if (teacherIndex === -1) {
    res.send("Not found teacher");
  } else {
    TEACHERS.splice(teacherIndex, 1);
    res.send("Delete successfully");
  }
});

module.exports = teachersRouter;
