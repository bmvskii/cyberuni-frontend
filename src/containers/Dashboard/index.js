import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/selectors';
import { fetchMyInfo } from '../../redux/actions/user';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import DashboardWrapper from '../../components/Dashboard';
import Layout from '../Layout';
import Spinner from '../../components/Spinner';

class Dashboard extends Component {
    state = {
        isLoading: true,
    }

    async componentDidMount() {
        await this.props.fetchMyInfo();

        this.setState({
            isLoading: false
        })
    }

    render() {
        const { user } = this.props;

        if (!this.state.isLoading && user) {
            return <Layout>
                {
                    <DashboardWrapper {...this.props} />
                }
            </Layout>

        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = state => ({
    user: getUserInfo(state),
})

const mapDispatchToProps = {
    fetchMyInfo,
}


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
