import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  constructor(private service: AuthService, private builder: FormBuilder, private dialog: MatDialog) {
    this.LoadUser();
  }
  userlist: any;
  dataSource: any;


  LoadUser() {
    this.service.Getall().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);

    });
  }
  displayedColumns: string[] = [ 'name', 'role', 'action'];
  Updateuser(code: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data: {
      usercode: code
      }
    })
    popup.afterClosed().subscribe(res => {
      this.LoadUser();
    });
  }
  opendialog() {

  }
}
