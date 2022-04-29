import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {  }
  canActivate(): boolean {
    if(!this.authService.isAuth()){
      console.log('Usuario sem Autorization');

      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
