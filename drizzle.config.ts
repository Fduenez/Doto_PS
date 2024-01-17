import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
    path: __dirname + '/.env'
});

if(!process.env.DATABASE_URL){
    throw new Error("env var missing")
}
export default {
    schema: "./src/db/schema/*",
    out: "./drizzle",
    driver: "mysql2",
    dbCredentials: {
        uri: process.env.DATABASE_URL,
    },
    tablesFilter: ["dota_ps_*"],
} satisfies Config;