import Kitten from '../controllers/Kitten';
import Kittens from '../controllers/Kittens';

export default (app) => {

  app.get("/", (req, res) => {
    (new Kittens()).print(req, res);
  });
  app.get("/kitten/:id", (req, res) => {
    (new Kitten()).print(req, res);
  });
  app.get("/add", (req, res) => {
    (new Kitten()).displayForm(req, res);
  });
  app.post("/add", (req, res) => {
    (new Kitten()).createKitten(req, res);
  });
};
