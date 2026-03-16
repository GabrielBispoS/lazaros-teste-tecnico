import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private apiUrl = 'http://localhost:8080/api/perfis';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.apiUrl}/${id}`);
  }

  salvar(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.apiUrl, perfil);
  }

  atualizar(id: number, perfil: Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${this.apiUrl}/${id}`, perfil);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}