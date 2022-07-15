import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Question } from '../question';

@Component({
  selector: 'app-admin-add-questions',
  templateUrl: './admin-add-questions.component.html',
  styleUrls: ['./admin-add-questions.component.css']
})
export class AdminAddQuestionsComponent implements OnInit {
  quest = {} as Question;
  constructor(private as: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {

    this.as.addQuestion(this.quest).subscribe(response => {
      if (Boolean(response) === true) {

        this.router.navigate(['/admin-home']);
      }

    });


  }
}
