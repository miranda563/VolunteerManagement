import { Component, Inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-confirmpopup',
  templateUrl: './confirmpopup.component.html',
  styleUrls: ['./confirmpopup.component.css']
})
export class ConfirmpopupComponent {
  constructor(
    private service: AuthService, 
    private builder: FormBuilder, 
    private router: Router,
    private toastr: ToastrService, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<ConfirmpopupComponent>
  ) {
  }

  volunteerform = this.builder.group({
    vname: this.builder.control('', Validators.required)
  })
  GetVolunteer(){
    if (this.volunteerform.valid) {
      this.service.GetVolunteer(this.volunteerform.value).subscribe(res => {
      this.toastr.success('Joined');
      this.dialog.close();
      this.router.navigate(['user-dashboard']);
      
    });
  }else {
    this.toastr.warning('Please enter valid data.');
  }
  }
}


