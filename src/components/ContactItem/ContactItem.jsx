import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
    const dispatch = useDispatch();

    return (
        <>
            <span>{name}: </span>
            <span>{number}</span>
            <DeleteBtn type='button' onClick={() => dispatch(deleteContact(id))}>
                <span>Delete</span>
            </DeleteBtn>
        </>
    )
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
};