import { useState, Fragment } from 'react';

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const onChange = (eventArg) => setTodo(eventArg.target.value)
  const onSubmit = (eventArg) => {
    eventArg.preventDefault()
    if (!todo) return
    setTodoList(list => [todo, ...list])
    setTodo('')
  }
  return (
    <Fragment>
      <h1>My To Do ({todoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write your task" onChange={onChange} value={todo} />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todoList.map((todo, index) =>
          <li key={index}>{todo}</li>
        )}
      </ul>
    </Fragment>
  )
}

export default App;
