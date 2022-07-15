import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-final-page',
  templateUrl: './test-final-page.component.html',
  styleUrls: ['./test-final-page.component.css']
})
export class TestFinalPageComponent implements OnInit {
  totalMarks: number = 0;
  marksObtained: number = 0;
  totalAnswered: number = 0;
  wrongAnswered: number = 0;
  unAnswered: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.totalMarks = Number(sessionStorage.getItem("totalMarks"));
    this.marksObtained = Number(sessionStorage.getItem("marksObtained"));
    this.totalAnswered = Number(sessionStorage.getItem("totalAnswered"));
    this.wrongAnswered = Number(sessionStorage.getItem("wrongAnswered"));
    this.unAnswered = Number(sessionStorage.getItem("unAnswered"));

  }
  endTest() {

    sessionStorage.clear();
    this.router.navigate(['/student-login']);

  }
}
