import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchMyInfo } from '../../redux/actions/user';
import { getUserInfo } from '../../redux/selectors';

import Layout from '../Layout';
import StudyProgressWrapper from '../../components/StudyProgress';
import Spinner from '../../components/Spinner';

class StudyProgress extends Component {
    state = {
        isLoading: true,
    }

    async componentDidMount() {
        await this.props.fetchMyInfo()

        this.setState({
            isLoading: false
        });
    }

    render() {
        const { userInfo } = this.props;
        if (!this.state.isLoading && userInfo) {
            return <Layout>
                {
                    <StudyProgressWrapper {...this.props} />
                }
            </Layout>
        } else {
            return <Spinner />
        }
    }
}
const mapStateToProps = state => ({
    userInfo: getUserInfo(state),
})

const mapDispatchToProps = {
    fetchMyInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyProgress);