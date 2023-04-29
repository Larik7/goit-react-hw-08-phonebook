import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/ContactsOperations';
import { selectIsLoading, selectError } from 'redux/ContactsSelectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';
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
            <ContactForm />
            <TitleContact>Contacts</TitleContact>
            <Filter />
            {isLoading ? <Loader />
                : error ? <p>{error}</p>
                    : <ContactList />}
        </HelmetProvider>

    )
};

export default Contacts;