package com.example.lazaros.lazaro_teste_tecnico.service;

import com.example.lazaros.lazaro_teste_tecnico.domain.Usuario;
import com.example.lazaros.lazaro_teste_tecnico.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;
    private final PerfilService perfilService;

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    public Usuario buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado."));
    }

    public Usuario salvar(Usuario usuario) {
        return repository.save(usuario);
    }

    public Usuario atualizar(Long id, Usuario usuarioAtualizado) {
        Usuario usuarioExistente = buscarPorId(id);
        usuarioExistente.setNome(usuarioAtualizado.getNome());
        usuarioExistente.setPerfis(usuarioAtualizado.getPerfis());
        return repository.save(usuarioExistente);
    }

    public void deletar(Long id) {
        Usuario usuario = buscarPorId(id);
        repository.delete(usuario);
    }
}