import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test-review',
  templateUrl: './test-review.component.html',
  styleUrls: ['./test-review.component.css']
})
export class TestReviewComponent implements OnInit {
  qset: Question[] = [];
  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.qset = JSON.parse(sessionStorage.getItem("questionSet") || '{}');
  }


  back() {

    this.router.navigate(['/test-home']);
    //this.location.replaceState('/test-home');
  }

}
