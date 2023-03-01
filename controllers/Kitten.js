import Cat from "../models/kitten.model";

export default class Kitten {
  async print(req, res) {
    const { id } = req.params;
    try {
      const kitten = await Cat.findById(id);
      res.render("show", { kitten });
    } catch (error) {
      console.log(error);
      res.status(404).send(`L'entrée n°${id} est introuvable`)
    }
  }

  displayForm(req, res) {
    res.render("new", {error: ''});
  }

  async createKitten(req, res) {
    try {
      const { name, description, age } = req.body;
      const newKitten = new Cat({ name, description, age });

      await newKitten.save();
      // const fileData = JSON.parse(
      //   fs.readFileSync("./data_kittens/kittens.json")
      // );
      // const id = fileData.length;
      // newKitten.id = id;
      // fs.writeFileSync(
      //   `./data_kittens/${id}.json`,
      //   JSON.stringify(newKitten, null, 2)
      // );
      // fileData.push(newKitten);
      // fs.writeFileSync(
      //   "./data_kittens/kittens.json",
      //   JSON.stringify(fileData, null, 2)
      // );
      res.redirect("/");
    } catch (error) {
      res.render("new", {error})
    }
  }
}
