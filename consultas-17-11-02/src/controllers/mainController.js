const index = (req, res) => {
  res.render("index");
};

const show = (req, res) => {
  console.log(req.params);
  //   document.write(req.params); // No funciona en el Backend
  res.send("show");
};

module.exports = {
  index,
  show,
};
