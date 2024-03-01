const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const customer = require("./src/Data/customer.json")
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")


app.get('/', (req, res) => {

    res.render('index', 
    { 
        username: 'Yeen', 
        title : 'Home Page',
        customer,
    },
    
    );

    

});

app.listen(PORT, () => {
    console.log("Listening on PORT : " + chalk.yellow("http://localhost:" + PORT));
})