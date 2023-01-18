import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import Detail from './routes/detail'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;