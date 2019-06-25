import { Component } from 'react';
import { withRouter } from 'react-router';
import cookies from 'react-cookies';
import { ACCESS_TOKEN_FIELD } from '../../config';
import { connect } from 'react-redux';
import { signIn, logIn, auth } from '../../redux/actions/auth'
import { compose } from 'redux';

class AuthProvider extends Component {
    render() {
        const { children, history, signIn } = this.props;
        const ACCESS_TOKEN = cookies.load(ACCESS_TOKEN_FIELD);
        const isHomepage = history.location.pathname === '/home';
        const isLogin = history.location.pathname === '/login';

        if (ACCESS_TOKEN) {
            logIn();

            if (isHomepage) {
                history.push('/')
            }

            return children;
        }
        else {
            if (!isHomepage) {
                history.push('/home')
            }
            return children;
        }
    }
}

const mapDispatchToProps = {
    signIn,
    logIn,
    auth
}

export default compose(
    withRouter,
    connect(null, mapDispatchToProps))(AuthProvider);