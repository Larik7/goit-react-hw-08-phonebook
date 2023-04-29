import { Button } from "@mui/material";
import { Form, Input } from "components/RegisterForm/RegisterForm.styled";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { logIn } from "redux/AuthOperations";
import { selectErrorLogin } from "redux/AuthSelectors";


export const LoginForm = () => {
    const error = useSelector(selectErrorLogin);
    const dispatch = useDispatch();
    const { register, handleSubmit, resetField } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        dispatch(
            logIn({
                email: data.email,
                password: data.password,
            })
        );
        resetField('email', 'password');
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {error ?
                <Input
                    error
                    width='280'
                    required
                    id="outlined-error"
                    label="Email"
                    type="email" {...register("email", { required: true, maxLength: 50 })}

                /> :
                <Input
                    required
                    width='280'
                    id="outlined-required"
                    label="Email"
                    type="email" {...register("email", { required: true, maxLength: 50 })}
                />}
            {error ?
                <Input
                    error
                    required
                    id="outlined-error"
                    label="Password"
                    type="Password" {...register("password", { required: true, maxLength: 50 })}
                    helperText="Invalid e-mail or password"
                /> :
                <Input
                    required
                    id="outlined-required"
                    label="Password"
                    type="password" {...register("password", { required: true, maxLength: 50 })}
                />}
            
            <Button variant="contained" type="submit">Login</Button>
        </Form>
    )
}