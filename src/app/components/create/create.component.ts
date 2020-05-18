import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  submitted = false;
  action: string;
  isEmployeeCreated: boolean = false
  submitButton: string = 'Create';
  public studentForm: FormGroup;
  constructor(private fb: FormBuilder, private dataser: DataService, private route: ActivatedRoute, public router: Router, public toastr: ToastrManager) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.action = params['id'];
      if (this.action != 'create') {
        this.getEmployee(this.action)
        this.submitButton = 'Update';
      }
    });
    this.studentForm = this.fb.group({

      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    })

  }
  get x() { return this.studentForm.controls; }
  getEmployee(id) {
    this.dataser.viewEmp(id).subscribe(res => {
      if (res.data == null) {
        this.toastr.errorToastr('Something went wrong', 'Fail!');
      } else {
        this.studentForm.patchValue({ "name": res.data.employee_name, "salary": res.data.employee_salary, "age": res.data.employee_age });
      }
    }, error => {
      var msg = "Something Went Wrong"
      if (error.message) {
        msg = error.message
      }
      this.toastr.errorToastr(msg, 'Fail!');
    })
  }
  onreactivesubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.studentForm.invalid) {
      return;
    }
    if (this.action == 'create') {
      this.dataser.createEmp(this.studentForm.value).subscribe(res => {
        if (res.status == "success") {
          this.toastr.successToastr('Employee created successfully ', 'Success!');
        } else {
          var msg = "Something Went Wrong"
          if (res.message) {
            msg = res.message
          }
          this.toastr.errorToastr(msg, 'Fail!');
        }
        this.router.navigate(['/employees']);

      }, error => {
        var msg = "Something Went Wrong"
        if (error.message) {
          msg = error.message
        }
        this.toastr.errorToastr(msg, 'Fail!');
      })
    } else {
      this.dataser.updateEmp(this.studentForm.value, this.action).subscribe(res => {
        if (res.status == "success") {
          this.toastr.successToastr('Employee updated successfully ', 'Success!');
        } else {
          var msg = "Something Went Wrong"
          if (res.message) {
            msg = res.message
          }
          this.toastr.errorToastr(msg, 'Fail!');
        }
        this.router.navigate(['/employees']);

      }, error => {
        var msg = "Something Went Wrong"
        if (error.message) {
          msg = error.message
        }
        this.toastr.errorToastr(msg, 'Fail!');
      })
    }

  }


}