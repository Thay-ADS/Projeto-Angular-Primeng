import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
