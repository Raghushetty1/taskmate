export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.id) {
            const date = new Date();
            const updatedTasklist = taskList.map((todo) =>
            (todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
                : todo));
            setTaskList(updatedTasklist);
            setTask({});
        }
        else {
            const date = new Date();
            // console.log(date.getTime());
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            //console.log(newTask);
            setTaskList([...taskList, newTask]);
            setTask({})

        }
    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" value={task.name || ""}  name="task" autoComplete="off" placeholder="add task" onChange={e => setTask({ ...task, name: e.target.value })} maxLength="25" />
                <button type="submit">{task.id ? "Update":"Add"}</button>
            </form>
        </section>
    )
}