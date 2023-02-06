import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  title = 'Formulario';
  productForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form->', this.productForm.value);
  }

  initForm(): FormGroup{
    //propiedades del formulario. Se declara en el constructor
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      precio: ['', [Validators.required]]
    })
  }
}
