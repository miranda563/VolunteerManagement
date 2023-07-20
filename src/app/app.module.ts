import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CprojectComponent } from './cproject/cproject.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { PlistComponent } from './plist/plist.component';
import { MatIconModule } from '@angular/material/icon';
import { UserprojComponent } from './userproj/userproj.component';
import { ConfirmpopupComponent } from './confirmpopup/confirmpopup.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserlistingComponent,
    UpdatepopupComponent,
    UserDashboardComponent,
    CprojectComponent,
    LandingComponent,
    ProjectsComponent,
    PlistComponent,
    UserprojComponent,
    ConfirmpopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    FormsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
