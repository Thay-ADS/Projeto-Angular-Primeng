import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {
  name: string = '';
  description: string = '';
  constructor(private http: HttpClient) {}
  
  @Input() displayAddModal=false;
  onSubmit(form: NgForm) {
    if(form.valid) {
      const dados = { name: this.name, description: this.description };
      this.http.post<any>('https://3.128.249.166:8000/api/itens/', dados).subscribe((response) => {
        console.log(response);
        this.displayAddModal = false
    }
    );
    }
  }

  showAddModal(){
    this.displayAddModal=true;
  }
}
1