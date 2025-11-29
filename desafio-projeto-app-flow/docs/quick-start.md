## Quick Start — Exemplos de request

Assumindo que o servidor está rodando em `http://localhost:3000`.

- Listar todos os episódios:

```bash
curl -sS http://localhost:3000/list
```

- Filtrar episódios por nome do podcast (`podcastName`):

```bash
curl -sS "http://localhost:3000/episode?podcastName=flow"
```

Exemplo de resposta (JSON):

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde","esporte","bodybuilder"]
  }
]
```

Obs: para rodar em desenvolvimento com variáveis de ambiente:

```bash
cp .env.example .env
npm install
npm run start:dev
```
