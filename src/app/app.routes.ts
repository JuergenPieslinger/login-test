import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Login als Standardroute
  { path: 'dashboard', component: AppComponent }, // Beispiel für eine Dashboard-Route
];
