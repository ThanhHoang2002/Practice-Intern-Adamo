import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoute } from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {publicRoute.map((route, index) => (
            <Route key={index} path={route.path} element={route.component()} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
