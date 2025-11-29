# Formação Node.js Fundamentals — Projetos

Repositório com os desafios e projetos desenvolvidos durante a formação "Node.js Fundamentals" da DIO. Abaixo há um resumo curto de cada projeto, onde encontrá-lo no repositório e como rodá-lo localmente.

**Projetos**

- **Mario Kart.JS** (`desafio-projeto-mario-kart`): simula uma corrida entre dois jogadores usando mecânicas simples (RETA, CURVA, CONFRONTO). O projeto demonstra lógica de jogo, uso de objetos para personagens e regras de pontuação.
	- Como rodar: `cd desafio-projeto-mario-kart && npm run start`

- **Shopee Cart** (`desafio-projeto-shoppe-cart`): lógica de um carrinho de compras modularizado com serviços para adicionar, remover, listar itens e calcular total. Inclui validações básicas e formatação de moeda.
	- Como rodar: `cd desafio-projeto-shoppe-cart && npm run start`

- **Gerador de QR Code** (`desafio-projeto-qrcode`): utilitário para gerar QR codes no terminal e gerar senhas aleatórias. Suporta modo interativo via prompt e modo não-interativo via variáveis de ambiente (`AUTO_RUN`, `TOOL`, `QR_LINK`, `PASSWORD_LENGTH`, etc.).
	- Como rodar (interativo): `cd desafio-projeto-qrcode && npm run start`
	- Como rodar (não interativo exemplo):
		`AUTO_RUN=true TOOL=qrcode QR_LINK=https://example.com npm run start`

- **Podcast Manager (App Flow)** (`desafio-projeto-app-flow`): API em TypeScript que lista episódios de podcasts e permite filtrar por nome de podcast. Projetado com serviços, controllers e um repositório simples.
	- Como rodar em dev: `cd desafio-projeto-app-flow && npm run start:dev`
	- Para testes rápidos: `cd desafio-projeto-app-flow && npm test`

- **Formula One API** (`desafio-projeto-formula-1`): API simples com Fastify que expõe times e pilotos (endpoints `/teams`, `/drivers`, `/drivers/:id`). Projeto template TypeScript demonstrando servidor HTTP moderno.
	- Como rodar: `cd desafio-projeto-formula-1 && npm run start`

- **Champions (Players & Clubs)** (`desafio-projeto-champions`): API Express em TypeScript com CRUD básico para jogadores e listagem de clubes. Inclui validações nos serviços e leitura de dados a partir de JSON local.
	- Como rodar em dev: `cd desafio-projeto-champions && npm run start:dev`
	- Testes simples: `cd desafio-projeto-champions && npm test`

**Observações rápidas**
- Cada projeto pode ter um `README` próprio com instruções específicas (ver diretórios de cada projeto).
- Muitos projetos usam `tsx`/`tsup`/`dotenv` para desenvolvimento e build em TypeScript; ver `package.json` de cada pasta para scripts específicos.
- Se quiser, eu posso:
	- Comitar as alterações e abrir uma branch/PR com estas atualizações;
	- Adicionar `.env.example` e scripts faltantes em algum projeto específico;
	- Criar instruções de execução unificadas (script no root) para facilitar execução dos desafios.

---

Mantive o repositório organizado com os diretórios `desafio-projeto-*` — me diga se quer que eu gere um índice HTML estático ou outro formato para navegação dos projetos.
