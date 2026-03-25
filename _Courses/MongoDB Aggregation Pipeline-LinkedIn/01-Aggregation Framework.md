# MongoDB Aggregation Framework

```js
db.customer
  .aggregate([
    { $match: { state: "CA" } },
    { $sort: { total: -1 } },
    { $limit: 5 },
  ])
  .toArray();
```

## Aggregation Operators

- Logical: $lt, $gt, $eq
- Mathematical: $sum, $avg, $cos
- Date/Time: $dayOfMonth, $dateFromString
- Array: $first, $indexOfArray, $last

## Query vs Aggregation

Query works directly with BSON data in db
Aggregation convert BSON to object, process them, then covert back to BSON

## Map-reduce vs Aggregation

```js
db.orders.mapReduce(
  function () {
    emit(this.userId, this.amount);
  },
  function (key, values) {
    return Array.sum(values);
  },
  { out: "result" },
);
```

Aggregation = modern, fast, recommended, Native (C++)

MapReduce = old, slow, mostly deprecated, JavaScript
