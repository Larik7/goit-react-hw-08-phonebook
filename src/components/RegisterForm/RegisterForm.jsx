import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerFetch } from 'redux/AuthOperations';
import { selectErrorReg } from 'redux/AuthSelectors';
import { Form, Input } from './RegisterForm.styled';

export const RegisterForm = () => {
  const error = useSelector(selectErrorReg);
  const dispatch = useDispatch();
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(
      registerFetch({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
    resetField('name', 'email', 'password');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error ? (
        <Input
          error
          required
          id="outlined-error"
          label="Name"
          type="text"
          {...register('name', { required: true, maxLength: 20 })}
        />
      ) : (
        <Input
          required
          id="outlined-required"
          label="Name"
          type="text"
          {...register('name', { required: true, maxLength: 20 })}
        />
      )}

      {error ? (
        <Input
          error
          width="280"
          required
          id="outlined-error"
          label="Email"
          type="email"
          {...register('email', { required: true, maxLength: 50 })}
        />
      ) : (
        <Input
          required
          width="280"
          id="outlined-required"
          label="Email"
          type="email"
          {...register('email', { required: true, maxLength: 50 })}
        />
      )}
      {error ? (
        <Input
          error
          required
          id="outlined-error"
          label="Email"
          type="Password"
          {...register('password', { required: true, maxLength: 50 })}
          helperText="A user with that email address already exists"
        />
      ) : (
        <Input
          required
          id="outlined-required"
          label="Password"
          type="password"
          {...register('password', { required: true, maxLength: 50 })}
        />
      )}

      <Button variant="contained" type="submit">
        Register
      </Button>
    </Form>
  );
};
