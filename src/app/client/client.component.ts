import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  constructor(private http:HttpClient) { }

  funcao() {
    console.log("Veio pra cá");
  }

  getClients(){
    this.http.get('http://3.128.249.166:8000/api/clients/').subscribe(
      response => {
        return response;
      }
    );
  }
}
