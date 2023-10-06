interface Task {
    id: number,
    task: string,
    done: boolean
}

interface Action {
    type: string,
    payload: Task
}
const taskList: Task[] = [{
    id: 1,
    task: 'Learn reducer',
    done: false
}]

const newTask: Task = {
    id: 2,
    task: 'Learn useReducer',
    done: false
}

const updateTask: Task = {
    id: 1,
    task: 'Learn reducer',
    done: true
}

const addActionTask: Action = {
    type: '[TASK] Add task',
    payload: newTask
}
const updateActionTask: Action = {
    type: '[TASK] Update task',
    payload: updateTask
}
const deleteActionTask: Action = {
    type: '[TASK] Delete task',
    payload: taskList[0]
}

const initialState = taskList

const taskReducer = (initialState: Task[], action: Action): Task[] => {
    switch (action.type) {
        case '[TASK] Add task':
            return[...initialState, action.payload]
        case '[TASK] Update task':
            return initialState.map(task => task.id === action.payload.id ? action.payload : task);
        case '[TASK] Delete task':
            return initialState.filter(task => task.id !== action.payload.id);          
        default:
            return initialState
    }    
}

console.log(taskReducer(initialState, addActionTask))
console.log(taskReducer(initialState, updateActionTask))
console.log(taskReducer(initialState, deleteActionTask))

export const ReduceComponent = () => {
  return (
    <div>ReduceComponent</div>
  )
}
