import React from "react";
import PropTypes from "prop-types";
import PhoneBookItem from "./phoneBookItem";
const PhoneBookList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ id, number, name }) => (
      <PhoneBookItem
        key={id}
        id={id}
        number={number}
        name={name}
        onRemoveContact={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);
PhoneBookList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
export default PhoneBookList;
