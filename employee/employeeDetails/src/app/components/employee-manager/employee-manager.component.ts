import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Shared/data.service';
import { IEmployee } from '../../models/IEmployee'

import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {
  employee: IEmployee = {
    _id: '',
    name: '',
    mobile: '',
    email: '',
    imageUrl: ''
  }

  name: string = '';
  mobile: string = '';
  email: string = '';
  imageUrl: string = '';

  allEmployee: IEmployee[] = []

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.name = '';
    this.mobile = '';
    this.email = '';
    this.imageUrl = '';
    this.allEmployee = [];
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.dataService.getEmployees().subscribe(res => {
      this.allEmployee = res;
    }, err => {
      console.log(err);
    })
  }


  deleteEmployee(employee: IEmployee) {
    if (window.confirm("Are you sure to delete post with id :" + employee._id)) {
      console.log(employee)
      this.dataService.deleteEmployees(employee._id).subscribe(res => {
        this.allEmployee = []
        this.getAllEmployee();
        this.router.navigate(['employee','edit'])
      }, err => {
        console.log(err);
      })
    }

  }

  getEmployeeById(employee: IEmployee) {
    this.dataService.getEmployeeById(employee._id).subscribe(res => {
      employee = res;
    }, err => {
      console.log(err);
    })
  }


  postEmployee(employee: IEmployee) {
    this.dataService.postEmployees(employee).subscribe(res => {
      this.allEmployee = []
      this.getAllEmployee();
    }, err => {
      console.log(err);
    })
  }

  editEmployee(employee: IEmployee) {
    // this.getEmployeeById(employee)
    this.employee.name = this.name;
    this.employee.mobile = this.mobile;
    this.employee.email = this.email;
    this.employee.imageUrl = this.imageUrl;
     this.router.navigate(['employee','edit',employee._id])

  }

  updatePost() {
    if (this.name != '' || this.mobile != '' || this.email != '' || this.imageUrl != '') {
      alert('Please fill all the fields')
      return
    }
    this.employee.name = this.name;
    this.employee.mobile = this.mobile;
    this.employee.email = this.email;
    this.employee.imageUrl = this.imageUrl;
    this.dataService.postEmployeeById(this.employee).subscribe(
      res => {
        this.ngOnInit()
      }, err => {
        console.log(err);
      }

    )

  }
  

}
