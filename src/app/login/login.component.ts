import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule
  ],
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin(): void {
    // Hier kannst du die Login-Prüfung hinzufügen
    const isAuthenticated = true; // Beispiel für erfolgreiche Authentifizierung

    if (isAuthenticated) {
      this.router.navigate(['/mainpage']);
    } else {
      alert('Login fehlgeschlagen!');
    }
  }
}
