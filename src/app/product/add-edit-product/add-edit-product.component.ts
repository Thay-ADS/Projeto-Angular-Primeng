import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  
  @Input() displayAddModal=false;


  showAddModal(){
    this.displayAddModal=true;
}
}
