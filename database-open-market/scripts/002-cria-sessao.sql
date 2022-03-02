CREATE TABLE "sessoes" (
  "id" SERIAL PRIMARY KEY,
  "idUsuario" INTEGER NOT NULL,
  "token" TEXT NOT NULL
);
