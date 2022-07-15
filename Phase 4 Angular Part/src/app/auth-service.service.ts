import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  getToken() {

    return !!sessionStorage.getItem("isUserLoggedIn");
  }
}
