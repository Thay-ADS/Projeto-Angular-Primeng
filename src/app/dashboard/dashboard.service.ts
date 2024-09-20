import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  templates=[];
    constructor(private http:HttpClient){
    }
getUserList(){
  return this.http.get<any>('assets/db.json');
  );
}
