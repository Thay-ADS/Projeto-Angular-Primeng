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
    
    this.data={
      labels:['Jan','Feb','Mar','Apr',"May",'Jun','July','Aug', 'Sept','Oct', 'Nov','Dec'],
      datasets:[{
        
        borderColor:['#e2725b'],
      
        label:"Plan",
        type:"line",
        
        backgroundColor:['#e2725b'],
        data:[500,550,500,550,600,650,700,750,800,850,900,600]

      },
      {
        label:"Groth actual",
        backgroundColor:['#ff007f'],
        data:[600,680,660,665,700,610,810,760,690,850, 800, 755]

      }

      ]
      
    };
   
    this.options={
      plugins:{
        title:{
          display:true,
          posix:screenLeft,
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
          {label:"E-Commerce", icon: "pi pi-fw pi-home",routerLink:""},
          
        ]
      },
     
      {
        label:"Produtos",
        
        items:[
          
          {label:"Criar",routerLink:"/produtos",
          icon: "pi pi-fw pi-comment",
          
        },
        {label:"Ler",
          icon: "pi pi-fw pi-comment",
          
        },
        {label:"Atualizar",
          icon: "pi pi-fw pi-comment",
          
        },
        {label:"Deletar",
          icon: "pi pi-fw pi-comment",
          
        },
          

      
        ]
        


      },
      {
        label:"Clientes",
        
        items:[
          
          {label:"Criar",
          icon: "pi pi-fw pi-comment",
          
        },
        {label:"Ler",
          icon: "pi pi-fw pi-comment",
          
        },
        {label:"Atualizar",
          icon: "pi pi-fw pi-comment",
          
        },
        {label:"Deletar",
          icon: "pi pi-fw pi-comment",
          
        },
          

      
        ]
        


      },
        
      
      
     
    

      
    ]
  }


}