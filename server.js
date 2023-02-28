import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routers/routes.js";

import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r9hjvfn.mongodb.net/test_bdd`
);


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//--------------------------------------------------------------------
//      Mise en place du moteur de template
//--------------------------------------------------------------------
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "ejs");

//--------------------------------------------------------------------
//      Mise en place du répertoire static
//--------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "public")));

//--------------------------------------------------------------------
//      Middleware pour utiliser le body de la request
//--------------------------------------------------------------------
app.use(express.urlencoded({ extended: false })); // extented à true pour pouvoir faire des tableaux depuis les inputs
//app.use(express.json());

//--------------------------------------------------------------------
//      Chargement des routes
//--------------------------------------------------------------------
routes(app);

//--------------------------------------------------------------------
//     Ecoute du serveur HTTP
//--------------------------------------------------------------------
app.listen(process.env.PORT, () => {
  console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}`);
});



// app.get('/test', (req,res) => {
//       const cats = [
//         {
//           name: "Bob",
//           image: "https://placekitten.com/400/100",
//           age: 16,
//           description: "super cat",
//         },
//         {
//           name: "Wild",
//           image: "https://placekitten.com/400/200",
//           age: 10,
//           description: "super cat",
//         },
//         {
//           name: "Nyan",
//           image: "https://placekitten.com/400/300",
//           age: 12,
//           description: "super cat",
//         },
//         {
//           name: "Saka",
//           image: "https://placekitten.com/400/400",
//           age: 3,
//           description: "My Saka is the best",
//         },
//         {
//           name: "Michel",
//           image: "https://placekitten.com/400/600",
//           description: "Wonderfull",
//           age: 22,
//         },
//         {
//           name: "Pagz",
//           image: "https://placekitten.com/400/500",
//           description: "joli",
//           age: 2,
//         },
//       ];
//       Cat.insertMany(cats).then(err => console.log)
// //   const kitty = new Cat({ name: "Zildjian", age: 3, description: "super chat" });
// //   kitty.save().then(() => res.json("meow"));
// })
