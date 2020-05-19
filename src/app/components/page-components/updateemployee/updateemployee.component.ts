import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private dataser: DataService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrManager) { }
  public updateForm: FormGroup;

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getEmployee(params['id'])
    });
    this.updateForm = this.fb.group({
      id: ['', ''],
      name: ['', ''],
      salary: ['', ''],
      age: ['', '']
    })

  }

  getEmployee(id) {
    this.dataser.viewEmp(id).subscribe(res => {
      if (res.data == null) {
        this.toastr.errorToastr('Something went wrong', 'Fail!');
      } else {
        this.updateForm.patchValue({ "id": res.data.id, "name": res.data.employee_name, "salary": res.data.employee_salary, "age": res.data.employee_age });
      }
    })
  }

  updateEmployee() {
    this.dataser.updateEmp(this.updateForm.value, '').subscribe(res => {
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
