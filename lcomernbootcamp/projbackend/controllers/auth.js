exports.signup = (req, res) => {
  console.log(req.body);
  res.json({
    message: "User signup successfully"
  });
};
exports.signout = (req, res) => {
  res.json({
    message: "User signout inside controller"
  });
};
