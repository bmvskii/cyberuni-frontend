import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getLoggedInStatus } from '../../redux/selectors';

import Hero from './Hero';
import Description from './Description';
import Advantages from './Advantages';
import Layout from '../Layout';

class Home extends Component {

    componentDidMount() {
        const { history } = this.props;
    }

    render() {
        return (
            <Layout>
                <Hero />
                <Description />
                <Advantages />
            </Layout>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history,
    isLoggedIn: getLoggedInStatus(state)
});

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Home);