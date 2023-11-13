import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default {
    schema: "./src/server/schema/*",
    out: "./drizzle",
    driver: `mysql2`,
    dbCredentials: {
        host: process.env.DATABASE_HOST,
        port: "1234",
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
    tablesFilter: ["dota_ps_*"],
} satisfies Config;