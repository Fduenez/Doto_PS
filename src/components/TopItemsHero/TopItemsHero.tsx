import { HeroItemUsage } from "@/Models/HeroItemUsage";
import { DBService } from "@/service/DBService/DBService";
import { TableRow } from "@/components/Table/TableRow";

type Props = {
    hero_id: number
}

const TopItemsHero = async ({hero_id}: Props) => {
    const db: DBService = new DBService();
    const topItemsData = await db.getTopItems(hero_id);
    const maxMatches = topItemsData[0].matches ;
    return (
        <div className='w-screen'>
            <table className='table-auto border-separate border-spacing-2 w-full'>
                <thead>
                    <tr>
                        <th className='text-slate-100'>name</th>
                        <th className='text-slate-100'>matches</th>
                        <th className='text-slate-100'>win rate</th>
                    </tr>
                </thead>
                <tbody>
                    {topItemsData.map((topItem: HeroItemUsage, index: number) => <TableRow key={index} item_id={topItem.item_id} item_name={topItem.item_name} matches={topItem.matches} winRate={topItem.win_rate} maxMatches={maxMatches}/>)}
                </tbody>
            </table>
        </div>
    );
}
export default TopItemsHero;