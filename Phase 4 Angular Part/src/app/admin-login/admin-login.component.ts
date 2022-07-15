import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin = {} as Admin;
  constructor(private as: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {

    this.as.login(this.admin).subscribe(response => {

      if (String(response) !== "failed") {
        sessionStorage.setItem("adminUserName", String(response));
        sessionStorage.setItem("isAdminLoggedIn", "true");
        this.router.navigate(['/admin-home']);
      }

      if (String(response) === "failed") {

        alert("Invalid credentials");
        this.router.navigate(['/admin-login']);

      }
    });
  }

}
