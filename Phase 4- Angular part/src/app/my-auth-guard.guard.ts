import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyAuthGuardGuard implements CanActivate {
  constructor(private router: Router, private ags: AuthServiceService) { }
  canActivate(): boolean {
    if (!this.ags.getToken()) {

      alert("you are not logged in. log in to continue");
      this.router.navigate(['/student-login']);

    }
    return this.ags.getToken();

  }
}
