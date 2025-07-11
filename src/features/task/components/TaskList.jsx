import TaskItem from "./TaskItem.jsx"

export default function TaskList({ projectId, taskList, handleClearTask, handleToggleTaskDone }) {
    return (
        <ul className="space-y-2 mb-4">
            {taskList.map((task, index) => (
                <TaskItem
                    key={index}
                    projectId={projectId}
                    taskItem={task}
                    handleClearTask={handleClearTask}
                    handleToggleTaskDone={handleToggleTaskDone}
                />
            ))}
        </ul>)
}