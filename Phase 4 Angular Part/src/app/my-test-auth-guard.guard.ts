import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TestAuthServiceService } from './test-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyTestAuthGuardGuard implements CanActivate {
  constructor(private router: Router, private mts: TestAuthServiceService) {


  }
  canActivate(): boolean {
    if (!this.mts.getToken()) {
      alert("you did not choose the test subject.First choose then continue");
      this.router.navigate(['/student-home']);
    }
    return this.mts.getToken();
  }
}
