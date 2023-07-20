import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/user';
  proj = 'http://localhost:3000/projectlist';
  volunteer = '  http://localhost:3000/volunteers';

  Getall() {
    return this.http.get(this.apiurl);
  }
  GetbyCode(code: any) {
    return this.http.get(this.apiurl + '/' + code);
  }
  Proceedregister(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  GetVolunteer(inputdata: any) {
    return this.http.post(this.volunteer, inputdata);
  }
  GetVol() {
    return this.http.get(this.volunteer);
  }
  Updateuser(code: any, inputdata: any) {
    return this.http.put(this.apiurl + '/' + code, inputdata);
  }
  GetAllRole() {
    return this.http.get(' http://localhost:3000/role');
  }
  isloggedin() {
    return sessionStorage.getItem('username') != null;
  }
  getuserrole() {
    return sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole')?.toString() : '';
  }
  GetAllProj() {
    return this.http.get(this.proj);
  }
  GetCode(code: any) {
    return this.http.get(this.proj + '/' + code);
  }
  Uploadproject(inputdata: any) {
    return this.http.post(this.proj, inputdata);
  }
 


}
