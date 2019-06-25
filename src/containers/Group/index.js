import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { fetchMyGroup } from '../../redux/actions/group';
import { getMyGroup } from '../../redux/selectors';

import Layout from '../Layout';
import GroupWrapper from '../../components/Group';
import Spinner from '../../components/Spinner';

class Group extends Component {
    state = {
        loading: true,
    }

    componentDidMount() {
        this.props.fetchMyGroup();
        this.setState({
            loading: false,
        })
    }

    render() {
        if (!this.state.loading && this.props.group) {
            return <Layout>
                {
                    <GroupWrapper {...this.props} />
                }
            </Layout>

        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        group: getMyGroup(state),
    }
}

const mapDispatchToProps = {
    fetchMyGroup,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Group);