import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/auth';
import { fetchMyInfo } from '../../redux/actions/user';
import { getLoggedInStatus, getUserEmailAndName } from '../../redux/selectors'
import { withRouter } from 'react-router';
import { compose } from 'redux';

import Header from '../Header';
import Footer from '../../components/Footer'
import Spinner from '../../components/Spinner';

class Layout extends Component {

    state = {
        isSidebarOpen: false,
        isLoading: true,
    }

    componentDidMount() {
        const { location: { pathname } } = this.props;
        const bannedPages = ['/home', '/signup', '/login'];

        if (bannedPages.indexOf(pathname) === -1) {
            this.props.fetchMyInfo();
        }

        this.setState({
            isLoading: false,
        })
    }

    onLogoutHandler = async () => {
        const { onLogout, history } = this.props;
        onLogout(history);
    }

    onMenuToggle = () => {
        this.setState(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen }))
    }

    render() {
        const { children, isLoggedIn, user } = this.props;
        const { isSidebarOpen, isLoading } = this.state;

        const content = <>
            <Header
                onLogoutHandler={() => this.onLogoutHandler()}
                onMenuToggle={() => this.onMenuToggle()}
                isLoggedIn={isLoggedIn}
                isSidebarOpen={isSidebarOpen}
                user={user}
            />
            <div className="content">
                {children}
            </div>
            <Footer />
        </>;

        if (!isLoggedIn) {
            return content
        }
        if (!isLoading && user) {
            return content
        } else {
            return <Spinner />
        }

    }
}

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history,
    isLoggedIn: getLoggedInStatus(state),
    user: getUserEmailAndName(state),
});

const mapDispatchToProps = {
    onLogout: logOut,
    fetchMyInfo
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Layout);