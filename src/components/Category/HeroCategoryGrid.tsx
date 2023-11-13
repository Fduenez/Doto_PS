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
                    let id: string = hero.id.toString();
                    let srcLink: string = parseHeroImage(hero.name, 'lg')
                    let heroName: string = hero.name.toString()

                    return <HeroImage key={index} src={srcLink} altDesc={`Dota Hero: ${heroName}`} id={id}/>;
                }): <div/>}
            </Grid>
        </div>
    );
}