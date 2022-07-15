import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Result2 } from '../result2';

@Component({
  selector: 'app-admin-get-results',
  templateUrl: './admin-get-results.component.html',
  styleUrls: ['./admin-get-results.component.css']
})
export class AdminGetResultsComponent implements OnInit {
  res: Result2[] = [];
  searchText = '';
  constructor(private as: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.as.getResults().subscribe(response => this.res = response);

  }
  goBack() {

    this.router.navigate(['/admin-home']);
  }
}
