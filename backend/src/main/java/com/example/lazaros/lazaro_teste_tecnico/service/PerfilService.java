package com.example.lazaros.lazaro_teste_tecnico.service;

import com.example.lazaros.lazaro_teste_tecnico.domain.Perfil;
import com.example.lazaros.lazaro_teste_tecnico.repository.PerfilRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PerfilService {

    private final PerfilRepository repository;

    public List<Perfil> listarTodos() {
        return repository.findAll();
    }

    public Perfil buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Perfil não encontrado."));
    }

    public Perfil salvar(Perfil perfil) {
        return repository.save(perfil);
    }

    public Perfil atualizar(Long id, Perfil perfilAtualizado) {
        Perfil perfilExistente = buscarPorId(id);
        perfilExistente.setDescricao(perfilAtualizado.getDescricao());
        return repository.save(perfilExistente);
    }

    public void deletar(Long id) {
        Perfil perfil = buscarPorId(id);
        repository.delete(perfil);
    }
}