import React from 'react';

const Profile = ({ data, value, fClass }) => {
    const {
        last_name,
        first_name,
        email,
    } = data;
    return (
        <div className={fClass}>
            <span className="user__data">{data}</span>
            <span className="user__value">{value}</span>
        </div >
    );
}


export default DataField;