import React, { Component } from 'react';
import Input from '../presentational/Input';
import validate from '../../util/validator';

class FormContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      formControls: {
        email: {
          value: '',
          placeholder: 'What is your email',
          valid: false,
          touched: true,
          validationRules: {
            isEmail: true,
            isRequired: true
          }
        },
        name: {
          value: '',
          placeholder: 'What is your name',
          valid: false,
          touched: true,
          validationRules: {
            minLength: 3,
            isRequired: true // just added this
          }
        },
        password: {
          value: '',
          placeholder: 'Password',
          valid: false,
          touched: true,
          validationRules: {
            minLength: 3,
            isRequired: true // just added this
          }
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const id = event.target.id;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[id]
    };

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[id] = updatedFormElement;

    this.setState({
      formControls: updatedControls
    });
  }

  render () {
    const { formControls } = this.state;
    return (
      <form id='article-form'>
        <Input
          text='Nombre'
          label='name'
          type='text'
          id='name'
          value={formControls.name.value}
          handleChange={this.handleChange}
          valid={formControls.name.valid}
          touched={formControls.name.touched}
        />

        <Input
          text='Email'
          label='email'
          type='email'
          id='email'
          value={formControls.email.value}
          handleChange={this.handleChange}
          valid={formControls.email.valid}
          touched={formControls.email.touched}
        />
          <Input
              text='Password'
              label='password'
              type='password'
              id='password'
              value={formControls.password.value}
              handleChange={this.handleChange}
              valid={formControls.password.valid}
              touched={formControls.password.touched}
          />
      </form>
    );
  }
}

export default FormContainer;
