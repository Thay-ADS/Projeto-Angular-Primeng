import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  users=[];
    constructor(){
    }
getUserList(){
  this.dashboardService.getUserList().subscribe(
    response=>this.users=response
  );
}
