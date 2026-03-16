import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { PerfilService } from '../../services/perfil';
import { Perfil } from '../../models/perfil.model';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatTableModule, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatIconModule
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class PerfilComponent implements OnInit {
  perfis: Perfil[] = [];
  colunasExibidas: string[] = ['id', 'descricao', 'acoes'];
  
  perfilAtual: Perfil = { descricao: '' };
  editando = false;

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.carregarPerfis();
  }

  carregarPerfis(): void {
    this.perfilService.listarTodos().subscribe({
      next: (dados) => this.perfis = dados,
      error: (err) => console.error('Erro ao carregar perfis', err)
    });
  }

  salvar(): void {
    if (!this.perfilAtual.descricao || this.perfilAtual.descricao.trim().length < 5) {
      alert('A descrição é obrigatória e deve ter no mínimo 5 caracteres.');
      return;
    }

    if (this.editando && this.perfilAtual.id) {
      this.perfilService.atualizar(this.perfilAtual.id, this.perfilAtual).subscribe(() => {
        this.resetarFormulario();
        this.carregarPerfis();
      });
    } else {
      this.perfilService.salvar(this.perfilAtual).subscribe(() => {
        this.resetarFormulario();
        this.carregarPerfis();
      });
    }
  }

  editar(perfil: Perfil): void {
    this.perfilAtual = { ...perfil };
    this.editando = true;
  }

  deletar(id: number): void {
    if (confirm('Tem certeza que deseja excluir este perfil?')) {
      this.perfilService.deletar(id).subscribe(() => {
        this.carregarPerfis();
      });
    }
  }

  cancelar(): void {
    this.resetarFormulario();
  }

  private resetarFormulario(): void {
    this.perfilAtual = { descricao: '' };
    this.editando = false;
  }
}