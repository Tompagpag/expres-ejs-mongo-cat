import Cat from "../models/kitten.model";


export default class Kittens {
  async print(req, res) {
    const kittens = await Cat.find({});
    res.render("index", { kittens });
  }
}
