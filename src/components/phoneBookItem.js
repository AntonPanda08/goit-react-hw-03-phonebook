import React from "react";
import PropTypes from "prop-types";

const PhoneBookItem = ({ name, number, id, onRemoveContact }) => (
  <li>
    <span>
      {name}: {number}
    </span>
    <button type="button" onClick={() => onRemoveContact(id)}>
      Delete
    </button>
  </li>
);
PhoneBookItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
export default PhoneBookItem;
