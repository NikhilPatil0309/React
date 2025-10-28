import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UseContextProvider from './context/UserContextProvider'
function App() {

  return (
    <UseContextProvider>
      <h1>Welcome to React</h1>
      <Login/>
      <Profile/>
    </UseContextProvider>
  )
}

export default App
