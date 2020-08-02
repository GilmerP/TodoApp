const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const todos = require("./routes/api/todos")

app.use("/api/todos", todos)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`))