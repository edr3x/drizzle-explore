import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import env from "../config/env";

const db_migrate = async () => {
    const migrationClient = postgres(env.DATABASE_URL, { max: 1 });
    await migrate(drizzle(migrationClient), {
        migrationsFolder: "drizzle",
    });

    await migrationClient.end();

    process.exit(0);
};

db_migrate();
