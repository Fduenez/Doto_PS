import Image from "next/image";
import {filterHeroes, getHeroes, parseHeroImage} from "@/service/HeroService/HeroService";
import {Grid} from "@/components/Grid/Grid";
import {HeroImage} from "@/components/Image/HeroImage";
import {Hero} from "@/Models/Hero";
import {HeroCategoryGrid} from "@/components/Category/HeroCategoryGrid";

export default async function Heroes(){
    const data: Hero[] = await getHeroes();
    const heroes = await filterHeroes(data);

    return (
      <div className="flex justify-center items-center m-8 flex">
          <div className="flex flex-col justify-center items-center p-8 bg-light-navy-blue rounded-lg shadow-2xl">
              <HeroCategoryGrid attribute={"Strength"} data={heroes.get("Str")}/>
              <HeroCategoryGrid attribute={"Agility"} data={heroes.get("Agi")}/>
              <HeroCategoryGrid attribute={"Intelligence"} data={heroes.get("Int")}/>
          </div>
      </div>
    );
}


