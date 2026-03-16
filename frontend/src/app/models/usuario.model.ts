import { Perfil } from './perfil.model';

export interface Usuario {
  id?: number;
  nome: string;
  perfis: Perfil[];
}