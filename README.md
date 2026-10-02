# Business Card Backend

Backend для цифровой визитки

## Стек

- **Node.js** + **TypeScript** — среда выполнения и язык
- **NestJS** — фреймворк, модульная архитектура
- **GraphQL** (code-first) + **Apollo Server 5** — API
- **Prisma** — ORM, миграции, seed
- **PostgreSQL 16** — база данных
- **Docker** + **Docker Compose** — контейнеризация БД
- **ESM** — модульная система (`"type": "module"` в `package.json`)

## Быстрый старт

### 1. Клонировать и установить зависимости

```bash
git clone <repo-url>
cd business-card-back
npm install
```

### 2. Создать таблицы и залить данные

```bash
cp .env.example .env     
docker compose up -d      
npx prisma migrate dev    
npx prisma db seed       
npm run start:dev
```