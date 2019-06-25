import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyInfo } from '../../redux/actions/user';
import { getUserInfo } from '../../redux/selectors';

import ProfileWrapper from '../../components/Profile';
import Layout from '../Layout';

import Spinner from '../../components/Spinner'
import { api } from '../../services';

class Profile extends Component {

    state = {
        isLoading: true,
        photo: '',
    }

    async componentDidMount() {
        await this.props.fetchMyInfo()

        // const { userInfo: { data: { photo: userPhoto } } } = this.props;

        // userPhoto && this.setState({
        //     photo: userPhoto,
        // })

        this.setState({
            isLoading: false,
        })
    }

    onPhotoUpdateHandler = async (picture) => {
        const formData = new FormData()
        formData.append('photo', picture);
        const { userInfo: { _id } } = this.props;

        await api.updateUserPhoto(_id, formData);

        await this.props.fetchMyInfo()
    }

    render() {
        if (!this.state.isLoading && this.props.userInfo) {

            const { userInfo } = this.props;
            const { photo } = this.state;

            return <Layout>
                {
                    <ProfileWrapper
                        data={userInfo}
                        photo={photo}
                        onPhotoUpdateHandler={this.onPhotoUpdateHandler}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);