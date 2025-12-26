# MongoDB CRUD

## Create

```js
const response = await Recipes.create(recipesDetail);
```

## Find

```js
const response = await Recipes.find();

const response = await Recipes.findById(id);
```

## Update

```js
const response = await Recipes.findByIdAndUpdate(
  id,
  { $set: recipesDetail },
  { new: true }
);
```

## Delete

```js
const response = await Recipes.findByIdAndDelete(id);
```
