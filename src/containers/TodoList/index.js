import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getTodos } from '../../redux/selectors';
import { fetchTodos } from '../../redux/actions/todos'
import { api } from '../../services';

import TodoListWrapper from '../../components/TodoList';
import Spinner from '../../components/Spinner';
import Layout from '../Layout';

class TodoList extends Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        this.props.fetchTodos()
        this.setState({
            isLoading: false,
        })
    }

    onDeleteHandler = async (event) => {
        const { fetchTodos } = this.props;

        const id = event.target.dataset.id;
        await api.deleteTask(id);

        fetchTodos();
    }

    onCreateHandler = async (name, description, expirationDate) => {
        const { fetchTodos } = this.props;

        await api.createTask({
            name,
            description,
            expirationDate,
        });

        fetchTodos();
    }

    onCompleteHandler = async (event) => {
        const { fetchTodos } = this.props;
        const { id, completed } = event.target.dataset;
        
        await api.toggleTaskCompletness(id, completed);
        
        fetchTodos();
    }

    onRecoveryHandler = async (event) => {
        const { fetchTodos } = this.props;
        const { id } = event.target.dataset;
        await api.deleteTaskDeadline(id);
        
        fetchTodos();
    }

    render() {
        const { todos } = this.props;

        if (!this.state.isLoading && todos) {
            return <Layout>
                {
                    <TodoListWrapper
                        {...this.props}
                        onCreateHandler={this.onCreateHandler}
                        onCompleteHandler={this.onCompleteHandler}
                        onDeleteHandler={this.onDeleteHandler}
                        onRecoveryHandler={this.onRecoveryHandler}
                    />
                }
            </Layout>;
        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = (state) => ({
    todos: getTodos(state)
})

const mapDispatchToProps = {
    fetchTodos,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(TodoList);