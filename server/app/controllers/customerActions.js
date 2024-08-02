const readCustomer = (req, res) => {
  const customers = [
    {
      email: "windy@gmail.com",
      password: "croquettes",
    },
    {
      email: "cyriacdelabretagne@gmail.com",
      password: "jekifflamusique",
    },
  ];

  res.json({
    results: customers,
  });
};

module.exports = { readCustomer };
