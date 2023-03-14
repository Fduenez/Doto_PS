const BASE_HERO_IMAGE_URL = "http://cdn.dota2.com/apps/dota2/images/heroes"

export const getHeroes = async () => {
    //fetches all heros from open dota api
    const data = await fetch( "https://api.opendota.com/api/heroes");
    const heroesData = data.json();
    return heroesData;
};

export const parseHeroImage = (heroName: String): string => {
    //change variable name to be better suited
    const newHeroName: string = heroName.substring(14)
    //multiple types of images: sb, lg, full
    const heroImageUrl: string = `${BASE_HERO_IMAGE_URL}/${newHeroName}_full.png`;
    return heroImageUrl;
};