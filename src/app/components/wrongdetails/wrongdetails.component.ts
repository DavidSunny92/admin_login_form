import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrongdetails',
  templateUrl: './wrongdetails.component.html',
  styleUrls: ['./wrongdetails.component.css']
})
export class WrongdetailsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  onClick(){
 this.router.navigate(['/login']);
  }
}
