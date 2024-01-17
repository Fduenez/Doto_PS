import Image from "next/image";

type Props = {
    color: string,
    attrGain: number,
    attrBase: number,
    src: string
}
export const DotaHeroAttribute = ({color, attrGain, attrBase, src}: Props) => {
    const colorCss: string = colorStyle(color);
    return (
        <div className={`flex rounded-md ${colorCss} border-2 p-0.5 bg-gray-800 text-xs backdrop-blur-md`}>
            <Image src={`/hero_${src}.png`} alt={"strength attribute image"} width={20} height={20}/>
            <p className="px-1 text-white">{attrBase} + {attrGain}</p>
        </div>
    );
}

const colorStyle = (color: string) => {
    if(color === "red"){
        return "border-red-500";
    }
    else if(color === "blue"){
        return "border-cyan-400";
    }
    else{
        return "border-emerald-500"
    }
}