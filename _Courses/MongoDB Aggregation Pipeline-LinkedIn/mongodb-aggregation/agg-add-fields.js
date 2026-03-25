import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const agg = [
  {
    $match: {
      quantity: {
        $gt: 500,
      },
    },
  },
  {
    $addFields: {
      discount: {
        $cond: [
          {
            $lte: ["$price", 500],
          },
          0.4, // value if true
          0.65, // value if false
        ],
      },
    },
  },
  {
    $addFields: {
      salePrice: {
        $multiply: [
          // salePrice = price * (1 - discount)
          "$price",
          {
            $subtract: [1, "$discount"],
          },
        ],
      },
    },
  },
  {
    $unset: "quantity", // remove the quantity field from the output documents
  },
  {
    $out: "q4_specials", // write the results of the aggregation to a new collection called q4_specials
  },
];

async function run() {
  try {
    const database = client.db("mongo-study");
    const result = await database
      .collection("products")
      .aggregate(agg)
      .toArray();

    const data = await database.collection("q4_specials").find().toArray();

    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

run();
