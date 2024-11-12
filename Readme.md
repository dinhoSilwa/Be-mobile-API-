# **Documentação da API: Colaboradores**

## **Base URL**

A URL base para as rotas é: `/api/collaborators/`

---

### **1. Criar um Colaborador**

- **URL:** `/api/collaborators/`
- **Método:** `POST`
- **Descrição:** Cria um novo colaborador.
- **Corpo da Requisição (JSON):**

```json
{
  "name": "John Doe",
  "position": "Software Engineer",
  "admission": "2023-05-15",
  "phone": "+1234567890"
}
```

- **Resposta de Sucesso (Status 201):**

```json
{
  "name": "John Doe",
  "position": "Software Engineer",
  "admission": "2023-05-15",
  "phone": "+1234567890"
}
```

- **Resposta de Erro (Status 500):**

```json
{
  "error": "Error creating Collaborator",
  "msg": "Detalhes do erro"
}
```

---

### **2. Obter um Colaborador**

- **URL:** `/api/collaborators/:id`
- **Método:** `GET`
- **Descrição:** Recupera um colaborador pelo ID.
- **Parâmetros de URL:**

  - `id`: ID do colaborador (obrigatório).

- **Resposta de Sucesso (Status 200):**

```json
{
  "collaborator": {
    "name": "John Doe",
    "position": "Software Engineer",
    "admission": "2023-05-15",
    "phone": "+1234567890"
  }
}
```

- **Resposta de Erro (Status 500):**

```json
{
  "error": "Error Fetching Collaborator",
  "msg": "Detalhes do erro"
}
```

---

### **3. Obter Todos os Colaboradores**

- **URL:** `/api/collaborators/`
- **Método:** `GET`
- **Descrição:** Recupera todos os colaboradores cadastrados.
- **Resposta de Sucesso (Status 200):**

```json
[
  {
    "name": "John Doe",
    "position": "Software Engineer",
    "admission": "2023-05-15",
    "phone": "+1234567890"
  },
  {
    "name": "Jane Doe",
    "position": "Product Manager",
    "admission": "2022-03-12",
    "phone": "+0987654321"
  }
]
```

- **Resposta de Erro (Status 404):**

```json
{
  "error": "Error To get All Collaborator",
  "msg": "Detalhes do erro"
}
```

---

### **4. Atualizar um Colaborador**

- **URL:** `/api/collaborators/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza as informações de um colaborador pelo ID.
- **Parâmetros de URL:**
  - `id`: ID do colaborador (obrigatório).
- **Corpo da Requisição (JSON):**

```json
{
  "name": "John Doe Updated",
  "position": "Senior Software Engineer",
  "admission": "2023-05-15",
  "phone": "+1234567890"
}
```

- **Resposta de Sucesso (Status 200):**

```json
{
  "name": "John Doe Updated",
  "position": "Senior Software Engineer",
  "admission": "2023-05-15",
  "phone": "+1234567890"
}
```

- **Resposta de Erro (Status 500):**

```json
{
  "error": "Error Updating Collaborator",
  "msg": "Detalhes do erro"
}
```

- **Resposta de Erro (Status 404 - Quando não encontrado):**

```json
{
  "message": "Collaborator Not Found"
}
```

---

### **5. Deletar um Colaborador**

- **URL:** `/api/collaborators/:id`
- **Método:** `DELETE`
- **Descrição:** Deleta um colaborador pelo ID.
- **Parâmetros de URL:**

  - `id`: ID do colaborador (obrigatório).

- **Resposta de Sucesso (Status 200):**

```json
{
  "Message": "Collaborator Deleted Successfully"
}
```

- **Resposta de Erro (Status 500):**

```json
{
  "message": "Error to Delete Collaborator"
}
```

- **Resposta de Erro (Status 404 - Quando não encontrado):**

```json
{
  "Message": "Collaborator Not Found"
}
```

---

## **Erros Comuns**

- **500 - Internal Server Error:** Ocorre em falhas no servidor ou ao processar a requisição.
- **404 - Not Found:** O recurso não foi encontrado (ex: colaborador não encontrado).
