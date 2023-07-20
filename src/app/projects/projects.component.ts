import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private service: AuthService, private builder: FormBuilder, private router: Router, private dialog: MatDialog) {
    this.LoadProj();
  }
  projlist: any;
  dataSource: any;
  row: any;
  
  LoadProj() {
    this.service.GetAllProj().subscribe(res => {
      this.projlist = res;
      this.dataSource = new MatTableDataSource(this.projlist);
      
    });
  }
  rowClicked(row: any) {
    this.router.navigate(['plist']);
    console.log('Row clicked:', row);
  }

  displayedColumns: string[] = [ 'title'];
 

}