import { Component, OnInit } from '@angular/core';

import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public home():void{
     this.router.navigateByUrl('home')
  }
}
