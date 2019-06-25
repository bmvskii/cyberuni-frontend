import React from 'react';
import Advantage from './Advantage';

const Advantages = () => {
    return (
        <div className="advantages__wrapper container">
            <div className="advantages__left">
                <Advantage
                    number={1}
                    heading={"Удобство"}
                    descr={`Только интуитивно-понятный, 'user-friendly' интерфейс в сочетании с красивыми дизайном.`}
                />
            </div>
            <div className="advantages__right">
                <h2 className="h2 advantages__heading">Преимущества CyberUni.</h2>
                <div className="advantages">
                    <Advantage
                        number={2}
                        heading={"Актуальность"}
                        descr={"На данный момент, на просторах Украины аналогов - нет. Мы первые в своей нише."}
                        white
                    />
                    <Advantage
                        number={3}
                        heading={"Функциональность"}
                        descr={"В наличии большой набор функций , который даст вам лучший user-experience. Вы будете удивлены."}
                        white
                    />
                </div>
            </div>
        </div>
    );
}

export default Advantages;