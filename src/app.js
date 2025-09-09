const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) * Number(b);
  res.json({ result });
});

if (require.main === module) {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }

module.exports = app;
