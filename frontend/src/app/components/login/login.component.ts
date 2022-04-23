import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: 'email@gmail.com',
    password: '123'
  }

  constructor() { }

  ngOnInit(): void {
  }
  Login() {
    alert('asdasdasd')
    console.log(this.user.email, this.user.password)

  }

}
