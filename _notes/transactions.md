# Transactions

对多文档、多集合操作，保证原子性
MongoDB 4.0+ (2018) support transactions

```js
const session = await mongoose.startSession();
session.startTransaction();

try {
  await Carrier.create([{ name: "Carrier A", user_id: userId }], { session });
  await Audit.create([{ action: "create", user_id: userId }], { session });

  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```
