import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB connected");
    const port = process.env.PORT || 3721;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.error(err));
