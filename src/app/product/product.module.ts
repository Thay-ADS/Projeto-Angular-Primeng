import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    AddEditProductModule,
    FormsModule
   
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
