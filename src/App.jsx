
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
   <>
   <h1 className=' text-4xl font-extrabold text-orange-400'>Todo App</h1>
     <AddTodo/>
    <Todos/>
  
   </>
  )
}

export default App
