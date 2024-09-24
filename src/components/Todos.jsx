
import { useSelector , useDispatch } from "react-redux"
import { removeTodo , updateTodo } from "../feature/todo/todoSlice.js"
import { useState } from "react"


function Todos() {
    const todos = useSelector((state) => state.todos)
   
    const [input , setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e, todo) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, text: input }));
    setInput("");
  };
     

  return (
    <>
     <div className="mt-12"></div>
    <ul className="list-none  "> 
        {todos.map((todo) => (
          <li
            className=" flex  items-center  bg-zinc-800 px-4 py-2 rounded-xl mb-4 "
            key={todo.id}
          >
            <div className='text-white text-xl'>{todo.text}</div>

            <div className="ml-auto flex space-x-3 ">
            <form className=" flex items-center space-x-2 " onSubmit={(e) => addTodoHandler(e, todo)}>
              <div className=" group relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder=" ..."
                
                className="bg-zinc-600 rounded  border-0 py-1 px-4 focus:outline-none focus:ring-0 text-slate-500"
              />
               <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Write a todo to update it
                  </span>
              </div>
               
              
              <button 
                
                className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                onClick={() => dispatch(updateTodo({ id: todo.id, text: input }) ) }
                
              >
                <div className="group relative">
                <svg
                 className=" hover:scale-110 transition-all   "
                 width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Update Todo
                  </span>

                </div>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg> */}

              </button>
            </form>



           
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <div className="group relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Delete Todo
                  </span>
              </div>
              
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

    
export default Todos;