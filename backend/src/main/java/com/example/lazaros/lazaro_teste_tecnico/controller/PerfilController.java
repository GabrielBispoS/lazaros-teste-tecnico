package com.example.lazaros.lazaro_teste_tecnico.controller;

import com.example.lazaros.lazaro_teste_tecnico.domain.Perfil;
import com.example.lazaros.lazaro_teste_tecnico.service.PerfilService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/perfis")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class PerfilController {

    private final PerfilService service;

    @GetMapping
    public List<Perfil> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public Perfil buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Perfil salvar(@RequestBody @Valid Perfil perfil) {
        return service.salvar(perfil);
    }

    @PutMapping("/{id}")
    public Perfil atualizar(@PathVariable Long id, @RequestBody @Valid Perfil perfil) {
        return service.atualizar(id, perfil);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}