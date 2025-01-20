import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Standard-Route zum Login
  { path: 'mainpage', component: MainpageComponent }, // Route zur Hauptseite
];
