import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { routes } from './app.routes';

@NgModule({
    declarations: [],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), AppComponent, MainpageComponent],
    providers: [],
    bootstrap: [LoginComponent],
})
export class AppModule {}
