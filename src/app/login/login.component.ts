import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
