import Link from "next/link";

type Props = {
    name: String
}
export const NavItem = ({name}: Props) => {
    return (
        <li className="list-none inline-block h-full mx-4 text-slate-300 hover:border-b-4 hover:text-white">
            <Link href={`/${name}`} className="flex items-center justify-center h-full"><span>{name}</span></Link>
        </li>
    );
}
