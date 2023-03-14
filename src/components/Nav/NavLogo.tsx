import Link from "next/link";

export const NavLogo = () => {
    return (
        <Link href={`/`} className="mr-16 ml-2"><span className="inline-block font-bold text-2xl text-white whitespace-nowrap">Doto PS</span></Link>
    );
}