import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  name: string = 'Jeremaias';
  description: string = 'Pedreiro';
  
  @Input() displayAddModal=false;
  onSubmit(form: NgForm) {
    if(form.valid) {
      alert();
    }
  }


  showAddModal(){
    this.displayAddModal=true;
}
}
