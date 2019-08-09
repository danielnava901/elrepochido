import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, text, type, id, value, handleChange, touched, valid }) => {
  let formControl = 'form-control';

  if (touched && !valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div className='form-group'>
      <label htmlFor={label}>{text}</label>
      <input
        type={type}
        className={formControl}
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  touched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired
};
export default Input;
