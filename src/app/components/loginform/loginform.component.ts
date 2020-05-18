import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private fb: FormBuilder, public router: Router, public toastr: ToastrManager) { }
  public loginForm: FormGroup;
  loginUser: any;
  submitted = false;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get x() { return this.loginForm.controls; }
  onsignup() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.value.email.toLowerCase() === 'admin@gmail.com' && this.loginForm.value.password.toLowerCase() == 'admin123') {

      this.loginUser = this.loginForm.value.email.toLowerCase();
      this.loginUser = this.loginUser.split('@')
      this.loginUser = this.loginUser[0]
      this.toastr.successToastr(`Wellcome to ${this.loginUser}`, 'Success');
      localStorage.setItem('User', this.loginUser);
      this.router.navigate(['/home'])
    }
    else {
      if (this.loginForm.value.email.toLowerCase() != 'admin@gmail.com' && this.loginForm.value.password.toLowerCase() != 'admin123') {
        this.toastr.errorToastr('User Name & Password are wrong', 'Fail!');
      } else if (this.loginForm.value.email.toLowerCase() != 'admin@gmail.com') {
        this.toastr.errorToastr('User Name is wrong', 'Fail!');
      } else if (this.loginForm.value.password.toLowerCase() != 'admin123') {
        this.toastr.errorToastr(' Password is wrong', 'Fail!');
      }
    }


  }


}


