import {Hero} from "@/Models/Hero";
import {HeroAbilities} from "@/Models/HeroAbilities";
import {Abilities} from "@/Models/Abilities";
import item_ids from "../../../constants/item_ids.json"
import items from "../../../constants/items.json"



const BASE_HERO_IMAGE_URL: string = "http://cdn.dota2.com/apps/dota2/images/heroes"
const BASE_IMAGE_URL: string = "http://cdn.dota2.com/"
const INTELLIGENCE = 'Int';
const STRENGTH = 'Str';
const AGILITY = 'Agi';
const ALL = "All"
const ABILITIES_URL="abilities"
const HERO_ABILITIES_URL="hero_abilities"
const BASE_HEALTH: number = 120;
const BASE_MANA: number = 75

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

export const parseAbilityImage = (ability: String): string => {
    //multiple types of images: sb, lg, full
    const abilityImageUrl: string = `${BASE_IMAGE_URL}/${ability}`;

    return abilityImageUrl;
};

export const parseItemImage = (item_id: number): string => {
    const id: string = item_id.toString();
    const itemName = item_ids[id as keyof typeof item_ids]
    const item: any = items[itemName as keyof typeof items];
    const image: string = item.img;
    const itemImageUrl: string = `${BASE_IMAGE_URL}/${image}`
    return itemImageUrl;
}

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

export const getHeroAbilities = async(heroName: string) => {
    const response = await fetch(`https://api.opendota.com/api/constants/${HERO_ABILITIES_URL}`);
    const data: {[key:string]: HeroAbilities} = await response.json();
    const map: Map<string, HeroAbilities> = new Map<string, HeroAbilities>(Object.entries(data));
    const abilities = map.has(heroName) ? map.get(heroName)?.abilities : [""];
    const heroAbilities: Abilities[] = await getAbilityDescriptions(abilities);
    return heroAbilities;
};

const getAbilityDescriptions = async(heroAbility: string[] | undefined)=> {
    if(heroAbility === undefined){
        return [];
    }
    try{
        const response = await fetch(`https://api.opendota.com/api/constants/${ABILITIES_URL}`);
        const data: {[key: string]: Abilities} = await response.json();
        const map: Map<string, Abilities> = new Map<string, Abilities>(Object.entries(data));
        const filteredAbilities = heroAbility.filter(ability => ability!= "generic_hidden");
        const abilities = filteredAbilities.map((ability: string) => {
            const abilityInfo: Abilities | any = map.has(ability) ? map.get(ability): {};
            return abilityInfo;
        })

        return abilities;

    }
    catch(error: any){
        throw new Error(error.toString());
    }


};

export const getHeroHealth =(baseStr: number, lvl: number, strGain: number): number => {
    return (baseStr + (lvl * strGain))* 22 + BASE_HEALTH;
}
