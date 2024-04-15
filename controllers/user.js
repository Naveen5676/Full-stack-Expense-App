const expenseData = require("../models/expensedata");

exports.postAddData = (req, res, next) => {
  const amount = req.body.amount;
  const desc = req.body.desc;
  const cat = req.body.cat;
  expenseData
    .create({
      amount: amount,
      desc: desc,
      cat: cat,
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => console.log(err));
};

exports.getData = (req, res, next) => {
  expenseData
    .findAll()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => console.log(err));
};

exports.getDataDelete = (req, res, next) => {
  const prodid = req.params.prodid;
  expenseData
    .findByPk(prodid)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      res.status(201);
    })
    .catch((err) => {
      console.log(err);
    });
};
