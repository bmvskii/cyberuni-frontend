import React from 'react';
import Emoji from 'react-emoji-render';

import ImageUploader from 'react-images-upload';

import './profile.sass';

const Profile = ({ data, photo, onPhotoUpdateHandler }) => {
    const {
        last_name,
        first_name,
        email,
    } = data;

    const userPhoto = photo ?
        <img src={photo} alt={`${last_name} ${first_name}`}className="student__photo-inner" /> :
        <Emoji text={'👤'} className="student__photo-emojii" />;

    return (
        <div className="user container">
            <h1 className="user__heading h1">Мои данные</h1>
            <div className="user__content">
                <div className="user__left">

                    <div className="user__first_name">
                        <span className="user__data">Имя : </span>
                        <span className="user__value">{first_name}</span>
                    </div>
                    <div className="user__last_name">
                        <span className="user__data">Фамилия : </span>
                        <span className="user__value">{last_name}</span>
                    </div>

                    <div className="user__email">
                        <span className="user__data">Електронная почта : </span>
                        <span className="user__value">{email}</span>
                    </div>

                </div>
                <div className="user__right">
                    {userPhoto}
                    <form method="post" encType="multipart/form-data">
                        <ImageUploader
                            withIcon={true}
                            buttonText='Обновить фото'
                            onChange={onPhotoUpdateHandler}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    </form>
                </div>
            </div>
        </div >
    );
}


export default Profile;