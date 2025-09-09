import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Item } from '../lista/list.model';

@Component({
  selector: 'ns-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newItem: Item = { id: 0, title: '', description: '' };

  constructor(private router: RouterExtensions) {}

  // Validador personalizado: mínimo 3 caracteres para el título
  titleControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  submitForm(form: NgForm) {
    if (form.valid && this.titleControl.valid) {
      alert(`Item creado: ${this.newItem.title}`);
      this.router.navigate(['/list']);
    } else {
      alert('Por favor completa todos los campos y asegúrate que el título tenga al menos 3 caracteres.');
    }
  }
}