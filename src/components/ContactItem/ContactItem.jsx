import PropTypes from 'prop-types';
import { IoMdTrash } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactsOperations';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from 'components/UserMenu/getAvatarColor';
import IconButton from '@mui/material/IconButton';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ListItemAvatar>
        <Avatar {...stringAvatar(name.toString())} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
      <IconButton
        aria-label="delete"
        size="large"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <IoMdTrash size="20" />
      </IconButton>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
