import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  student = {} as Student;
  loginSuccess: boolean = false;

  constructor(private ss: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.ss.login(this.student).subscribe(response => {
      if (String(response) !== "failed") {
        this.loginSuccess = true;
        sessionStorage.setItem("studentUserName", String(response));
        sessionStorage.setItem("isUserLoggedIn", "true");
        console.log(sessionStorage.getItem("studentUserName"));
        this.router.navigate(['/student-home']);


      }
      if (String(response) === "failed") {

        alert("Invalid credentials");
        this.router.navigate(['/student-login']);
      }

    });




  }
}
