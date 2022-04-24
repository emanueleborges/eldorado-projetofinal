import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    Email: 'email@gmail.com',
    Password: '123'
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  Login() {
    console.log(this.user.Email, this.user.Password)
    this.authService.singin(this.user).subscribe(
      (res:any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['private']);
      }
    )

  }

}
