import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-change-student-password',
  templateUrl: './change-student-password.component.html',
  styleUrls: ['./change-student-password.component.css']
})
export class ChangeStudentPasswordComponent implements OnInit {
  student = {} as Student;
  constructor(private ss: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    this.ss.changePassword(this.student).subscribe(response => {

      if (response === true) {
        sessionStorage.clear();
        this.router.navigate(['/student-login']);

      }

    });
  }

}
