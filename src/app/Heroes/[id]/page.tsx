import {getHeroStats} from "@/service/HeroService/HeroService";


export default async function Hero({ params }: { params: { id: number }}){
    const heroStats = await getHeroStats();

    return (
        <div>
            <p>Hello</p>
        </div>
    );
}