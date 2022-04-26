const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// dbUserNoman
// HohgvXHlI80vhDXn

const uri =
  "mongodb+srv://dbUserNoman:HohgvXHlI80vhDXn@cluster0.5xcel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const collection = client.db("foodExpress").collection("users");
  console.log("db connected");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Running Node CRUD Server");
});

app.listen(port, () => {
  console.log("CRUD server is running");
});
