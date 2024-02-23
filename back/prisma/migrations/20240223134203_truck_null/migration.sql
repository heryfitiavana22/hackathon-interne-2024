-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alert" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageURL" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "isPicked" BOOLEAN NOT NULL,
    "state" TEXT NOT NULL,
    "truckId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Alert_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "Truck" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Alert" ("createdAt", "id", "imageURL", "isPicked", "latitude", "longitude", "place", "state", "truckId", "updatedAt") SELECT "createdAt", "id", "imageURL", "isPicked", "latitude", "longitude", "place", "state", "truckId", "updatedAt" FROM "Alert";
DROP TABLE "Alert";
ALTER TABLE "new_Alert" RENAME TO "Alert";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
