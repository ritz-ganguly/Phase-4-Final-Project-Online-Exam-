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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminQuestionsListComponent } from './admin-questions-list/admin-questions-list.component';
import { FilterByQuestionTypePipe } from './filter-by-question-type.pipe';
import { AdminAddQuestionsComponent } from './admin-add-questions/admin-add-questions.component';
import { ChangeAdminPasswordComponent } from './change-admin-password/change-admin-password.component';
import { AdminGetResultsComponent } from './admin-get-results/admin-get-results.component';
import { FilterResultByUserNamePipe } from './filter-result-by-user-name.pipe';
import { AdminEditQuestionComponent } from './admin-edit-question/admin-edit-question.component';

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
    StudentTestHistoryComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminLogoutComponent,
    AdminQuestionsListComponent,
    FilterByQuestionTypePipe,
    AdminAddQuestionsComponent,
    ChangeAdminPasswordComponent,
    AdminGetResultsComponent,
    FilterResultByUserNamePipe,
    AdminEditQuestionComponent
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
