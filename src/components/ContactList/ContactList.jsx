import PropTypes from "prop-types";
import { List, Item, ContactItem, DeleteBtn } from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    <ContactItem>{name}: {number}</ContactItem>
                <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteBtn></Item>
            ))}
        </List>
    )

    ContactList.propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.objectOf(
            PropTypes.string.isRequired)),
        onDeleteContact: PropTypes.func,
    }

export { ContactList }