import App from "next/app";

App.use(bodyParser.urlencoded({ extended: true }));

const db = require("./model");

db.sequelize.sync();
App.get("/", (req, res) => {
    res.json({ message: "welcome to the app"})
});

require("./")
