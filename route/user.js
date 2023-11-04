const express = require('express')
const router = require('./controller/users')
const Database = express.Router()

Database.post("/creatementor",router.postcreatementor)
Database.post("/createstudent",router.postcreatestudent)
Database.get("/mentors",router.getmentors)
Database.get("/students",router.getstudents)
Database.put("/assignstudent/:id",router.putassignstudent)
Database.get("/mentorstudent/:id",router.getmentorstudent)
Database.put("/assignchangementor/:id",router.putchangementor)

module.exports = Database
