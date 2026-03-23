# Mongoose Restful API Typescript

```sh
npm init -y

npm i express mongoose dotenv body-parser

npm i -D @types/node @types/express @types/mongoose @types/body-parser

npm i -D typescript tsx
npx tsc --init

npm i -D vitest supertest @types/supertest mongodb-memory-server
```

supertest lets tests call your Express endpoints directly (GET /api/users, POST /api/users, etc.) and assert status/body, without manually starting a real HTTP server.

mongodb-memory-server spins up a temporary in-memory MongoDB for tests, so your Mongoose CRUD logic runs against a real database engine (not mocks) and each test run stays isolated/clean.
