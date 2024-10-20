import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {
 
  return (
    <UserContextProvider>
      <h1>React With Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
