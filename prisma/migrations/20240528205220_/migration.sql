/*
  Warnings:

  - You are about to drop the column `quantity` on the `orders` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `order_products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_order_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "order_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "produts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "order_products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_order_products" ("id", "orderId", "productId") SELECT "id", "orderId", "productId" FROM "order_products";
DROP TABLE "order_products";
ALTER TABLE "new_order_products" RENAME TO "order_products";
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("createdAt", "id", "userId") SELECT "createdAt", "id", "userId" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check("order_products");
PRAGMA foreign_key_check("orders");
PRAGMA foreign_keys=ON;
