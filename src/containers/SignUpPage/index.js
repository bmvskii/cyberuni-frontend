import React, { Component } from 'react';
import { withRouter } from 'react-router';
import SignUpForm from '../../components/Auth/SignUpForm';
import Layout from '../Layout';

import '../../components/Auth/Auth.sass'
import { api } from '../../services';

class SignUpPage extends Component {
    state = {
        double_password: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        errors: {
            firstNameError: {
                msg: '',
                status: '',
            },
            lastNameError: {
                msg: '',
                status: '',
            },
            emailError: {
                msg: '',
                status: '',
            },
            passwordsError: {
                msg: '',
                status: '',
            },
        }
    }

    onChangeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onFocusHandler = (event) => {
        event.preventDefault();
        
        const { name } = event.target;
        const error = {};
        
        error[name] = {  ...this.state.errors[name], msg: '', status: false };

        this.setState({
            errors: {
                ...this.state.errors,
                error,
            }
        });

        event.target.value = '';
    }

    validateField = (value, cb, errorObj) => {
        if (cb(value)) {
            // this.setState(state => {

            //     return {
            //         errors: {
            //             errorObj.key : errorObj.value
            //         }
            //     }
            // })
        }
    }

    onClickHandler = async (event) => {
        event.preventDefault();

        const {
            password,
            first_name,
            last_name,
            email
        } = this.state;

        const { history } = this.props;
        const res = await api.signUp({ first_name, last_name, password, email });

        if (res.status === 201) {
            history.push('/signup-ok');
        }
    }

    render() {
        return (
            <Layout>
                {
                    <div className="auth container">
                        <SignUpForm
                            onClickHandler={this.onClickHandler}
                            onChangeHandler={this.onChangeHandler}
                            errors={this.state.errors}
                            onFocusHandler={this.onFocusHandler}
                        />
                    </div>
                }
            </Layout>
        );
    }
}

export default withRouter(SignUpPage);