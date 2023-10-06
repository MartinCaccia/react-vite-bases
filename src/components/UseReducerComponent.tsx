import { useEffect, useReducer, useRef } from 'react';
import { useForm } from './hooks/useForm';

interface Task {
    id: number,
    task: string,
    done: boolean
}
interface Action {
    type: string,
    payload: Task
}

const initialList: Task[] = [
    {
        id: 1,
        task: 'Learn reducer',
        done: false
    },
    {
        id: 2,
        task: 'Learn useReducer',
        done: false
    }    
]

const reducer = (state: Task[], action: Action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.payload];
      case 'UPDATE_TASK':
        return state.map(task => task.id === action.payload.id ? action.payload : task);
      case 'DELETE_TASK':
        return state.filter(task => task.id !== action.payload.id);
      default:
        return state;
    }
  };

export const UseReducerComponent = () => {
    const focusRef: any = useRef()
    useEffect(() => {
        focusRef.current.focus()
    }, [])

    const [tasks, dispatch] = useReducer(reducer, initialList);
    const addTask = (task: Task) => {
      dispatch({ type: 'ADD_TASK', payload: task });
    };
    const updateTask = (task: Task) => {
      dispatch({ type: 'UPDATE_TASK', payload: task });
    };
    const deleteTask = (task: Task) => {
      dispatch({ type: 'DELETE_TASK', payload: task });
    };  

    const AddItem = (inputValue: string) => {
        if (inputValue.length < 1) return
        console.log(tasks.length)
        addTask({ id: (tasks[tasks.length-1].id) + 1, task: inputValue.trim(), done: false})   
    }
    const updateItem = (task: Task) => {
        updateTask({ ...task, done: true})   
    }
    const initialForm = {
        newTask:''
    }
    const {newTask, onInputChange} = useForm(initialForm)
    const handleSubmit = (event: any) => {
        event.preventDefault()
    }
    return (
        <>
          <h2>useReducer</h2>
          <form onSubmit={handleSubmit}>
            <input 
                ref={focusRef}            
                id="newTask"
                name="newTask"
                type='text' 
                placeholder='Add new task' 
                value={newTask}
                onChange={onInputChange}
            />
            <button type="submit" onClick={()=> AddItem(newTask)}>Add task</button>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                        <p>{ JSON.stringify(task) }</p>
                        <button type="submit" onClick={() => updateItem(task)}>Update to done</button>
                        <button type="submit" onClick={() => deleteTask(task)}>Delete task</button>
                    </li>
                    ))}
                </ul>
            </form>
        </>
      );
}


  