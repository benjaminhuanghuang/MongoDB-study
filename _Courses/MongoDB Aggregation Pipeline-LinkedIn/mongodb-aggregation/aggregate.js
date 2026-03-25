import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const agg = [
  { $match: { "customer.address.state": "CA" } },
  { $sort: { total: -1 } },
  { $limit: 5 },
];

async function run() {
  try {
    const database = client.db("mongo-study");
    const result = await database.collection("orders").aggregate(agg).toArray();

    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

run();
