import Kitten from '../controllers/Kitten';
import Kittens from '../controllers/Kittens';

export default (app) => {

  app.get("/", (req, res) => {
    (new Kittens()).print(req, res);
  });
  app.get("/:id", (req, res) => {
    (new Kitten()).print(req, res);
  });
  app.get("/add", (req, res) => {
    res.render('new');
  });
};
