import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginSuccess = false;
  constructor() { }

  ngOnInit(): void {
    this.loginSuccess = false;
  }

  loginToApplication(){
    alert('--- Login to application successfully ---');
    this.loginSuccess = true;
  }

}
