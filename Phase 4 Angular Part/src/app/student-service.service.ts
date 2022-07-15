import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
import { Question } from './question';
import { Result } from './result';


@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private url = "http://localhost:8084/student";
  constructor(private httpClient: HttpClient) { }

  login(stud: Student) {

    return this.httpClient.post(this.url + '/signIn', stud, { responseType: 'text' });
  }

  changePassword(stud: Student) {
    const params = new HttpParams().append('uname', String(sessionStorage.getItem("studentUserName")));
    return this.httpClient.put(this.url + '/editstudentPassword', stud, { params: params });
  }

  getUniqueQuestionType() {

    return this.httpClient.get(this.url + '/getUniqueQuestionType');
  }

  getTestQuestion(testChosen: any) {

    return this.httpClient.get<Question[]>(this.url + '/getTestQuestions/' + testChosen);
  }

  insertResult(result: Result) {
    const params = new HttpParams().append('uname', String(sessionStorage.getItem("studentUserName")));
    return this.httpClient.post(this.url + '/generateResult', result, { params: params });


  }

  getTestHistory() {

    const params = new HttpParams().append('uname', String(sessionStorage.getItem("studentUserName")));

    return this.httpClient.get<Result[]>(this.url + '/studentTestHistory', { params: params });
  }
}
