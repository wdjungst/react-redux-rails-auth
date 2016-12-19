import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { first_name, last_name, email, password, password_confirmation } = this.refs;
    let user = { user: {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value
    }}

    $.ajax({
      url: '/users',
      type: 'POST',
      data: user,
      dataType: 'JSON'
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.history.push('/');
    }).fail( err => {
    });
  }

  render() {
    return (
      <div>
        <h2 className="center">Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="first_name" ref="first_name" required={true} />
          <input placeholder="last_name" ref="last_name" required={true} />
          <input type="email" placeholder="email" ref="email" required={true} />
          <input type="password" placeholder="password" ref="password" required={true} />
          <input type="password" placeholder="password_confirmation" ref="password_confirmation" required={true} />
          <button className="btn">Sign Up</button>
        </form>
      </div>
    )
  }
} 

export default connect()(SignUp);
