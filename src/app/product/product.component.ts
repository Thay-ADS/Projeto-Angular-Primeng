import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:Product[]=[];
  
  displayAddModal=false;
  constructor(private productService:ProductService, private http: HttpClient) {

  }
  ngOnInit():void{
    this.getProductList();

  }
  getProductList(){
    this.productService.getProducts().subscribe(
      response =>{
        this.products=response;
      }
    )

  }

  deletarProduto(event: Event, id:number) {
    event.preventDefault();
    let url = `https://3.128.249.166:8000/api/itens/${id}/`;
    this.http.delete<any>('https://3.128.249.166:8000/api/itens/').subscribe();
  }

  showAddModal(){
      this.displayAddModal=true;
  }
}
