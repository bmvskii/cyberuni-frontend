import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getTeacherById } from '../../redux/selectors';
import { compose } from 'redux';
import { fetchTeachers, fetchTeacherById } from '../../redux/actions/teachers';

import TeacherDetailsWrapper from '../../components/TeacherDetails';
import Layout from '../Layout';
import Spinner from '../../components/Spinner';

class TeacherDetails extends Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        const { isMyTeacher, isDetailsPage } = this.props;
        const { match: { params: { id } } } = this.props;

        if (isMyTeacher) {
            this.props.fetchTeachers()
        } else {
            this.props.fetchTeacherById(id)
        }


        this.setState({
            isLoading: false,
        })
    }

    render() {
        const { teacher } = this.props;

        if (!this.state.isLoading && teacher) {
            return <Layout>
                {
                    <TeacherDetailsWrapper info={teacher} />
                }
            </Layout>
        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        teacher: getTeacherById(state, id),
    }
}

const mapDispatchToProps = {
    fetchTeachers,
    fetchTeacherById
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(TeacherDetails);