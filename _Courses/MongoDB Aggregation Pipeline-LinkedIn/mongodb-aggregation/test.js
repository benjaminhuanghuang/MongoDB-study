import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("mongo-study");
    const result = await database.collection("customers").findOne();

    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

run();
