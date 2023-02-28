import fs from "fs";

export default class Kitten {
  print(req, res) {
    const { id } = req.params;
    const data = fs.readFileSync(`./data_kittens/${id}.json`, "utf-8");
    const kitten = JSON.parse(data);
    res.render("new", { kitten });
  }
}
