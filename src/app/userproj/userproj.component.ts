import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrService } from 'ngx-toastr'
import { ConfirmpopupComponent } from '../confirmpopup/confirmpopup.component';



@Component({
  selector: 'app-userproj',
  templateUrl: './userproj.component.html',
  styleUrls: ['./userproj.component.css']
})
export class UserprojComponent {
  constructor(private service: AuthService, 
    private builder: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private dialog: MatDialog,
    private form: MatFormFieldModule) {
    this.LoadProj();
  }
  projlist: any;
  dataSource: any;
  anslist: any;
  editdata: any;
  response: any;
  code: any;

  volform = this.builder.group({
    ans: this.builder.control(''),
  
  });
  
  LoadProj() {
    this.service.GetAllProj().subscribe(res => {
      this.projlist = res;
      this.dataSource = new MatTableDataSource(this.projlist);
    });
  }

  confirm(){
    const popup = this.dialog.open(ConfirmpopupComponent, {
      enterAnimationDuration: '700ms',
      exitAnimationDuration: '500ms',
      width: '70%',
     
    })
    popup.afterClosed().subscribe(res => {
      
    });
  }


}
