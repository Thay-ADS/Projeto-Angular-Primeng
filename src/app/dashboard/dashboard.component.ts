import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  basicData:any;

  ngOnInit(){
    this.basicData{
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
     }
                  
                
]
}
}
}
