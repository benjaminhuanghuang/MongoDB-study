# Data integration in MongoDB

## 数据完整性最佳实践

必填字段 → required: true / validator
唯一约束 → unique index
类型校验 → Mongoose Schema 或 MongoDB Schema Validation
事务处理 → 对多集合操作
Service 层逻辑 → 保证复杂业务规则
定期检查 → 对历史数据执行完整性检查

```js
db.carriers.createIndex({ user_id: 1, name: 1 }, { unique: true });
```

```js
db.createCollection("carriers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "name", "status"],
      properties: {
        user_id: { bsonType: "objectId" },
        name: { bsonType: "string", minLength: 1 },
        status: { bsonType: "bool" },
      },
    },
  },
});
```
