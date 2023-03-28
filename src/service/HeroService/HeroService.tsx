import {Hero} from "@/Models/Hero";

const BASE_HERO_IMAGE_URL = "http://cdn.dota2.com/apps/dota2/images/heroes"
const INTELLIGENCE = 'Int';
const STRENGTH = 'Str';
const AGILITY = 'Agi';

export const getHeroes = async () => {
    //fetches all heros from open dota api
    const data = await fetch( "https://api.opendota.com/api/heroes");
    const heroesData: Promise<Hero[]> = data.json();
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
        ["Int", []]
    ]);

    heroes.map((hero) => {
        console.log(hero.primary_attr)
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
        }
    });

    return heroMap;
}