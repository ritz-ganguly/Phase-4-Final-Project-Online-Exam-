import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-logout',
  templateUrl: './student-logout.component.html',
  styleUrls: ['./student-logout.component.css']
})
export class StudentLogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.router.navigate(['/student-login']);
  }

}
