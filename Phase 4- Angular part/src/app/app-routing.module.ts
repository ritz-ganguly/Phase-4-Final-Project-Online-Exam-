import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
