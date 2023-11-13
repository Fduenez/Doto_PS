import {Hero} from "@/Models/Hero";
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import {hero_stats, planetScaleTable} from "@/server/schema/schema";
import {HeroStat} from "@/Models/HeroStat";
import * as process from "process";

const BASE_HERO_IMAGE_URL = "http://cdn.dota2.com/apps/dota2/images/heroes"
const INTELLIGENCE = 'Int';
const STRENGTH = 'Str';
const AGILITY = 'Agi';
const ALL = "All"

export const getHeroes = async () => {
    //fetches all heros from open dota api
    const data = await fetch( "https://api.opendota.com/api/heroes", { next: { revalidate: 10 } });
    const heroesData: Hero[] = await data.json();
    return heroesData;
};

export const parseHeroImage = (heroName: String, imageType: String): string => {
    //change variable name to be better suited
    const newHeroName: string = heroName.substring(14)
    //multiple types of images: sb, lg, full
    const heroImageUrl: string = `${BASE_HERO_IMAGE_URL}/${newHeroName}_${imageType}.png`;
    return heroImageUrl;
};

export const filterHeroes = async (heroes: Hero[]) => {
    const heroMap = new Map<string, Hero[]>([
        ["Agi", []],
        ["Str", []],
        ["Int", []],
        ["All", []]
    ]);

    heroes.map((hero) => {
        switch(hero.primary_attr){
            case "int":
                heroMap.get(INTELLIGENCE)?.push(hero);
                break;
            case "str":
                heroMap.get(STRENGTH)?.push(hero);
                break;
            case "agi":
                heroMap.get(AGILITY)?.push(hero);
                break;
            case "all":
                heroMap.get(ALL)?.push(hero)
                break;
            default:
                console.log("Not able to find attribute");
                break;
        }
    });

    return heroMap;
}

export const getHeroStats = async () => {
    const data = await fetch("https://api.opendota.com/api/heroStats");
    const heroStats:any = await data.json();

    const connection = connect({
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
    })

    const db = drizzle(connection.);

    type NewHero = typeof hero_stats.$inferInsert;


    heroStats.map(async (heroStat:any) => {
        let hero= new HeroStat(
            heroStat.id,
            heroStat.name,
            heroStat.localized_name,
            heroStat.primary_attr,
            heroStat.attack_type,
            heroStat.roles,
            heroStat.img,
            heroStat.icon,
            heroStat.base_health,
            heroStat.base_health_regen,
            heroStat.base_mana,
            heroStat.base_mana_regen,
            heroStat.base_armor,
            heroStat.base_mr,
            heroStat.base_attack_min,
            heroStat.base_attack_max,
            heroStat.base_str,
            heroStat.base_agi,
            heroStat.base_int,
            heroStat.str_gain,
            heroStat.agi_gain,
            heroStat.int_gain,
            heroStat.attack_range,
            heroStat.projectile_speed,
            heroStat.attack_rate,
            heroStat.base_attack_time,
            heroStat.attack_point,
            heroStat.move_speed,
            heroStat.turn_rate,
            heroStat.cm_enabled,
            heroStat.legs,
            heroStat.day_vision,
            heroStat.night_vision,
            heroStat.hero_id,
            heroStat.turbo_picks,
            heroStat.turbo_wins,
            heroStat.pro_ban,
            heroStat.pro_win,
            heroStat.pro_pick,
            heroStat['1_pick'],
            heroStat['1_win'],
            heroStat['2_pick'],
            heroStat['2_win'],
            heroStat['3_pick'],
            heroStat['3_win'],
            heroStat['4_pick'],
            heroStat['4_win'],
            heroStat['5_pick'],
            heroStat['5_win'],
            heroStat['6_pick'],
            heroStat['6_win'],
            heroStat['7_pick'],
            heroStat['7_win'],
            heroStat['8_pick'],
            heroStat['8_win'],
            heroStat.null_pick,
            heroStat.null_win);
        await db.insert(hero_stats).values(
            heroStat
        )
        });
    return {name: "hi"};
}