import {DBService} from "@/service/DBService/DBService";
import Image from 'next/image'
import {getHeroAbilities, parseAbilityImage, parseHeroImage} from "@/service/HeroService/HeroService";
import {Abilities} from "@/Models/Abilities";
import {DotaHeroHeader} from "@/components/DotaHeroHeader/DotaHeroHeader";
import {DotaHeroStats} from "@/components/DotaHeroStats/DotaHeroStats";
import { HeroStat } from "@/Models/HeroStat";

export default async function Hero({ params }: { params: { id: number }}){
    const dbService: DBService = new DBService();
    const heroData = await dbService.getHero(params.id);
    const hero: HeroStat = heroData[0];





    return (
        <div className="container">
            <DotaHeroHeader hero={hero}/>
            <DotaHeroStats hero_id={hero.hero_id ? hero.hero_id : -1}/>


        </div>
    );
}