import fs from "fs";

export default class Kitten {
  print(req, res) {
    const { id } = req.params;
    const data = fs.readFileSync(`./data_kittens/${id}.json`, "utf-8");
    const kitten = JSON.parse(data);
    res.render("show", { kitten });
  }

  displayForm(req, res) {
    res.render("new", {error: ''});
  }

  createKitten(req, res) {
    try {
      const { name, description, age } = req.body;
      const newKitten = { name, description, age };
      const fileData = JSON.parse(
        fs.readFileSync("./data_kittens/kittens.json")
      );
      const id = fileData.length;
      newKitten.id = id;
      fs.writeFileSync(
        `./data_kittens/${id}.json`,
        JSON.stringify(newKitten, null, 2)
      );
      fileData.push(newKitten);
      fs.writeFileSync(
        "./data_kittens/kittens.json",
        JSON.stringify(fileData, null, 2)
      );
      res.redirect("/");
    } catch (error) {
      res.render("new", {error})
    }
  }
}
