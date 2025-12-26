import { MongoClient } from "mongodb";

// Connection URL
const uri = "mongodb://localhost:27018";

// Database Name
const dbName = "mongo-study";

// Create a MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client
    await client.connect();
    console.log("Connected to MongoDB");

    // Get database
    const db = client.db(dbName);

    // Get collections
    const users = db.collection("users");

    // Insert a document
    const newUser = { username: "Alice" };
    const result = await users.insertOne(newUser);
    console.log("Inserted user:", result.insertedId);

    // Find documents
    const allUsers = await users.find().toArray();
    console.log("All users:", allUsers);

    // Find one document
    const user = await users.findOne({ username: "Alice" });
    console.log("Found user:", user);
  } finally {
    // Close connection
    await client.close();
  }
}

main().catch(console.error);
