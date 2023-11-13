import Image from "next/image";
import {parseHeroImage} from "@/service/HeroService/HeroService";
import Link from "next/link";

type Props = {
    src: string,
    altDesc: string,
    id: string
}
export const HeroImage = ({src, altDesc, id}: Props) => {
    return (
        <Link href={`Heroes/${id}`}>
            <Image className="rounded-md hover:shadow-lg transition ease-in-out delay-80 hover:scale-125 hover:duration-300 w-full h-auto" placeholder="empty" src={src} width="100" height="100" alt={altDesc}/>
        </Link>
    );
}