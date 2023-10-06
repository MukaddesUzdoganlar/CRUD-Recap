import mongoose from "mongoose";
const Schema = mongoose.Schema;

const flakeSchema = new Schema({
  name: String,
  brand: String,
  ingredients: [String],
  nutritional_table: [String],
  image_url: String,
});


// naming convention ist doof, ggf. später nochmal in der db anpassen und flakes nennen
const Flake =
  mongoose.models.Products || mongoose.model("Products", flakeSchema);

export default Flake;
