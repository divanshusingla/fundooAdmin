import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './authGuard/auth.guard';
import { ApproveReplyComponent } from './components/approve-reply/approve-reply.component';

const routes: Route[] = [
  {path : '', redirectTo : '/login' , pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard]},
  {path : 'approveAnswers', component : ApproveReplyComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
