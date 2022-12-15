import React from "react";

class TaskItem extends React.Component {
    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    };
    render() {
        return (
            <tr>
                <td>
                    {this.props.taskItem.task}
                </td>
                <td>
                    <button>Edit</button>
                    <button onClick={this.deleteTask}>Delete</button>
                </td>
            </tr>
        );
    };
};

export default TaskItem;