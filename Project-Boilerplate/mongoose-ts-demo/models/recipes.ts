import mongoose from "../dbConnection";

const { Schema } = mongoose;

const RecipesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Date,
    default: new Date(),
  },
  difficulty: {
    type: Number,
    min: 1,
    max: 3,
    required: true,
  },
  vegetarian: {
    type: Boolean,
    required: true,
  },
});

// club model
mongoose.model("recipes", RecipesSchema);

// module exports
export default mongoose.model("recipes");
