import React from 'react';


const ToDoItem = (props) => {
  const { item, deleteItem } = props;
  return (
    <div class='todo-item'>
      <p class='todo-item__text'>{item.text}</p>
      <div class='todo-item__delete' onClick={() => deleteItem(item)}>-</div>
    </div >
  );
}

export default ToDoItem;
