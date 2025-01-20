import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Angular App</h1>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
