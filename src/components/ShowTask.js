import React from 'react'

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleEdit = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id);
        //console.log(selectedTask);
        setTask(selectedTask);
    }
    const handleDelete = (id) => {
        const updatedTasklist = taskList.filter(todo => todo.id !== id);
        setTaskList(updatedTasklist);
    }
    return (

        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{ taskList.length > 0 ? taskList.length : 0 }</span>
                </div>
                <button className="clearAll" onClick={() => setTaskList([])}>Clear  </button>
            </div>
            <ul >
                {taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i onClick={() => handleEdit(task.id)} className='bi bi-pencil-square'></i>
                        <i onClick={() => handleDelete(task.id)} className='bi bi-trash'></i>

                    </li>

                ))}

            </ul>
        </section>
    )
}
