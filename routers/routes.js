export default (app) => {
  // home and connexion
  app.get("/", (req, res) => {
    res.render('index');
  });
};
