import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private builder: FormBuilder,
    private toastr: ToastrService, 
    private service: AuthService, 
    private router: Router) {

 }
 projectform = this.builder.group({
  ptitle: this.builder.control('', Validators.required),
  pdescription: this.builder.control('', Validators.required),
  skills: this.builder.control(''),
 })
}
