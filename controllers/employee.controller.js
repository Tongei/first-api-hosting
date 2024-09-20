const db = require("../db/db");

const getAllEmp = (req, res) => {
    let sql = "SELECT * FROM employees";

    db.query(sql, (error, records) => {
        if(!error){
            // res.json({
            //     emp_list : records
            // });

            // res.render('employeesCard', {emp_list : records});
            res.render('manageEmployee', {emp_list : records});
        }else {
            // res.json({
            //     error : true,
            //     error : error
            // });
            res.render('manageEmployee', {error : error});
        }
    })
}

const getEmployeeById = (req, res) => {
    let sql = "SELECT * FROM employees WHERE emp_id = ?";
    const {id} = req.params;

    const param = [id];

    db.query(sql, param , (error, record) => {
        if(!error){
            // res.json({
            //     message : true,
            //     emp_data : record
            // })
            res.render('detail', {emp_data : record});
        }else{
            res.json({
                error : true,
                error : error
            })
            res.render('detail', {error : error});
        }
    })
}

const createEmployee = (req, res) => {
    let sql = "INSERT INTO employees (full_name, salary, city) VALUES(?, ?, ?)";
    const { full_name, salary, city } = req.body;

    const param = [full_name, salary, city];

    db.query(sql, param, (error, record) => {
        if (!error) {
            res.redirect('/api/employee');
        } else {
            res.render('manageEmployee', { error: error.message });
        }
    });
}


const deleteEmployee = (req, res) => {
    let sql = "DELETE FROM employees WHERE emp_id = ?"

    const {id} = req.params;

    const param = [id];

    db.query(sql, param, (error, record) =>{
        if(!error){
            // res.json({
            //     success : true
            // })
            res.redirect('/api/employee');
        }else{
            // res.json({
            //     error : true,
            //     error  :error
            // })
            res.render('manageEmployee', { error: error.message });
        }
    })
}

const updateEmployee = (req, res) =>{
    let sql = `
    UPDATE employees
    SET full_name =?, salary = ?, city = ?
    WHERE emp_id = ?;
    `;

    const {id} = req.params;
    const {full_name, salary, city} = req.body;

    const param = [full_name, salary, city, id];

    db.query(sql, param, (error, record) => {
        if(!error){
            // res.json({
            //     success : true,
            //     data : record
            // })
            res.redirect('/api/employee');
            // res.render('manageEmployee', { success: 'Employee update successfully!' });
        }else{
            // res.json({
            //     error : true,
            //     error : error
            // });
            res.render('manageEmployee', { error: error.message });
        }
    })

}

module.exports = {
    getAllEmp,
    getEmployeeById,
    createEmployee,
    deleteEmployee,
    updateEmployee
}