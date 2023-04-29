import { HeaderLink } from "components/Navigation/Navigation.styled";
import { AuthNavigate } from "./AuthNav.styled";


export const AuthNav = () => {
    return (
        <AuthNavigate>
            <HeaderLink to="/register">
                Sign Up
            </HeaderLink>
            <HeaderLink to="/login">
                Log In
            </HeaderLink>
        </AuthNavigate>
    );
}