CREATE TABLE "produtos" (
  "id" SERIAL PRIMARY KEY,
  "nome" TEXT NOT NULL,
  "preco" INTEGER NOT NULL,
  "idUsuario" INTEGER NOT NULL
);
