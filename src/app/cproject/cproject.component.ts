import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cproject',
  templateUrl: './cproject.component.html',
  styleUrls: ['./cproject.component.css']
})
export class CprojectComponent {
  constructor(private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router) {
  }
  projectform = this.builder.group({
    title: this.builder.control('', Validators.required),
    dscrptn: this.builder.control('', Validators.required),

  });

  Uploadproject() {
    if (this.projectform.valid) {
      this.service.Uploadproject(this.projectform.value).subscribe(res => {
        this.toastr.success('Project Posted');
        this.router.navigate(['project']);
      });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
