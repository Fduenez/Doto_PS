import {Grid} from "@/components/Grid/Grid";
import {Hero} from "@/Models/Hero";
import {HeroImage} from "@/components/Image/HeroImage";
import {parseHeroImage} from "@/service/HeroService/HeroService";

type Props = {
    attribute: string
    data: Hero[] | undefined,
}
export const HeroCategoryGrid = ({attribute, data}: Props) => {
    return (
        <div className="m-4">
            <h2 className="font-bold text-white mb-4 text-2xl">{attribute}</h2>
            <Grid>
                {data ? data.map((hero: Hero, index: number) => {
                    return <HeroImage key={index} src={parseHeroImage(hero.name, 'lg')} altDesc={`Dota Hero: ${hero.name}`}/>;
                }): <div/>}
            </Grid>
        </div>
    );
}