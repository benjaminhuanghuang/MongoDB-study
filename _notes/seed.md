# Seeding data in MongoDB

## mongoimport

```sh
mongoimport  --uri "<your_mongodb_uri>"  --db testdb --collection carriers --file carriers.json --jsonArray

mongoimport --uri "mongodb://localhost:27017/testdb" \
  --collection carriers --file carriers.json --jsonArray

mongoimport --uri "mongodb+srv://user:pass@cluster0.mongodb.net/testdb" \
  --collection carriers --file carriers.json --jsonArray
```

--jsonArray → the file contains an array of JSON objects

## mongoose

```txt
project/
│
├─ src/
│   ├─ models/
│   │   └─ Carrier.ts
│   ├─ seed/
│   │   └─ seedCarriers.ts
│   └─ server.ts
```

```js
import mongoose from "mongoose";
import Carrier from "../models/Carrier";

const seedData = [
  { name: "Carrier A", status: true },
  { name: "Carrier B", status: false },
  { name: "Carrier C", status: true },
];

async function seed() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    console.log("MongoDB connected");

    // Optional: Clear existing data
    await Carrier.deleteMany({});

    // Insert seed data
    await Carrier.insertMany(seedData);

    console.log("Seed data inserted successfully");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed", err);
    process.exit(1);
  }
}

seed();
```

```sh
ts-node src/seed/seedCarriers.ts
```

## Fake Data

```js
import { faker } from "@faker-js/faker";

const seedData = Array.from({ length: 50 }, () => ({
  name: faker.company.name(),
  status: faker.datatype.boolean(),
}));
```
