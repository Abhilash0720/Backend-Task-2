const usermodel = require('./models/index')
let mentor = [];
let student = [];

const postcreatementor = async (req, res) => {
    try {
      const connection = await mongoclient.connect(dburl);
      const db = connection.db("student-mentor");
      const mentor = await db.collection("student").insertOne(req.body);
      res.json({ message: "Mentor created" });
    } 
    catch (error) {
      console.log(error);
    }
  }

const postcreatestudent = async (req, res) => {
    try {
      const connection = await mongoclient.connect(dburl);
      const db = connection.db("student-mentor");
      const student = await db.collection("students").insertOne(req.body);
      res.json({ message: "Student created"});
    } 
    catch (error) {
      console.log(error);
    }
  }

const getmentors = async (req, res) => {
    try {
      const connection = await mongoclient.connect(dburl);
      const db = connection.db("student-mentor");
      const mentor = await db.collection("mentors").find({}).toArray();
      res.json(mentor);
    } 
    catch (error) {
      console.log(error);
    }
  }

const getstudents = async (req, res) => {
    try {
      const connection = await mongoclient.connect(dburl);
      const db = connection.db("student-mentor");
      const student = await db.collection("students").find({}).toArray();
      res.json(student);
    } 
    catch (error) {
      console.log(error);
    }
  }
const putassignstudent= async (req, res) => {
    try {
      const connection = await mongoclient.connect(dburl);
      const db = connection.db("student-mentor");
      const mentordata = await db
        .collection("mentors")
        .findOne({ _id: mongodb.ObjectId(req.params.id) });
      if (mentordata) {
        delete req.body._id;
        const mentor = await db.collection("mentors").updateOne(
            { _id: mongodb.ObjectId(req.params.id) },
            { $set: req.body }
          );
        res.json(mentor);
      } else {
        res.status(404).json({ message: "mentor not found" });
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

const getmentorstudent = async (req, res) => {
    try {
      const connection = await mongoclient.connect(dburl);
      const db = connection.db("student-mentor");
      const mentor = await db.collection("mentors").findOne({ _id: mongodb.ObjectId(req.params.id) });
      if (mentor) {
        res.json(`students name : ${mentor.student} assigned to ${mentor.name}`);
      } else {
        res.status(404).json({ message: "Mentor not found" });
      }
    }
     catch (error) {
      console.log(error);
    }
  }

const putchangementor = async(req, res) => {
    try {
        const connection = await mongoclient.connect(dburl);
        const db = connection.db("student-mentor");
        const studentdata = await db.collection("students").findOne({ _id: mongodb.ObjectId(req.params.id) });
        if (studentdata) {
            delete req.body._id;
            const student = await db.collection("students").updateOne(
                { _id: mongodb.ObjectId(req.params.id) },
                { $set: req.body }
              );
            res.json(student);
          } else {
            res.status(404).json({ message: "Student not found" });
          }
      } 
      catch (error) {
        console.log(error);
      }
}

module.export = {
    postcreatementor,
    postcreatestudent,
    getmentors,
    getstudents,
    putassignstudent,
    getmentorstudent,
    putchangementor
}
  