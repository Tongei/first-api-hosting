const employeeController = require("../controllers/employee.controller");

const employee = (app) => {
    app.get("/api/employee", employeeController.getAllEmp);
    app.get("/api/employee/:id", employeeController.getEmployeeById);
    app.post("/api/employee", employeeController.createEmployee);
    app.delete("/api/employee/:id", employeeController.deleteEmployee);
    app.put("/api/employee/:id", employeeController.updateEmployee);
}

module.exports = employee;