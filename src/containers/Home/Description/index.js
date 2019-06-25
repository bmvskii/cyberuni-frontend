import React from 'react';
import Button from '../../../components/Button';

const Description = () => {
    return (
        <div className="description__wrapper container">
            <div className="description">
                <div className="description__left">
                    <h2 className="h2 description__heading">Что дает <span className="black">СyberUni?</span></h2>
                </div>
                <div className="description__right">
                    <p className="description__para">
                        Сервис дает возможность пользователю хранить всю информацию об учебе в одном месте.
                        Больше никаких переходов по куче сайтов , чтобы узнать контакт преподавателя.
                    </p>
                    <p className="description__para">
                        CyberUni также предоставляет возможность отслеживания личного прогресса обучения,
                        планировать важные задачи, смотреть дни рождения одногруппников и другое. 
                    </p>
                    <Button text={"Начать"} whiteBlue type='link' href='/signup'/>
                </div>
            </div>
        </div>
    );
}

export default Description;