const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

require("../db/conn");
const Register = require("../models/registers");

const port = process.env.PORT || 5555;

// const staticPath = path.join(__dirname, "../../public");
const templatePath = path.join(__dirname, "../../templates/views");
const partilasPath = path.join(__dirname, "../../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partilasPath);

app.get("/", (req, res) => {
    // res.send("hi");
    res.render("index");
})

app.get("/register", (req, res) => {
    // res.send("hi");
    res.render("register");
})

app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if (password === cpassword) {

            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                password: req.body.password,
                cpassword: req.body.cpassword
            })

           const ourdata = await registerEmployee.save();
           res.status(201).render("index");

        } else {
            res.send("the password aren't matching");
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
});

app.listen(port, () => {
    console.log(`live at ${port}`)
});