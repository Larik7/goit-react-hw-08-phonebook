import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks"

import { Header, Logo, LogoMobile } from "./AppBar.styled";
import { RiContactsBookFill } from 'react-icons/ri';



export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <LogoMobile to='/'>
                <RiContactsBookFill size='30'/>
            </LogoMobile>
            <Logo to='/'>
                <RiContactsBookFill size='40'/>
                <span>PhoneBook</span>
            </Logo>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>

    );
};