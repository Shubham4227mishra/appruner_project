exports.listDestinations = (req, res) => {
  res.json([
    {
      id: 1,
      name: "Bali",
      country: "Indonesia",
      price: "$799",
      color: "#ff7a18"
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
      price: "$999",
      color: "#6a11cb"
    },
    {
      id: 3,
      name: "Maldives",
      country: "Maldives",
      price: "$1299",
      color: "#00c6ff"
    }
  ]);
};

