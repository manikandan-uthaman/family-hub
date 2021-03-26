import { Component } from 'react';
import Input from '../input/input';
import './form.scss';

/*
 * To use this component, extend this form in your form component,
 * declare a state in the below format,
 * implement doSubmit and validateProperty functions
 */
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { data } = this.state;
    const errors = {};

    Object.keys(data).forEach((field) => {
      let error = this.validateProperty(field, data[field]);
      if (error) errors[field] = error;
    });

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    delete errors['form'];

    const errorMessage = this.validateProperty(input.name, input.value);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button
        className="btn btn-primary btn-rounded"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;
    return (
      <Input
        label={label}
        value={data[name]}
        name={name}
        type={type}
        error={errors[name]}
        handleChange={this.handleChange}
      ></Input>
    );
  }
}

export default Form;
