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
    this.authService.singin(this.user).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
          this.router.navigate(['home']);
      }
    )
  }

  Register (){
    this.authService.register_user(this.user).subscribe({
      next: resp => {
        if (!resp){
          alert('Usuario cadastrado com sucesso')
        }   else {
          alert('Já existe usuário '+ this.user.Email + ' cadastrado!!')
        }
      },
      error: ({ error }) => console.log(`${error}`),
    });
  }

  Logoff(){
    alert ('logoff');
    localStorage.removeItem('token');
  }
}
