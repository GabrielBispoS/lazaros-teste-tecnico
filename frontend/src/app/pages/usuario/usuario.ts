import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { UsuarioService } from '../../services/usuario';
import { PerfilService } from '../../services/perfil';
import { Usuario } from '../../models/usuario.model';
import { Perfil } from '../../models/perfil.model';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatButtonModule, 
    MatInputModule, MatFormFieldModule, MatIconModule, MatSelectModule
  ],
  templateUrl: './usuario.html'
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  perfisDisponiveis: Perfil[] = [];
  colunas: string[] = ['id', 'nome', 'perfis', 'acoes'];

  usuarioAtual: Usuario = { nome: '', perfis: [] };
  editando = false;

  constructor(
    private usuarioService: UsuarioService,
    private perfilService: PerfilService
  ) {}

  ngOnInit(): void {
    this.carregarUsuarios();
    this.carregarPerfis();
  }

  carregarUsuarios(): void {
    this.usuarioService.listarTodos().subscribe(dados => this.usuarios = dados);
  }

  carregarPerfis(): void {
    this.perfilService.listarTodos().subscribe(dados => this.perfisDisponiveis = dados);
  }

  compararPerfis(o1: Perfil, o2: Perfil): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  salvar(): void {
    if (!this.usuarioAtual.nome || this.usuarioAtual.nome.trim().length < 10) {
      alert('O nome do usuário deve ter no mínimo 10 caracteres.');
      return;
    }

    if (!this.usuarioAtual.perfis || this.usuarioAtual.perfis.length === 0) {
      alert('Selecione ao menos um perfil para o usuário!');
      return;
    }

    if (this.editando && this.usuarioAtual.id) {
      this.usuarioService.atualizar(this.usuarioAtual.id, this.usuarioAtual).subscribe({
        next: () => {
          this.resetar();
          this.carregarUsuarios();
        },
        error: (err) => alert('Erro ao atualizar: ' + err.error.message)
      });
    } else {
      this.usuarioService.salvar(this.usuarioAtual).subscribe({
        next: () => {
          this.resetar();
          this.carregarUsuarios();
        },
        error: (err) => alert('Erro ao salvar: ' + err.error.message)
      });
    }
  }

  editar(usuario: Usuario): void {
    this.usuarioAtual = { ...usuario, perfis: [...usuario.perfis] };
    this.editando = true;
  }

  deletar(id: number): void {
    if (confirm('Excluir este usuário?')) {
      this.usuarioService.deletar(id).subscribe(() => this.carregarUsuarios());
    }
  }

  resetar(): void {
    this.usuarioAtual = { nome: '', perfis: [] };
    this.editando = false;
  }
}