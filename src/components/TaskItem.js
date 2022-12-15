import React from "react";

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.taskItem.task,
            isEditing: false,
        };
    }
    setEditingState = (isEditing) => {
        this.setState({ isEditing });
    };
    toggleTask = () => {
        this.props.toggleTask(this.props.id);
    };
    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    };
    handleChange = (e) => {
        this.setState({ task: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTask(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    };
    render() {
        return (
            <tr>
                {this.state.isEditing ? (
                    <>
                        <td>
                            <form onSubmit={this.handleSubmit}>
                                <input value={this.state.task} onChange={this.handleChange} autoFocus />
                            </form>
                        </td>
                        <td>
                            <button type='submit' onClick={this.handleSubmit}>Save</button>
                            <button onClick={() => this.setEditingState(false)} type='button'>Back</button>
                        </td>
                    </>
                ) : (
                    <>
                        <td className='task' onClick={this.toggleTask}>
                            <input type='checkbox' readOnly checked={this.props.taskItem.isCompleted} />
                            <span className={this.props.taskItem.isCompleted ? 'completed' : 'not-completed'}>{this.props.taskItem.task}</span>
                        </td>
                        <td>
                            <button onClick={() => this.setEditingState(true)}>Edit</button>
                            <button onClick={this.deleteTask}>Delete</button>
                        </td>
                    </>
                )
                }
            </tr>
        );
    };
};

export default TaskItem;