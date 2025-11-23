import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [authGuard],
        loadComponent: () => import('./components/header/header.component').then(m => m.HeaderComponent),
        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            // Redirecionar a rota vazia do header para home
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
];
