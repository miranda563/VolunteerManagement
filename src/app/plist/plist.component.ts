import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router';


@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent {
  constructor(private service: AuthService, private builder: FormBuilder, private router: Router, private dialog: MatDialog) {
    this.LoadProj(), this.LoadVolunteer()}
    projlist: any;

    dataSource: any;
    volist: any;
    displayedColumns: string[] = [ 'vname'];
    LoadProj() {
      this.service.GetAllProj().subscribe(res => {
        this.projlist = res;
        this.dataSource = new MatTableDataSource(this.projlist);
      });
    }
    LoadVolunteer(){
      this.service.GetVol().subscribe(res => {
        this.volist = res;
        this.dataSource = new MatTableDataSource(this.volist);
      });
    }
   
    
    
}
