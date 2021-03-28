import React from 'react';
import './select.scss';

const Select = ({ name, label, value, options, error, handleChange, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        {...rest}
        className="form-input"
        id={name}
        value={value}
        name={name}
        onChange={handleChange}
        onBlur={handleChange}
      >
      {options.map(option => (
        <option key={option.id} value={option.id}>{option.name}</option>
      ))};
      </select>
      {error && (
        <div>
          <span className="error-msg">{error}</span>
        </div>
      )}
    </div>
  );
};

export default Select;
