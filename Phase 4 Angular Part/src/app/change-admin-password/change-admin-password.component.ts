import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-change-admin-password',
  templateUrl: './change-admin-password.component.html',
  styleUrls: ['./change-admin-password.component.css']
})
export class ChangeAdminPasswordComponent implements OnInit {
  adm = {} as Admin;
  constructor(private router: Router, private as: AdminServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    this.as.changePassword(this.adm).subscribe(response => {

      if (Boolean(response) === true) {
        sessionStorage.clear();
        this.router.navigate(['/admin-login']);

      }

    })

  }
}
