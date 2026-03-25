import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const agg = [
  {
    $unwind: {
      // Deconstruct the items array to output a document for each item
      path: "$items",
      includeArrayIndex: "index",
    },
  },
  {
    $group: {
      _id: "$items.vendor",
      purchases: {
        $count: {},
      },
    },
  },
  {
    $sort: {
      purchases: -1,
    },
  },
  {
    $lookup: {
      from: "vendors",
      localField: "_id",
      foreignField: "_id",
      as: "vendor",
    },
  },
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
