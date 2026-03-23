# group

```js
{
  $group: {
    _id: null,
    pickup_times: { $addToSet: "$pickup_time" },
    ...
    docks: { $addToSet: "$dock" },
  },
}
```

$group 是 MongoDB 聚合管道中的分组操作，类似 SQL 的 GROUP BY。
它会把输入文档按 \_id 指定的字段分组，然后对每组进行聚合计算。

\_id 字段决定分组依据。
聚合操作可以是 $sum、$avg、$max、$min、$push、$addToSet 等。
