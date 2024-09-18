const express = require("express");
const employee = require("./routes/employee.route");

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());


employee(app);
const port = 8080;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api/employee`);
});