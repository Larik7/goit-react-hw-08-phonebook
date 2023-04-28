import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactsList } from 'components/ContactList/ContactList';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TitleReg } from 'components/RegisterForm/RegisterForm.styled';
import { TitleContact } from 'components/Filter/Filter.styled';



const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <HelmetProvider>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <TitleReg>Please enter your details to add a contact</TitleReg>
            <ContactsForm />
            <TitleContact>Contacts</TitleContact>
            <Filter />
            {isLoading ? <Loader />
                : error ? <p>{error}</p>
                    : <ContactsList />}
        </HelmetProvider>

    )
};

export default Contacts;