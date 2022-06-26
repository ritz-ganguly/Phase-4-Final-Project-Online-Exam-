import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { Result } from '../result';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit {
  static questionSet: Question[] = [];
  static selectedIndex: number;
  static questionReady: boolean = false;
  static callCounter: number = 0;
  res = {} as Result;
  constructor(private ss: StudentServiceService, private router: Router) {

    TestHomeComponent.callCounter++;
    if (TestHomeComponent.callCounter == 1) {
      this.ss.getTestQuestion(sessionStorage.getItem("testChosen")).
        subscribe(response => {
          TestHomeComponent.questionSet = response;
          //console.log(this.questionSet);
          for (var q of TestHomeComponent.questionSet) {

            q.repliedAnswer = "";
          }
          TestHomeComponent.questionReady = true;
        });



      TestHomeComponent.selectedIndex = 0;
    }
  }

  ngOnInit(): void {


  }


  previous() {
    if (TestHomeComponent.selectedIndex === 0) {
      TestHomeComponent.selectedIndex = TestHomeComponent.questionSet.length - 1;

    }

    else {
      --TestHomeComponent.selectedIndex;
    }
    //console.log(this.questionSet);

  }

  next() {

    if (TestHomeComponent.selectedIndex === TestHomeComponent.questionSet.length - 1) {
      TestHomeComponent.selectedIndex = 0;
    }

    else {
      ++TestHomeComponent.selectedIndex;
    }

    //console.log(this.questionSet);

  }

  submitTest() {

    let totalMarks = TestHomeComponent.questionSet.length;
    let marksObtained = 0;
    let totalAnswered = 0;
    for (var q of TestHomeComponent.questionSet) {
      if (q.answer === q.repliedAnswer) {
        marksObtained = marksObtained + 1;
      }
      if (q.repliedAnswer !== "") {
        totalAnswered = totalAnswered + 1;
      }

    }

    console.log("marks total = " + totalMarks);
    sessionStorage.setItem("marksObtained", String(marksObtained));

    console.log("marks obtained =" + marksObtained);

    sessionStorage.setItem("totalMarks", String(totalMarks));

    sessionStorage.setItem("totalAnswered", String(totalAnswered));
    console.log("Total answered = " + totalAnswered);

    let wrongAnswered = totalAnswered - marksObtained;

    sessionStorage.setItem("wrongAnswered", String(wrongAnswered));
    console.log("Wrong answered = " + wrongAnswered);

    let unAnswered = totalMarks - totalAnswered;

    sessionStorage.setItem("unAnswered", String(unAnswered));
    console.log("Unanswered = " + unAnswered);



    this.res.marksObtained = marksObtained;
    this.res.testType = String(sessionStorage.getItem("testChosen"));
    this.res.totalMarks = totalMarks;

    this.res.testDate = new Date();
    this.ss.insertResult(this.res).subscribe(response => console.log(response));


    this.router.navigate(['/test-final-page']);



  }
  review() {
    sessionStorage.setItem("questionSet", JSON.stringify(TestHomeComponent.questionSet));
    this.router.navigate(['/test-review']);

  }


  get staticquestionSet() {

    return TestHomeComponent.questionSet;
  }

  get staticselectedIndex() {

    return TestHomeComponent.selectedIndex;
  }


  get staticquestionReady() {

    return TestHomeComponent.questionReady;
  }
}
