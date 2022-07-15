import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddQuestionsComponent } from './admin-add-questions/admin-add-questions.component';
import { AdminAuthGuardGuard } from './admin-auth-guard.guard';
import { AdminEditQuestionComponent } from './admin-edit-question/admin-edit-question.component';
import { AdminGetResultsComponent } from './admin-get-results/admin-get-results.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminQuestionsListComponent } from './admin-questions-list/admin-questions-list.component';
import { ChangeAdminPasswordComponent } from './change-admin-password/change-admin-password.component';
import { ChangeStudentPasswordComponent } from './change-student-password/change-student-password.component';
import { MyAuthGuardGuard } from './my-auth-guard.guard';
import { MyTestAuthGuardGuard } from './my-test-auth-guard.guard';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentLogoutComponent } from './student-logout/student-logout.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentTestHistoryComponent } from './student-test-history/student-test-history.component';
import { TestFinalPageComponent } from './test-final-page/test-final-page.component';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestReviewComponent } from './test-review/test-review.component';

const routes: Routes = [

  { path: "", redirectTo: "student-login", pathMatch: 'full' },
  { path: "student-login", pathMatch: 'full', component: StudentLoginComponent },
  {
    path: "student-home", pathMatch: 'full', component: StudentHomeComponent,
    canActivate: [MyAuthGuardGuard]
  },

  {
    path: "change-student-password", pathMatch: 'full', component: ChangeStudentPasswordComponent,
    canActivate: [MyAuthGuardGuard]
  },

  {
    path: "student-logout", pathMatch: 'full', component: StudentLogoutComponent,
    canActivate: [MyAuthGuardGuard]
  },
  {
    path: "test-home", pathMatch: 'full', component: TestHomeComponent,
    canActivate: [MyAuthGuardGuard, MyTestAuthGuardGuard]
  },
  {
    path: "test-review", pathMatch: 'full', component: TestReviewComponent,
    canActivate: [MyAuthGuardGuard, MyTestAuthGuardGuard]
  },

  {
    path: "test-final-page", pathMatch: 'full', component: TestFinalPageComponent,
    canActivate: [MyAuthGuardGuard, MyTestAuthGuardGuard]
  },

  {
    path: "student-test-history", pathMatch: 'full', component: StudentTestHistoryComponent,
    canActivate: [MyAuthGuardGuard]
  },

  {
    path: "student-signup", pathMatch: 'full', component: StudentSignupComponent
  },

  {
    path: "admin-login", pathMatch: 'full', component: AdminLoginComponent
  },

  {
    path: "admin-home", pathMatch: 'full', component: AdminHomeComponent,
    canActivate: [AdminAuthGuardGuard]
  },

  {
    path: "admin-logout", pathMatch: 'full', component: AdminLogoutComponent,
    canActivate: [AdminAuthGuardGuard]
  },
  {
    path: "admin-questions-list", pathMatch: 'full', component: AdminQuestionsListComponent,
    canActivate: [AdminAuthGuardGuard]
  },
  {
    path: "admin-add-questions", pathMatch: 'full', component: AdminAddQuestionsComponent,
    canActivate: [AdminAuthGuardGuard]
  },

  {
    path: "change-admin-password", pathMatch: 'full', component: ChangeAdminPasswordComponent,
    canActivate: [AdminAuthGuardGuard]
  },
  {
    path: "admin-get-results", pathMatch: 'full', component: AdminGetResultsComponent,
    canActivate: [AdminAuthGuardGuard]
  },

  {
    path: "admin-edit-question/:id", pathMatch: 'full', component: AdminEditQuestionComponent,
    canActivate: [AdminAuthGuardGuard]
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
