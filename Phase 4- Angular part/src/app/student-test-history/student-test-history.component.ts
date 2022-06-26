import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-test-history',
  templateUrl: './student-test-history.component.html',
  styleUrls: ['./student-test-history.component.css']
})
export class StudentTestHistoryComponent implements OnInit {
  results: Result[] = [];
  constructor(private ss: StudentServiceService) { }

  ngOnInit(): void {
    this.ss.getTestHistory().subscribe(response => this.results = response);
  }

}
