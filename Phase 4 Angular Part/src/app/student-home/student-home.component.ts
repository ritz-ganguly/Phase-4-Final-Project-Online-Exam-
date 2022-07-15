import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  questionTypes = {};
  testChosen = '';
  constructor(private ss: StudentServiceService, private router: Router) {

  }

  ngOnInit(): void {

    this.ss.getUniqueQuestionType().subscribe(response => this.questionTypes = response);
  }

  onProceed() {

    sessionStorage.setItem("testChosen", this.testChosen);
    this.router.navigate(['/test-home']);
  }

}
