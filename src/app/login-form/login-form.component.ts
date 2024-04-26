import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      isAccepted: new FormControl(false, [Validators.requiredTrue]),
    });
  }
  validateForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
  @Input() parentMessage?: boolean;
  @Output() childMessage = new EventEmitter<boolean>();
  Login() {
    console.log(this.parentMessage);
    this.parentMessage = !this.parentMessage;
    this.childMessage.emit(this.parentMessage);
  }
}
