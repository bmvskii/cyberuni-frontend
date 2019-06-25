import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStudentById } from '../../redux/selectors';
import { compose } from 'redux';
import { fetchStudents } from '../../redux/actions/students';

import StudentDetailsWrapper from '../../components/StudentDetails';
import Layout from '../Layout';
import Spinner from '../../components/Spinner';

class StudentDetails extends Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        this.props.fetchStudents();
        this.setState({
            isLoading: false
        });
    }

    render() {
        const { student } = this.props;
        if (!this.state.isLoading && student) {
            return <Layout>
                {
                    <StudentDetailsWrapper info={student} />
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
        student: getStudentById(state, id),
    }
}

const mapDispatchToProps = {
    fetchStudents,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(StudentDetails);