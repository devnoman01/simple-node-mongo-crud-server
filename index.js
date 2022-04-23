const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// dbUserNoman
// mypassword1234

const uri =
  "mongodb+srv://dbUserNoman:mypassword1234@cluster0.5xcel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");

    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // const user = { name: "Md. Karim", email: "karim@gmail.com" };
    // const result = await userCollection.insertOne(user);
    // console.log(`user inserted with id ${result.insertedId}`);
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

// client.connect((err) => {
//   const collection = client.db("foodExpress").collection("users");
//   console.log("db connected");
//   // perform actions on the collection object
//   client.close();
// });

app.get("/", (req, res) => {
  res.send("Running My node CRUD server");
});

app.listen(port, () => {
  console.log("CRUD SERVER IS RUNNING");
});
