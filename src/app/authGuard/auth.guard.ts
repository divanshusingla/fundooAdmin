import { Injectable, Inject} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private auth : AuthService,@Inject(Router) private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isLoggednIn())
      {
        // tokne is available as it is stored in the local stotage while user is logging in
    return true;
      }

      else{
        alert("unauthoried Access,You have to login first")
        this.router.navigate(["/login"]);
        return false;
      }
  }
  }
