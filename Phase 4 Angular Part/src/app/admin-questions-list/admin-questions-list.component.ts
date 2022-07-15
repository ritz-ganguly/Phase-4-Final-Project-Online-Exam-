import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Question } from '../question';

@Component({
  selector: 'app-admin-questions-list',
  templateUrl: './admin-questions-list.component.html',
  styleUrls: ['./admin-questions-list.component.css']
})
export class AdminQuestionsListComponent implements OnInit {
  quest: Question[] = [];
  searchText = '';
  constructor(private as: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.as.getAllQuestions().subscribe(response => this.quest = response);

  }

  goBack() {
    this.router.navigate(['/admin-home']);
  }

  actionDelete(q: Question) {

    this.as.actionDelete(q).subscribe(response => {
      if (Boolean(response) === true) {

        this.as.getAllQuestions().subscribe(response => this.quest = response);


      }
    });
  }
}


