import React, { Component } from 'react';
import auth from '../../services/authService';
import './todo.scss';
import todoService from '../../services/todoService';
import familyService from '../../services/familyService';
import Select from '../common/select/select';
import Input from '../common/input/input';

class Todo extends Component {
  state = {
    items: [],
    members: [],
    data: { name: '', assignedTo: '' },
    errors: {},
  };
  user;
  async componentDidMount() {
    this.user = auth.getCurrentUser();
    const todo = await todoService.getTodoList(this.user.familyId);
    const family = await familyService.getFamilyList(this.user.familyId);
    this.setState({ items: todo.items, members: family.items });
  }

  async deleteItem(id) {
    try {
      await todoService.deleteTodo(id);
      const data = await todoService.getTodoList(this.user.familyId);
      this.setState({ items: data.items });
    } catch (ex) {}
  }

  async doSubmit() {
    if (this.state.data.name === '' || this.state.data.assignedTo === '')
      return;
    try {
      await todoService.addItem(this.state.data);
      const data = await todoService.getTodoList(this.user.familyId);
      this.setState({ items: data.items, data: { name: '', assignedTo: '' } });
    } catch (ex) {}
  }

  handleFormChange({ currentTarget: input }, field) {
    if (input.value.trim() === '') return;
    let data = { ...this.state.data };
    if (field === 'name') {
      data.name = input.value;
    }
    if (field === 'assignedTo') {
      data.assignedTo = input.value;
    }
    this.setState({ data });
  }

  async handleToggle(item) {
    await todoService.toggleTodoState(item.id, !item.completed);
    const data = await todoService.getTodoList(this.user.familyId);
    this.setState({ items: data.items });
  }

  handleChange = async (item, { currentTarget: select }) => {
    await todoService.reassignTodo(item.id, select.value);
    const data = await todoService.getTodoList(this.user.familyId);
    this.setState({ items: data.items });
  };

  render() {
    const { items, data, errors } = this.state;
    return (
      <div className="todo-container">
        <div className="header-div">
          <div className="todo-heading">To-Do List</div>
          <p className="todo-sub-heading">Your virtual to-do list.</p>
        </div>
        <div className="table-container">
          <table className="todo-table">
            <thead>
              <tr className="border">
                <th className="number">#</th>
                <th className="details">Details</th>
                <th className="assign">Assigned To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border">
                  <td onClick={() => this.handleToggle(item)}>
                    <div
                      className={item.completed ? 'check-div' : 'uncheck-div'}
                    ></div>
                  </td>
                  <td className={item.completed ? 'strike details' : 'details'}>
                    {item.name}
                  </td>
                  <td className="assign">
                    <Select
                      name="assignedTo"
                      value={item.assignedTo}
                      options={this.state.members}
                      handleChange={(e) => this.handleChange(item, e)}
                    ></Select>
                  </td>
                  <td
                    className="delete"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    <i className="fa fa-times"></i>
                  </td>
                </tr>
              ))}
              <tr className="border">
                <td></td>
                <td className="details">
                  <Input
                    value={data['name']}
                    name="name"
                    error={errors['name']}
                    handleChange={(e) => this.handleFormChange(e, 'name')}
                  ></Input>
                </td>
                <td className="assign">
                  <Select
                    name="assignedTo"
                    value={data['assignedTo']}
                    options={this.state.members}
                    handleChange={(e) => this.handleFormChange(e, 'assignedTo')}
                  ></Select>
                </td>
                <td className="delete" onClick={() => this.doSubmit()}>
                  <i className="fa fa-plus"></i>
                </td>
              </tr>
              <tr className="last-row">
                <td></td>
                <td className="details"></td>
                <td className="assign"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.history.push('/');
          }}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Todo;
