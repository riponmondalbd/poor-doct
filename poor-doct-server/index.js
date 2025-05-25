const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://poor-doct.web.app",
      "https://poor-doct.firebaseapp.com",
    ],
    credentials: true,
  })
);
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4ylud.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db("PoorDoctDB").collection("users");
    const doctorCollection = client.db("PoorDoctDB").collection("doctors");
    const testimonialsCollection = client
      .db("PoorDoctDB")
      .collection("testimonials");
    const categoryCollection = client.db("PoorDoctDB").collection("category");
    const appointmentCollection = client
      .db("PoorDoctDB")
      .collection("appointments");

    // users api's collection
    // create a user also make sure duplicate entries
    app.post("/user", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already existing", insertedId: null });
      }

      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // get all user
    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    // get user by using email
    app.get("/user", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await userCollection.find(query).toArray();
      res.send(result);
      // console.log(result);
    });

    // update a user
    app.patch("/user/:id", async (req, res) => {
      const item = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          name: item.name,
          image: item.image,
        },
      };
      const result = await userCollection.updateOne(filter, updatedDoc);
    });

    // delete a doctor
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // make role
    app.patch("/users/role/:id", async (req, res) => {
      const user = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          role: user.role,
        },
      };
      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // doctors api's collection
    // get all doctors
    app.get("/doctors", async (req, res) => {
      const result = await doctorCollection.find().toArray();
      res.send(result);
    });

    // create a doctor
    app.post("/doctor", async (req, res) => {
      const doctor = req.body;
      const result = await doctorCollection.insertOne(doctor);
      res.send(result);
    });

    // delete a doctor
    app.delete("/doctor/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await doctorCollection.deleteOne(query);
      res.send(result);
    });

    // testimonials api's collection
    // get all testimonials
    app.get("/testimonials", async (req, res) => {
      const result = await testimonialsCollection.find().toArray();
      res.send(result);
    });

    // category api's collection
    // get all category
    app.get("/category", async (req, res) => {
      const result = await categoryCollection.find().toArray();
      res.send(result);
    });

    // appointment api's collection
    // create appointment
    app.post("/appointment", async (req, res) => {
      const appointment = req.body;
      const result = await appointmentCollection.insertOne(appointment);
      res.send(result);
    });

    // get appointment based on email
    // app.get("/appointments", async (req, res) => {
    //   const email = req.query.email;
    //   const query = { applicant_email: email };
    //   const result = await appointmentCollection.find(query).toArray();
    //   res.send(result);
    // });

    app.get("/appointments", async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };
      const result = await appointmentCollection.find(query).toArray();

      for (const appoint of result) {
        try {
          const doctor = await doctorCollection.findOne({
            _id: new ObjectId(appoint.doctor_id),
          });
          const category = await categoryCollection.findOne({
            _id: new ObjectId(appoint.department_id),
          });

          if (doctor) {
            appoint.doctorInfo = doctor;
          }
          if (category) {
            appoint.categoryInfo = category;
          }
        } catch (err) {
          console.error(err);
        }
      }
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("PoorDoct is running");
});

app.listen(port, () => {
  console.log(`PoorDoct is running on port ${port}`);
});
