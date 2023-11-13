import {connect} from "@planetscale/database";
import process from "process";
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';



export const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
    database: process.env.DB_NAME,
    multipleStatements: true,
});

export const db = drizzle(connection, { schema });