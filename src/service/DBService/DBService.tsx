import {PlanetScaleDatabase} from "drizzle-orm/planetscale-serverless";
import * as schema from '../../db/schema';
import {db} from "@/db";
import {hero_item_usages, hero_stats} from "../../db/schema";
import {desc, eq} from "drizzle-orm";
import {HeroStat} from "@/Models/HeroStat";
import winston from "winston";
import {HeroItemUsage} from "@/Models/HeroItemUsage";

export class DBService {
    private db = db;
    private logger = winston.createLogger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'combined.log' })
        ]
    });
    constructor(){}

    public async getHero(id: number): Promise<any | Error> {
        let result: HeroStat[] = [];
        try{
            result = await db.select().from(hero_stats).where(eq(hero_stats.hero_id, id));
            this.logger.info(result);

        }
        catch(err: any){
            this.logger.error(err.toString());
        }
        return result;

    }

    public async getTopItems(hero_id: number): Promise<any> {
        let result: HeroItemUsage[] = [];
        try{
            result = await db.select().from(hero_item_usages).where(eq(hero_item_usages.hero_id, hero_id)).limit(10).orderBy(desc(hero_item_usages.matches));
            this.logger.info(result);
            return result;
        }
        catch(err: any){
            this.logger.error(err.toString());
        }
        return result;
    }
}