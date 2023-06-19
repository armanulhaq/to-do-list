const bodyParser = require('body-parser');
const express = require('express');

const app = express();

//defining array here so that it is in scope in line 24
var items = ["Buy Food" , "Cook Food", "Eat Food"];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.get('/', function (req, res) {
    
    var today = new Date();
    //toLocaleDateString can take options as one argument
    // in options we define what are the things we require in the date
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    //kindOfDay ki jagah day dalde
    res.render('list', {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res) {
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log('Server started on port 3000.');
});