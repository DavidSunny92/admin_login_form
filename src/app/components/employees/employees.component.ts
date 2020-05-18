import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  employees: any[] = [];
  editid: number;
  employessLength: any;
  isViewDetailsClicked: boolean = false;
  isCreateEmployeeClicked: boolean = false;
  isEditEmployeeClicked: boolean = false;
  deleteAllbtn: boolean = false;
  loginUser: string;
  constructor(private dataser: DataService, public router: Router, public toastr: ToastrManager) { }

  ngOnInit() {
    this.getEmp()


  }

  getEmp() {
    this.employessLength = 0;
    this.dataser.getEmpDetails().subscribe(res => {
      
      this.employees = res.data;

      this.employees = Object.keys(this.employees).map(key => (this.employees[key]));
      this.employees.map(function (el) {
        var o = Object.assign({}, el);
        o.isChecked = false;
        return o;
      })
      this.employessLength = this.employees.length;
    
    })
  }

  onEdit(i) {
    this.isEditEmployeeClicked = true;
    this.router.navigate(['/update']);
  }
  onCreate() {
    this.isCreateEmployeeClicked = true;
    this.router.navigate(['/employees/create']);
  }
  deleteEmploye(id) {
    this.dataser.deleteEmp(id).subscribe(res => {
      if (res.status == "success") {
        this.toastr.successToastr('Employee deleted successfully ', 'Success!');
      } else {
        var msg = "Something Went Wrong"
        if (res.message) {
          msg = res.message
        }
        this.toastr.errorToastr(msg, 'Fail!');
      }
      this.getEmp()
    }, error => {
      var msg = "Something Went Wrong"
      if (error.message) {
        msg = error.message
      }
      this.toastr.errorToastr(msg, 'Fail!');
    })
  }
  deletMany() {
   
    this.employees.map((e) => {
      if (e.isChecked) {
        this.dataser.deleteEmp(e.id).subscribe(res => {
        })
      }
    })
    this.toastr.successToastr('Employees deleted successfully ', 'Success!');
    this.deleteAllbtn = false;
    this.getEmp()
  }
  checkbox() {
    var c = 0
    this.employees.map((e) => {
      if (e.isChecked) {
        c++;
      }
    })
    if (c > 0) {
      this.deleteAllbtn = true;
    } else {
      this.deleteAllbtn = false;
    }
  }
  ngAfterViewInit() {
    // this.getEmp()
  }

}
