# Lázaro - Teste Técnico (Fullstack)

## Tecnologias Utilizadas

### **Backend**
* **Java 17** com **Spring Boot 4.0.3**
* **Spring Data JPA** & **Hibernate 7**
* **PostgreSQL 15** (Alpine Edition)
* **Bean Validation** para integridade de dados (Server-side)

### **Frontend**
* **Angular 19** (Standalone Components & Signals)
* **Angular Material** (Interface baseada em Material Design)
* **RxJS** para comunicação reativa com a API

### **Infraestrutura e DevOps**
* **Docker & Docker Compose** (Orquestração completa)
* **Multi-stage Builds**: Compilação automática do Java e Angular dentro do container (Build isolado)
* **Nginx**: Servidor web de alta performance para o Frontend

---

## Como Executar o Projeto

Graças ao uso de **Multi-stage Builds**, você não precisa ter Java, Maven ou Node.js instalados na sua máquina. O Docker cuida de todo o processo de compilação, empacotamento e execução.

### **Passo Único**

Na raiz do projeto (onde se encontra o arquivo `docker-compose.yml`), execute o comando:

```bash
sudo docker compose up --build -d
```

### Acesso à Aplicação
Interface Web: http://localhost:4200

Documentação/API: http://localhost:8080

### Regras de Negócio e Validações
### Perfis: 
    É necessário cadastrar ao menos um perfil antes de criar usuários. A descrição do perfil exige no mínimo 5 caracteres.

### Usuários:

O nome deve conter no mínimo 10 caracteres.

É obrigatória a seleção de pelo menos um perfil por usuário.

Interface com seleção múltipla (Select Multiple) para atribuição de cargos.