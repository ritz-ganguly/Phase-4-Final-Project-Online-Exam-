import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Question } from '../question';


@Component({
  selector: 'app-admin-edit-question',
  templateUrl: './admin-edit-question.component.html',
  styleUrls: ['./admin-edit-question.component.css']
})
export class AdminEditQuestionComponent implements OnInit {
  id = 0;
  quest: Question[] = [];
  constructor(private route: ActivatedRoute, private as: AdminServiceService, private router: Router) {
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.as.getQuestionByQuestionId(this.id).subscribe(response =>

      this.quest = response
    );
  }

  onSubmit(form: any) {
    this.as.editQuestion(this.quest[0]).subscribe(
      response => {
        if (Boolean(response) === true) {
          this.router.navigate(['\admin-questions-list']);

        }

      }


    )

  }

}
