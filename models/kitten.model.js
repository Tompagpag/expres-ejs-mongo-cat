import mongoose from "mongoose";
const { Schema } = mongoose;

const catSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  image: { type: String, default: null},
  age: Number,
  description: String,
  date: { type: Date, default: Date.now },

});


const Cat = mongoose.model("Cat", catSchema);

export default Cat;
