import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product.component';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEditProductComponent,
    
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule
    
  ],
  exports:[AddEditProductComponent]
})
export class AddEditProductModule { }
