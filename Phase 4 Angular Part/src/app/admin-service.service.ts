import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Question } from './question';
import { Result2 } from './result2';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private url = "http://localhost:8084/admin";
  constructor(private httpClient: HttpClient) { }

  login(adm: Admin) {

    return this.httpClient.post(this.url + '/signIn', adm, { responseType: 'text' });
  }

  getAllQuestions() {

    return this.httpClient.get<Question[]>(this.url + "/adminGetAllquestions");
  }

  actionDelete(q: Question) {

    return this.httpClient.delete(this.url + '/adminDeleteQuestion', { body: q });
  }

  addQuestion(q: Question) {

    return this.httpClient.post(this.url + '/adminAddQuestion', q);
  }

  changePassword(adm: Admin) {
    const params = new HttpParams().append('uname', String(sessionStorage.getItem("adminUserName")));
    return this.httpClient.put(this.url + '/editAdminPassword', adm, { params: params });

  }
  getResults() {

    return this.httpClient.get<Result2[]>(this.url + '/adminGetAllResults');
  }

  getQuestionByQuestionId(id: number) {

    return this.httpClient.get<Question[]>(this.url + '/getQuestionById/' + id);

  }

  editQuestion(q: Question) {

    return this.httpClient.put(this.url + '/adminEditQuestion', q);
  }
}
