# node-mongo

Este é um projeto utilizado no curso da Alura para demonstrar a criação de uma API utilizando Node.js e Express.

## Descrição

Este projeto é uma API simples que permite a criação, leitura, atualização e exclusão de dados. Ele utiliza MongoDB como banco de dados e segue algumas práticas de desenvolvimento com Node.js, Express e MongoDB.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

### Endpoints de Autores

- `GET /authors` - Retorna todos os autores
- `GET /authors/:id` - Retorna um autor específico
- `POST /authors` - Cria um novo autor
- `PUT /authors/:id` - Atualiza um autor existente
- `DELETE /authors/:id` - Exclui um autor

### Endpoints de Livros

- `GET /books` - Retorna todos os livros
- `GET /books/:id` - Retorna um livro específico
- `POST /books` - Cria um novo livro
- `PUT /books/:id` - Atualiza um livro existente
- `DELETE /books/:id` - Exclui um livro

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
