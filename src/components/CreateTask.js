import React from "react";

class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    };
    handleChange = (e) => {
        this.setState({ task: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.createTask(this.state.task);
        this.setState({ task: '' });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Enter task" onChange={this.handleChange} value={this.state.task} autoFocus />
                <button type="submit">Add</button>
            </form>
        );
    };
}

export default CreateTask;