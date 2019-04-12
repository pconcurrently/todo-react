import React from 'react';
import ToDoItem from './ToDoItem';

import './style.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        {
          id: 1,
          text: 'create vue todo',
        },
        {
          id: 2,
          text: 'create react todo',
        },
      ],
      inputText: '',
    }
  }

  onChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.createNewToDoItem();
    }
  }

  createNewToDoItem = () => {
    const { todo, inputText } = this.state;
    const newToDo = {
      id: todo.length,
      text: inputText,
    };

    this.setState({
      todo: [
        ...todo,
        newToDo,
      ],
      inputText: '',
    });
  }

  render() {
    const { todo, inputText } = this.state;
    return (
      <div class='todo-container'>
        <div class='todo'>
          <h1 class='todo__header'>React ToDo</h1>
          <div class='todo__container'>
            <div class='todo__content'>
              {todo.map(item => (
                <ToDoItem key={item.id} item={item} />
              ))}
            </div>
            <div class='todo__form'>
              <input type='text' value={inputText} onChange={this.onChange} onKeyPress={this.handleKeyPress} />
              <input type="button" class='todo__add' value='+' onClick={this.createNewToDoItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
