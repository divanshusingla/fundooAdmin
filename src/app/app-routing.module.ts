import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './authGuard/auth.guard';

const routes: Route[] = [
  {path : '', redirectTo : '/login' , pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
