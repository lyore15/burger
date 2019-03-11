var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
var exphbs = require("express-handlebars")

var app = express();

if (process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root', 
        database: 'burgers_db;'
    });
}

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js")

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});