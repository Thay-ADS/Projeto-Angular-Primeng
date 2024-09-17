import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { posix } from 'path';
import { MenuItem } from 'primeng/api';
import { Card } from 'primeng/card';
import { ColorPicker } from 'primeng/colorpicker';
import { MenuItemContent } from 'primeng/menu';
import { title } from 'process';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  items:MenuItem[]|undefined;
  
  data:any;
  options:any;
 
  pageSize = 10;  
  currentpage = 2;
  first:any;
  
 
  constructor() { }

  ngOnInit() {  
    this.options={
      plugins:{
        title:{
          display:true,
          text:"Unique visitor graph"
        }
      },
      elements:{
        bar:{
          backgroundColor:"black",
          
          
          borderWidth: '1200 px',

        },
        point:{
         
          pointRadius:0,
          
        },
        line:{
         
          stepped:true,
        }
      },
      
    };
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
          icon: "pi pi-fw pi-comment",
          
        },

        ]
      },
      {
        label:"Clientes",
        
        items:[
          
          {label:"Visualizar",routerLink:"/clientes",
          icon: "pi pi-fw pi-comment",
          
        },
        
        ]
      },
    ]
  }
}