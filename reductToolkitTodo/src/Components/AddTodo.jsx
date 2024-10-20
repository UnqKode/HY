import react, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo,removeTodo} from '../Features/ToDo/todoSlice'

function AddTodo(){

    const [input,setInput]=useState('')
    const dispatch = useDispatch()

    const addTodoHandler =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder='Enter a Todo...'
            value={input} 
            onChange={(e)=>setInput(e.target.value)}/>
            <button
            type='SUBMIT'>
                ADD TODO
            </button>
        </form>
    )
}

export default AddTodo