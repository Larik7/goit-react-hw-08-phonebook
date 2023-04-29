import { useAuth } from "hooks";

import { Name, UserContainer } from "./UserMenu.styled";
import AccountMenu from "./UserMenuMUI";



export const UserMenu = () => {

    const { user } = useAuth();

    return (
        <UserContainer>
            <Name>{user.name}</Name>
            <AccountMenu/>
        </UserContainer>
    );
};