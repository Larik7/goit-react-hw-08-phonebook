import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { TitleReg } from 'components/RegisterForm/RegisterForm.styled';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Register = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Registration</title>
                </Helmet>
                <TitleReg>Please enter your data to sign up</TitleReg>
                <RegisterForm />
            </div>
        </HelmetProvider>
    );
};

export default Register;