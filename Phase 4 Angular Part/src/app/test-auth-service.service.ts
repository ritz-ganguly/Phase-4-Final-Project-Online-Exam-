import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestAuthServiceService {

  constructor() { }

  getToken() {

    return !!sessionStorage.getItem("testChosen");
  }
}
