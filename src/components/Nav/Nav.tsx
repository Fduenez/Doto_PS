import {NavLogo} from "@/components/Nav/NavLogo";
import {NavItem} from "@/components/Nav/NavItem";

export const Nav = () => {
    return (
        <nav className="sticky top-0 bg-mute-blue w-screen h-12 flex justify-items-start items-center drop-shadow-2xl">
            <ul className="w-full h-full flex items-center ">
                <NavLogo/>
                <NavItem name="Heroes"/>
                <NavItem name="Teams"/>
                <NavItem name="Matches"/>
            </ul>
        </nav>
    );
}
