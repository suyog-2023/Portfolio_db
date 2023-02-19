const express = require('express');
const path = require('path');
require("./db/conn");
const User = require("./models/usermessage");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 5050

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");


app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);


app.get('/', (req, res) => {
    res.render("index");
});

app.get('/projects', (req, res) => {
    res.render("project");
})
app.get('/me', (req, res) => {
    res.render("me");
})


app.post("/contact", async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server connected`);
});