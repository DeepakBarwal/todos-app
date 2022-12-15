import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = [];
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks,
        };
    }
    createTask = (task) => {
        if (task.trim() === '') {
            alert('Task cannot be empty!');
            return;
        }
        tasks.push({ task, isCompleted: false });
        this.setState({ tasks });
    };
    toggleTask = (taskId) => {
        const taskItem = tasks[taskId];
        taskItem.isCompleted = !taskItem.isCompleted;
        this.setState({ tasks });
    };
    deleteTask = (taskId) => {
        tasks.splice(taskId, 1);
        this.setState({ tasks });
    };
    editTask = (taskId, task) => {
        const taskItem = tasks[taskId];
        taskItem.task = task;
        this.setState({ tasks });
    };
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <div>
                    <CreateTask createTask={this.createTask} />
                    <br />
                    <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} toggleTask={this.toggleTask} />
                </div>
            </div>
        )
    }
}

export default Main;