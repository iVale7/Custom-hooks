import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodo = () => {
    
    
    const [todos, dispatch] = useReducer(todoReducer, [] , init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = todo => {
        const action = {
            type: 'Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleRemoveTodo = id => {
        dispatch({
            type: 'Remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = id => {
        
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    }

  return {
    handleNewTodo, 
    handleRemoveTodo, 
    handleToggleTodo, 
    todos,
    todosCount: todos.length,
    pendingTodos: todos.filter(todo => !todo.done).length
    }
}
