import React from 'react';
import { ApiServiceConsumer } from '../Context'

const withApiService = () => (Wrapper) => {
    return (props) => {
        return (
            <ApiServiceConsumer>
                {
                    (apiService) => {
                        return <Wrapper apiService={apiService} {...props} />
                    }
                }
            </ApiServiceConsumer>
        );
    }
}

export default withApiService;