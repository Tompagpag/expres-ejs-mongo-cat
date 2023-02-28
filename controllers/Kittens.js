import fs from "fs";

export default class Kittens {
  print(req, res) {
    const data = fs.readFileSync("./data_kittens/kittens.json", "utf-8");
    const kittens = JSON.parse(data);
    // console.log(typeof kittens)
    res.render("index", { kittens });
  }
}
