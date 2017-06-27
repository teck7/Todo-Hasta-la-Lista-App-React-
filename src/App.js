import React, { Component } from 'react';
import shortid from 'shortid'; //Aditional plugin added to yarn package
import TodoList from './components/TodoList';
import { saveItems, readItems } from './storage';

//const exampleTodoItems = [
//  {
//     _id: shortid.generate(),
//     completed: false,
//     description: 'Incomplete item'
//  },
//  {
//     _id: shortid.generate(),
//     completed: true,
//     description: 'Yes, completed item'
//  },
//  {
//     _id: shortid.generate(),
//     completed: true,
//     description: 'Lorem Ipsum'
//  },
//]

class App extends Component {
  state = {
    items: readItems()
  }

  // When my component's state changes this will be called
  componentDidUpdate(prevProps, prevState) {
    // That means I can save out the current items
    saveItems(this.state.items)
  }

  handleAddTodoItem = () => {
    const newItem = {
      _id: shortid.generate(),
      completed: false,
      description: ''
    }

    this.setState((prevState) => {
      const newItems = prevState.items.concat(newItem)
      return {
        // this.state.items will be changed
        items: newItems
      }
    })
  }

  // Find he item with the pass id, and toggle its completed value
  handleCompleteTodoItem = (id) => {
    this.setState((prevState) => {
      const newItems = prevState.items.map((item) => (
        item._id === id ? (
          // Copy item with completed set to opposite
          Object.assign({}, item, { completed: !item.completed })
        ) : (
          item
        )
      ))

      return {
         items: newItems
      }
    })
  }

  // Find the item with the passed id, and change its description value
  handleChangeTodoItemDescription = (id, newDescription) => {
    this.setState((prevState) => {
      const newItems = prevState.items.map((item) => (
        item._id === id ? (
          // Copy item with description changed
          Object.assign({}, item, { description: newDescription })
        ) : (
          item
        )
      ))

      // Update our state with the changed items
      return {
         items: newItems
      }
    })
  }

  render() {

    const { items } = this.state

    return (
      <main className="container-fluid">
          <div className="container-title text-center">
              <h2 className="app-title">Hasta la Lista</h2>
          </div>
          <div className="container-button">
              <button className="add-task-button" onClick={ this.handleAddTodoItem }>Add</button>
          </div>
          <div className="container-fluid to-do-list">
              <TodoList
                  items={ items }
                  onCompleteItem={ this.handleCompleteTodoItem }
                  onChangeItemDescription={ this.handleChangeTodoItemDescription }
              />
          </div>
      </main>
    );
  }
}

export default App;
