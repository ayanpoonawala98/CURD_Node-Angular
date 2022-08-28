const { Router } = require('express');
const Employee = require('../models/Employee');
const { validationResult } = require('express-validator');


exports.getEmployees = (req,res,next)=>{
    Employee.find()
        .then(product =>{
            res.send(product)
        })
        .catch(err =>{
            console.log("Error:" ,err)
            res.status(400).send('Internal Error')
        })

}


exports.postEmployee = (req,res,next)=>{
    const name = req.body.name;
    console.log(req.body.name)
    const imageUrl = req.body.imageUrl;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
       return res.status(400).json({error : errors.array()});
    }
    const employee =  new Employee({
        name : name,
        email: email,
        mobile: mobile,
        imageUrl : imageUrl
    })
    employee.save()
        .then(result =>{
            console.log('Created New Employee')
            res.redirect('/employee')
        })
        .catch(err => {
            console.log("Error:", err)
            res.status(400).send('Internal Error will making Employee',err)
        })

}

exports.postDeleteEmployee = (req,res,next) =>{
    const empId= req.params.empId
    Employee.findByIdAndRemove(empId)
    .then(()=>{
        console.log('Delete PRODUCT');
        // res.redirect('/employee')
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('Internal Error will Deleting Employee', err)
    });
}


exports.postEmployeById = (req, res, next) => {
    const empId = req.params.empId;
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const mobile = req.body.mobile;
    const email = req.body.email;
    console.log("------------------------------>",req.body,empId)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        return res.status(400).json({ error: errors.array() });

       
    }
    Employee.findById(empId)
        .then( emp =>{
            emp.name = name;
            emp.imageUrl = imageUrl;
            emp.mobile = mobile;
            emp.email = email;

            return emp.save();

        })
        .then(result => {
            console.log('UPDATED PRODUCT!');
            res.redirect('/employee');
        })
        .catch(err =>{
            console.log(err)
                   res.status(400).send('Internal Error will Updating Employee', err)
 
        } );



}
