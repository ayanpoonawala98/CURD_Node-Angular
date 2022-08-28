const path = require('path');

const express = require('express');
const { body } = require('express-validator');
const employeeController = require('../controllers/employeeController');
const employee = require('../controllers/employeeController');

const router = express.Router();

router.get('/',employee.getEmployees)

router.post("/add", [body('email',"Enter Proper Email").isEmail(),
    body('name','Enter Valid Name').isLength({min : 3}),
    body('mobile','Enter valid number range between 10 to 12 Digits').isLength({min:10,max:12})
    ], employee.postEmployee)

router.delete("/:empId" ,employee.postDeleteEmployee)

router.post("/edit/:empId",[body('email',"Enter Proper Email").isEmail(),
    body('name','Enter Valid Name').isLength({min : 3}),
    body('mobile','Enter valid number range between 10 to 12 Digits').isLength({min:10,max:12})
    ], employee.postEmployeById)

module.exports = router;