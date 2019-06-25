import { Component } from 'react';

export default class ErrorBoundry extends Component {
    constructor() {
        super();
        
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    }
    
    render() {
        const { hasError } = this.state;

        if (hasError) {
            return;
        }

        return this.props.children;
    }
}