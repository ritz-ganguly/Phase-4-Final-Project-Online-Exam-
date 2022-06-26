import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ChangeStudentPasswordComponent } from './change-student-password/change-student-password.component';
import { StudentLogoutComponent } from './student-logout/student-logout.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestReviewComponent } from './test-review/test-review.component';
import { TestFinalPageComponent } from './test-final-page/test-final-page.component';
import { StudentTestHistoryComponent } from './student-test-history/student-test-history.component';
import { ValidateEqualModule } from 'ng-validate-equal';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentHomeComponent,
    ChangeStudentPasswordComponent,
    StudentLogoutComponent,
    StudentSignupComponent,
    TestHomeComponent,
    TestReviewComponent,
    TestFinalPageComponent,
    StudentTestHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ValidateEqualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
