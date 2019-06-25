import React, { Component } from 'react';
import validator from 'validator';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/auth'
import { withRouter } from 'react-router';
import { compose } from 'redux';

import Layout from '../Layout';
import LoginForm from '../../components/Auth/LoginForm';

import '../../components/Auth/Auth.sass'

class SignInPage extends Component {
    state = {
        email: '',
        password: '',
        errors: {
            email: {
                msg: '',
                status: '',
            },
            password: {
                msg: '',
                status: '',
            },
        }
    }

    loginHandler = async (event) => {
        event.preventDefault();

        const { onSignIn, history } = this.props;
        const { email, password } = this.state;

        // this.validateField(email, validator.isEmail,
        //     {
        //         key: 'email',
        //         value: {
        //             msg: "Неверный емейл, введите заного",
        //             status: true,
        //         }
        //     })

        onSignIn(email, password, history);
    }

    onBlur = (event) => {
    
    }

    // onFocusHandler = (event) => {
    //     event.preventDefault();
    //     this.setState({
    //         errors: {
    //             this.state.errors[event.target.name] : {
    //                 msg: '',
    //                 status: false,
    //             }
    //         }
    //     })
    //     event.target.value = '';
    // }

    // validateField = (value, cb, errorObj) => {
    //     if (cb(value)) {
    //         this.setState(state => {
    //             return errors: {
    //                 this.state.errors[errorObj.key] : errorObj.value
    //             }
    //         })
    //     }
    // }

    onChangeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <Layout>
                {
                    <div className="auth container">
                        <LoginForm
                            onClickHandler={this.loginHandler}
                            onChangeHandler={this.onChangeHandler}
                            errors={this.state.errors}
                        />
                    </div>
                }
            </Layout>
        );
    }
}

const mapDispatchToProps = {
    onSignIn: signIn,
};

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(SignInPage);