import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { CprojectComponent } from './cproject/cproject.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { PlistComponent } from './plist/plist.component';
import { UserprojComponent } from './userproj/userproj.component';
import { ConfirmpopupComponent } from './confirmpopup/confirmpopup.component';


const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'landing', component:LandingComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'user', component:UserlistingComponent},
  {path:'user-dashboard', component:UserDashboardComponent},
  {path:'cproject', component:CprojectComponent},
  {path:'project', component:ProjectsComponent},
  {path:'plist', component:PlistComponent},
  {path:'userproj', component:UserprojComponent},
  {path:'confirmpopup', component:ConfirmpopupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
