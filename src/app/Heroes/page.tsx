import Image from "next/image";
import {getHeroes, parseHeroImage} from "@/service/HeroService/HeroService";

type Hero = {
    id: String,
    name: String,
    localizedName: String,
    primaryAttr: String,
    attackType: String,
    roles: [String],
    legs: Number
}
export default async function Heroes(){
    const data = await getHeroes();
    console.log(data);
    return (
      <div>
          {data.map((hero: Hero, index: number) => {
              return <Image src={parseHeroImage(hero.name)} width="100" height="100"/>;
          })}
      </div>
    );
}


