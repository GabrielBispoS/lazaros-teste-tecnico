package com.example.lazaros.lazaro_teste_tecnico.repository;

import com.example.lazaros.lazaro_teste_tecnico.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}