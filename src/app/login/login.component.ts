import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Login</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label for="username">Username:</label>
      <input id="username" formControlName="username" type="text" />
      <br />
      <label for="password">Password:</label>
      <input id="password" formControlName="password" type="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  `,
  styles: [],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      // Beispiel-Validierung (kein Backend-Anruf)
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === 'admin') {
        alert('Login erfolgreich!');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Ungültige Anmeldedaten!');
      }
    }
  }
}
