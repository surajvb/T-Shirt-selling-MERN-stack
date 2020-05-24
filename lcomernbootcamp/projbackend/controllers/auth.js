exports.signup = (req, res) => {
  res.json({
    message: "User signup successfully"
  });
};
exports.signout = (req, res) => {
  res.json({
    message: "User signout inside controller"
  });
};
