const { MongoClient } = require("mongodb");

const uri = "mongodb://coder:123%40Code@127.0.0.1:27017/admin?authSource=admin";

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected Successfully");
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

run();