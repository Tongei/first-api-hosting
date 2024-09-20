const express = require("express");
const methodOverride = require('method-override');
const employee = require("./routes/employee.route");
const home = require("./routes/home.route");
// const path = require('path');
const app = express();

app.set('view engine', 'ejs');

// app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

employee(app);
home(app);

const port = 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
