import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubjects, getTeachers, getUserInfo } from '../../redux/selectors';
import { fetchSubjects } from '../../redux/actions/subjects';
import { fetchTeachers } from '../../redux/actions/teachers';
import { fetchMyInfo } from '../../redux/actions/user';

import { withRouter } from 'react-router';
import { compose } from 'redux';

import SubjectsWrapper from '../../components/Subjects';
import Layout from '../Layout';
import Spinner from '../../components/Spinner';

class Subjects extends Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        this.props.fetchMyInfo()
        this.props.fetchSubjects()
        this.props.fetchTeachers()

        this.setState({
            isLoading: false
        })
    }

    render() {
        const { subjects, teachers, userInfo} = this.props;
        if (!this.state.isLoading && subjects && teachers && userInfo) {
            return <Layout>
                {
                    <SubjectsWrapper {...this.props} />
                }
            </Layout>
        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = state => ({
    subjects: getSubjects(state),
    teachers: getTeachers(state),
    userInfo: getUserInfo(state)
})

const mapDispatchToProps = {
    fetchSubjects,
    fetchTeachers,
    fetchMyInfo,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Subjects);