import React from "react";
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task, index) => {
                        return <TaskItem key={index} taskItem={task} id={index} deleteTask={this.props.deleteTask} />
                    })}
                </tbody>
            </table>
        )
    }
}

export default TaskList;