import Image from "next/image";
import {getHeroAbilities, parseAbilityImage, parseHeroImage} from "@/service/HeroService/HeroService";
import {Abilities} from "@/Models/Abilities";
import {HeroStat} from "@/Models/HeroStat";
import {DotaHeroAttribute} from "@/components/DotaHeroHeader/DotaHeroAttribute";

type Props = {
    hero: HeroStat
}
export const DotaHeroHeader = async ({hero}: Props) => {
    const abilities = await getHeroAbilities(hero.name);
    return(
        <div className="bg-sea-blue w-screen h-auto p-2 flex">
            <div className="flex mx-auto">
                <div className="mr-4">
                    <Image className="rounded-md" src={parseHeroImage(hero.name, 'lg')} alt={`Hero Image of ${hero.localized_name}`} width={110} height={150}></Image>
                </div>
                <div className="flex-1">
                    <h1 className="text-slate-100 text-xl">{hero.localized_name}</h1>
                    <h3 className="text-slate-400 text-xs inline"><span className="text-slate-200 text-xs">{hero.attack_type}</span> - {hero.roles?.toString()}</h3>
                    <div className="flex space-x-2">
                        <DotaHeroAttribute color={"red"} attrBase={hero.base_str ? hero.base_str : 0} attrGain={hero.str_gain ? hero.str_gain : 0} src={"str"}/>
                        <DotaHeroAttribute color={"green"} attrBase={hero.base_agi ? hero.base_agi : 0} attrGain={hero.agi_gain ? hero.agi_gain : 0} src={"agi"}/>
                        <DotaHeroAttribute color={"blue"} attrBase={hero.base_int ? hero.base_int : 0} attrGain={hero.int_gain ? hero.int_gain : 0} src={"int"}/>
                    </div>
                    <div className="flex flex-row space-x-1 w-full">
                        {abilities.map((ability: Abilities, index: number) => {

                            return <div className="my-2" key={index}>
                                <Image className="rounded-md" src={parseAbilityImage(ability.img)} alt={`Ability Image of ${ability.dName}`} width={50} height={50}></Image>
                            </div>
                        })}
                    </div>
                </div>
                {/*description and name*/}
            </div>

        </div>
    );

}