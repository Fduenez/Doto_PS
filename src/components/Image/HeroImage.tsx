import Image from "next/image";
import {parseHeroImage} from "@/service/HeroService/HeroService";

type Props = {
    src: string,
    altDesc: string
}
export const HeroImage = ({src, altDesc}: Props) => {
    return (
        <Image className="rounded-md hover:shadow-lg transition ease-in-out delay-80 hover:scale-125 hover:duration-300" src={src} width="100" height="100" alt={altDesc}/>
    );
}