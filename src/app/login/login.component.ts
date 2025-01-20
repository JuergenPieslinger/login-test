import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/']); // Weiterleitung nach erfolgreichem Login
      console.log("Erfolgreich")
    } else {
      this.errorMessage = 'Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.';
    }
  }
}
