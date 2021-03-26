import React from 'react';
import './input.scss';

const Input = ({ name, label, value, error, handleChange, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...rest}
        className="form-input"
        id={name}
        value={value}
        name={name}
        onChange={handleChange}
        onBlur={handleChange}
      />
      {error && (
        <div>
          <span className="error-msg">{error}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
