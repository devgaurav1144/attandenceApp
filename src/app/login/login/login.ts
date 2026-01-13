import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {

    this.loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[A-Za-z0-9!@#$%^&*()_+=\-{}[\]:;"'<>,.?/\\|`~]+$/)
      ]]
    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  submit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard'])

  }
}
