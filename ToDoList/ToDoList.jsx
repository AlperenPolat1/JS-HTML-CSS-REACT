import React, {useState} from 'react';
function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast" , "Go to Gym", "Study React"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    
    function addTask() {
        setTasks([...tasks, newTask]);
        setNewTask('');

    }

    function deleteTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
            setTasks(newTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
            setTasks(newTasks);
        }
    }


    return (
    <div className='to-do-list'>
        <h1>To Do List</h1>
        <div>
            <input 
            type="text" 
            placeholder='Add a new task' 
            value={newTask}
            onChange={handleInputChange}
            />
            <button className='add-button' onClick={addTask}>Add Task </button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                    className='delete-button'
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                    className='move-button'
                    onClick={() => moveTaskUp(index)}>
                        ☝️ Move Up
                    </button>
                    <button
                    className='move-button'
                    onClick={() => moveTaskDown(index)}>
                        👇 Move Down
                    </button>
                </li>
            )}
        </ol>

    </div>)

}

export default ToDoList;
