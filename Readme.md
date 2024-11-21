# API Documentation

## Auth Routes

### 1. **POST /create-credentials**

Cria um novo usuário para autenticação.

#### Request Body:

```json
{
  "name": "string", // Nome do usuário
  "email": "string", // Email do usuário
  "password": "string" // Senha do usuário
}
```

#### Response (Sucesso):

- Status: `201 Created`

```json
{
  "name": "USER_CREATED",
  "message": "usuário criado com sucesso",
  "statusCode": 201
}
```

#### Response (Erro):

- Status: `500 Internal Server Error`

```json
{
  "name": "Error Name",
  "message": "Error Message",
  "statusCode": 500
}
```

---

### 2. **POST /login**

Realiza o login do usuário, retornando um token JWT.

#### Request Body:

```json
{
  "email": "string", // Email do usuário
  "password": "string" // Senha do usuário
}
```

#### Response (Sucesso):

- Status: `200 OK`

```json
{
  "name": "LOGIN_SUCCESS",
  "message": "Login realizado com sucesso.",
  "statusCode": 200,
  "token": "string" // Token JWT gerado
}
```

#### Response (Erro):

- Status: `404 Not Found`

```json
{
  "name": "Error Name",
  "message": "Error Message",
  "statusCode": 404
}
```

---

## Collaborator Routes

### 1. **GET /list/:role_id**

Lista todos os colaboradores de um determinado cargo.

#### Request Parameters:

- `role_id`: ID do cargo.

#### Response (Sucesso):

- Status: `200 OK`

```json
{
  "name": "COLLABORATOR_OBTAINED",
  "message": "Colaboradores obtidos com sucesso.",
  "statusCode": 200,
  "data": [
    // Lista de colaboradores
    {
      "_id": "string",
      "name": "string",
      "position": "string",
      "admission": "string",
      "phone": "string",
      "role_id": "string"
    }
    // outros colaboradores...
  ]
}
```

#### Response (Erro):

- Status: `404 Not Found`

```json
{
  "name": "Error Name",
  "message": "Error Message",
  "statusCode": 404
}
```

---

### 2. **GET /:role_id/:id**

Obtém os detalhes de um colaborador específico pelo ID.

#### Request Parameters:

- `role_id`: ID do cargo.
- `id`: ID do colaborador.

#### Response (Sucesso):

- Status: `200 OK`

```json
{
  "name": "COLLABORATOR_OBTAINED",
  "message": "Colaborador obtido com sucesso por ID.",
  "statusCode": 200,
  "data": {
    "_id": "string",
    "name": "string",
    "position": "string",
    "admission": "string",
    "phone": "string",
    "role_id": "string"
  }
}
```

#### Response (Erro):

- Status: `500 Internal Server Error`

```json
{
  "name": "Error Name",
  "message": "Error Message",
  "statusCode": 500
}
```

---

### 3. **POST /create**

Cria um novo colaborador.

#### Request Body:

```json
{
  "name": "string", // Nome do colaborador
  "position": "string", // Cargo do colaborador
  "admission": "string", // Data de admissão
  "phone": "string", // Telefone do colaborador
  "role_id": "string" // ID do cargo (ref para "authenticated-users")
}
```

#### Response (Sucesso):

- Status: `201 Created`

```json
{
  "name": "COLLABORATOR_CREATED",
  "message": "Colaborador criado com Sucesso.",
  "statusCode": 201,
  "data": {
    "_id": "string",
    "name": "string",
    "position": "string",
    "admission": "string",
    "phone": "string",
    "role_id": "string"
  }
}
```

#### Response (Erro):

- Status: `401 Unauthorized`

```json
{
  "name": "Error Name",
  "message": "Error Message",
  "statusCode": 401
}
```

---

### 4. **PUT /:id**

Atualiza os dados de um colaborador existente.

#### Request Parameters:

- `id`: ID do colaborador.

#### Request Body:

```json
{
  "name": "string", // Nome do colaborador
  "position": "string", // Cargo do colaborador
  "admission": "string", // Data de admissão
  "phone": "string" // Telefone do colaborador
}
```

#### Response (Sucesso):

- Status: `200 OK`

```json
{
  "name": "UPDATED_COLLABORATOR",
  "message": "Colaborador atualizado com sucesso.",
  "statusCode": 200,
  "data": {
    "_id": "string",
    "name": "string",
    "position": "string",
    "admission": "string",
    "phone": "string",
    "role_id": "string"
  }
}
```

#### Response (Erro):

- Status: `500 Internal Server Error`

```json
{
  "name": "Error Name",
  "message": "Error Message",
  "statusCode": 500
}
```

---

### 5. **DELETE /:id**

Exclui um colaborador existente.

#### Request Parameters:

- `id`: ID do colaborador.

#### Response (Sucesso):

- Status: `200 OK`

```json
{
  "name": "DELETED_COLLABORATOR",
  "message": "Colaborador excluído com sucesso.",
  "statusCode": 200,
  "data": {
    "_id": "string",
    "name": "string",
    "position": "string",
    "admission": "string",
    "phone": "string",
    "role_id": "string"
  }
}
```

#### Response (Erro):

- Status: `500 Internal Server Error`

```json
{
  "name": "Error Name",
  "message": "Error Message",
  "statusCode": 500
}
```
