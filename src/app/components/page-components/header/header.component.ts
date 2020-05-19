import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }
  loginUser: any;
  ngOnInit() {
    this.loginUser = localStorage.getItem('User');
    if (this.loginUser != "admin") {
      this.router.navigate(["/login"])
    }

  }
  logout() {
    localStorage.removeItem('User');
    this.router.navigate(['/login'])
  }


}

