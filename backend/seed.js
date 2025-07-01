const { Client } = require('pg');
const client = new Client({
    connectionString: 'postgresql://postgres:pgsqlpass@localhost:5432/tetragric'
});

async function seed() {
    await client.connect();
    await client.query(`
      INSERT INTO "Farms" ("OwnerWalletId", "CropType") VALUES
      ('mn_shield-addr_test1lukm2...', 'Coffee'),
      ('mn_shield-addr_test1qa...', 'Wheat');

      INSERT INTO "Claims" ("FarmId", "PayoutAmount", "Status", "Timestamp", "ProofTokenId") VALUES
      (1, 300.00, 'Paid', NOW(), 'proof123'),
      (2, 500.00, 'Pending', NOW(), 'proof456');
    `);
    console.log('Seeding complete');
    await client.end();
}

seed();