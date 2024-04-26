import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register_form: FormGroup;
  constructor() {
    this.register_form = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),

        // Validators.pattern('[a-zA-Z0-9]*'),
      ]),
      ConfirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  formValidate() {
    if (this.register_form.valid) {
      console.log('success !');
    }
  }
  @Input() parentMessage?: boolean;
  @Output() childMessage = new EventEmitter<boolean>();
  Register() {
    console.log('in the child class', this.parentMessage);
    this.childMessage.emit(!this.parentMessage);

    console.log('its working');
  }
}
