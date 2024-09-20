import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  basicData:any;
  basicOptions:any;
  items:MenuItem[]|undefined;
  
  pageSize = 10;  
  currentpage = 2;
  first:any;
  templates:[]=[]




  constructor() { }

    ngOnInit() {
     


    this.basicData={
      labels:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],
      datasets:[{
        label:'2022',
        data:[10,20,30,40,50,60,70,80,90,100,110,120],
        backgroundColor:["red"],
        borderColor:["black"],
        borderWidth:1
      },
     {
       label:'2023',
       data:[10,20,30,40,50,60,70,80,90,100,110,120],
       backgroundColor:["blue"],
       borderColor:["black"],
        borderWidth:1
     }             
    ]
    };
    this.basicOptions={
      plugins:{
        title:{
          display:true,
          text:"Gráfico de Receitas",
          backgroundColor:["white"]
   }
  }
    }
   
      this.items=[
      {
        label :"Dashboards",
        
        items:[
          {label:"E-Commerce", icon: "pi pi-fw pi-home",url:"http://localhost:4200/"},
          
        ]
      },
     
      {
        label:"Itens", 
        items:[
          
          {label:"Visualizar",routerLink:["/produtos"],
          icon: "pi pi-fw pi-pencil",
          
        },

        ]
      },
      {
        label:"Clientes",
        
        items:[
          
          {label:"Visualizar",routerLink:["/clientes"],
          icon: "pi pi-fw pi-pencil",
          
        },
        
        ]
      },
    ]
  }
}
