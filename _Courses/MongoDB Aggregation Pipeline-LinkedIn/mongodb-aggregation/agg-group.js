import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Group orders by customer and calculate total spent, total items purchased, and total orders for each customer
const agg = [
  {
    $group: {
      _id: "$customer.fullName",
      totalOrders: {
        $count: {}, // Count number of documents in each group
        // $sum: 1, // Add 1 for every document in the group
      },
      totalItemsPurchased: {
        $sum: {
          $size: "$items",
        },
      },
      totalSpent: {
        $sum: "$total",
      },
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
