import React from "react";

class TaskItem extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.taskItem.task}
                </td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        )
    }
}

export default TaskItem;