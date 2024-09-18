const db = require("../utils/db");

const getAllEmp = (req, res) => {
    let sql = "SELECT * FROM employees";

    db.query(sql, (error, records) => {
        if(!error){
            // res.json({
            //     emp_list : records
            // });

            res.render('index', {emp_list : records});
        }else {
            res.json({
                error : true,
                error : error
            });
            res.render('index', {error : error});
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
    const {full_name, salary, city} = req.body;

    const param = [full_name, salary, city];

    db.query(sql, param, (error, record) => {
        if(!error){
            res.json({
                   success : true,
                   data : record
            })
        }else{
            res.json({
                error :true,
                error : error
            })
        }
    })
}

const deleteEmployee = (req, res) => {
    let sql = "DELETE FROM employees WHERE emp_id = ?"

    const {id} = req.params;

    const param = [id];

    db.query(sql, param, (error, record) =>{
        if(!error){
            res.json({
                success : true
            })
        }else{
            res.json({
                error : true,
                error  :error
            })
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
            res.json({
                success : true,
                data : record
            })
        }else{
            res.json({
                error : true,
                error : error
            })
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