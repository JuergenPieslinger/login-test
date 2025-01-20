import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Simpler Loginprozess
    if (this.username === 'admin' && this.password === 'password') {
      alert('Login erfolgreich!');
      this.router.navigate(['/']);
    } else {
      alert('Login fehlgeschlagen. Bitte prüfen Sie Ihre Eingaben.');
    }
  }
}
