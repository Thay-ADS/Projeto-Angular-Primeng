import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

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



  item:any= [];

  constructor() { }

    ngOnInit() {
     


    this.basicData={
      labels:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],
      datasets:[{
        labels:'2022',
        data:[10,20,30,40,50,60,70,80,90,100,110,120],
        backgoundColor:["red"],
        borderColor:["black"],
        borderWidth:1
      },
     {
       labels:'2023',
       data:[10,20,30,40,50,60,70,80,90,100,110,120],
       backgoundColor:["blue"],
       borderColor:["black"],
        borderWidth:1
     }             
    ]
    };
    this.basicOptions={
      plugins:{
        title:{
          display:true,
          text:"Gráfico de Receitas"
   }
  }
    }
    this.item = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-plus'},
                       
                    
                {label: 'Open'},
                {label: 'Quit'},
                
            
              {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
      ]

      this.items=[
      {
        label :"Dashboards",
        
        items:[
          {label:"E-Commerce", icon: "pi pi-fw pi-home",routerLink:"/"},
          
        ]
      },
     
      {
        label:"Itens", 
        items:[
          
          {label:"Visualizar",routerLink:"/produtos",
          icon: "pi pi-fw pi-pencil",
          
        },

        ]
      },
      {
        label:"Clientes",
        
        items:[
          
          {label:"Visualizar",routerLink:"/clientes",
          icon: "pi pi-fw pi-pencil",
          
        },
        
        ]
      },
    ]
  }
}
