import { Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil';

export const routes: Routes = [
  { path: 'perfis', component: PerfilComponent },
  { path: '', redirectTo: '/perfis', pathMatch: 'full' } 
];