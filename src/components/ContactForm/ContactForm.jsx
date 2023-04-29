import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactsOperations';
import { selectContacts } from 'redux/ContactsSelectors';
import * as Yup from 'yup';
import { FormField, Form, ErrorMessage, InputContact } from './ContactForm.styled';
import { Button } from '@mui/material';

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short!')
    .max(16, 'Name is too long!')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number is too short!')
    .max(20, 'Number is too long!')
    .required('Number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const findName = values.name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === findName)) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactShema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormField>
          <span>Name</span>
          <InputContact name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          <span>Number</span>
          <InputContact name="number" type="tel" format="(###) ###-##-##"/>
          <ErrorMessage name="number" component="span" />
        </FormField>
        <Button variant="contained" type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};