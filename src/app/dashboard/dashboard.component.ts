import { Component } from '@angular/core';

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


  products: Product[];

  selectedProduct: Product;

  items: MenuItem[];

  constructor(private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct)},
                {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct)}
        ];
    

    viewProduct(product: Product) {
        this.messageService.add({severity: 'info', summary: 'Product Selected', detail: product.name });
    }

    deleteProduct(product: Product) {
        this.products = this.products.filter((p) => p.id !== product.id);
        this.messageService.add({severity: 'info', summary: 'Product Deleted', detail: product.name});
        this.selectedProduct = null;
    }



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
    this.items = [
            {
                label: 'File',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];

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
