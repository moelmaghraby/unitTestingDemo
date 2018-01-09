import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(!this.auth.currentUser){
      this.router.navigate(['/login']);
      return false;
    }
    return !!this.auth.currentUser

  }

}
