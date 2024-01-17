import TopItemsHero  from "../TopItemsHero/TopItemsHero";

type Props = {
    hero_id: number
}
export const DotaHeroStats = ({hero_id}: Props) => {
    
    return (
        <div>
            <TopItemsHero hero_id={hero_id}/> 
        </div>
    );

}