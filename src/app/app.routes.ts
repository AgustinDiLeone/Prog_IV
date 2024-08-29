import { Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    {path: "bienvenido", component:BienvenidoComponent },
    {path: "error", component:ErrorComponent },
    {path: "login", component:LoginComponent },

];
