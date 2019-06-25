import React from 'react';
// import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';

import './spinner.sass'

const Spinner = () => {
    return <div className="spinner-wrapper">
        <BarLoader
            // css={css}
            sizeUnit={"px"}
            size={200}
            color={'#003ADC'}
            loading={true}
        />
    </div>
};

export default Spinner;