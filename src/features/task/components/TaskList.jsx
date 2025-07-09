import TaskItem from "./TaskItem.jsx"

export default function TaskList({ taskList, handleClearTask, handleToggleTaskDone }) {
    <ul className="space-y-2 mb-4">
        {taskList.map((task, index) => (
            <TaskItem taskItem={task} handleClearTask={handleClearTask} handleToggleTaskDone={handleToggleTaskDone} />
        ))}
    </ul>

}