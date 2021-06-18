const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/main");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", mainRouter);

const server = app.listen(port, () => {
    console.log(`server open on port ${port}`);
});

