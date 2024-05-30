/*
  Warnings:

  - You are about to drop the column `description` on the `produts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_produts" ("id", "name", "price") SELECT "id", "name", "price" FROM "produts";
DROP TABLE "produts";
ALTER TABLE "new_produts" RENAME TO "produts";
PRAGMA foreign_key_check("produts");
PRAGMA foreign_keys=ON;
