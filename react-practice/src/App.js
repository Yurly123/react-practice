import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState('')
  useEffect(() => {
    console.log('I run only once')
  }, [])
  useEffect(() => {
    console.log('I run when [keyword] changes')
  }, [keyword])
  useEffect(() => {
    console.log('I run when [counter] changes')
  }, [counter])

  const onClick = () => setCounter(prev => prev + 1) 
  const onChange = (eventArg) => setKeyword(eventArg.target.value)
  return (
    <div>
      <input type="text" placeholder="Search" onChange={onChange} value={keyword}></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
