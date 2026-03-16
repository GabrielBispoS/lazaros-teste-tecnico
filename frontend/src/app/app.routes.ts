import { Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil';
import { UsuarioComponent } from './pages/usuario/usuario';

export const routes: Routes = [
  { path: 'perfis', component: PerfilComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];