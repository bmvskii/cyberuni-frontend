import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeachers } from '../../redux/selectors';
import { fetchTeachers } from '../../redux/actions/teachers';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import TeachersWrapper from '../../components/Teachers';
import Layout from '../Layout';
import Spinner from '../../components/Spinner';

class Teachers extends Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        this.props.fetchTeachers()
        this.setState({
            isLoading: false,
        })
    }

    render() {
        if (!this.state.isLoading && this.props.teachers) {
            return <Layout>
                {
                    <TeachersWrapper {...this.props} />
                }
            </Layout>

        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = state => ({
    teachers: getTeachers(state),
})

const mapDispatchToProps = {
    fetchTeachers,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Teachers);