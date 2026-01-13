import { Routes } from '@angular/router';
import { Login } from './login/login/login';
import { Dashboard } from './dashboard/dashboard/dashboard';

export const routes: Routes = [

    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard }

];
