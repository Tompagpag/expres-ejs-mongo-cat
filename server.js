import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routers/routes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

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
