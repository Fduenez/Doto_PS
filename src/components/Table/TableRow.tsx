import { parseItemImage } from "@/service/HeroService/HeroService";
import { DotaImage } from "../Image/DotaImage";
import {ProgressBars} from "@/components/Bars/ProgressBars";

type Props = {
    item_id: number;
    item_name: string;
    winRate: number;
    matches: number;
    maxMatches: number;
}
export const TableRow = ({item_id, item_name, winRate, matches, maxMatches}: Props) => {
    const percentageMatch: number = Math.floor((matches/maxMatches) * 100);
    const percentageWin: number = Math.floor((winRate/maxMatches) * 100);
    console.log(`win: ${percentageWin}`);

    return (
       
        <tr>
            <td>
                <div className='flex space-x-2'>
                    <DotaImage src={parseItemImage(item_id)} altDesc={`item is ${item_name}`} width={50} height={50}/>
                    <h1 className='text-pretty text-slate-200 truncate'>{item_name}</h1>
                </div>
            </td>
            <td>
                <div className='flex flex-col'>
                    <p className='text-slate-200'>{matches}</p>
                    <ProgressBars percentage={percentageMatch}/>
                </div>

            </td>
            <td>
                <div className='flex flex-col'>
                    <p className='text-slate-200'>{winRate}</p>
                    <ProgressBars percentage={percentageWin}/>
                </div>
            </td>
        </tr>

);
}