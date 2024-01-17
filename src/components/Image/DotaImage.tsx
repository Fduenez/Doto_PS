import Image from "next/image";
import {parseHeroImage} from "@/service/HeroService/HeroService";
import Link from "next/link";

type Props = {
    src: string,
    altDesc: string,
    height: number,
    width: number
}
export const DotaImage = ({src, altDesc, height, width}: Props) => {
    return (
        <Image className="rounded-md hover:shadow-lg transition ease-in-out delay-80 hover:scale-125 hover:duration-300" placeholder="empty" src={src} width={width} height={height} alt={altDesc}/>
    );
}