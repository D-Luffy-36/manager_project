export default function TaskItem({
    projectId,
    taskItem,
    handleClearTask,
    handleToggleTaskDone
}) {
    return (
        <>
            <li key={taskItem.id} className="flex justify-between items-center text-black">
                <div className="flex items-center gap-2">
                    {/* Optional: Checkbox to mark as done */}
                    <input
                        type="checkbox"
                        checked={taskItem.done}
                        onChange={() => handleToggleTaskDone(projectId, taskItem.id)} // bạn sẽ thêm hàm này
                        className="accent-blue-600"
                    />
                    <span className={taskItem.done ? "line-through text-gray-400" : ""}>
                        {taskItem.title}
                    </span>
                </div>

                <button
                    onClick={
                        () => handleClearTask(projectId, taskItem.id)
                    }
                    className="text-blue-500 hover:underline text-sm"
                >
                    Clear
                </button>
            </li>
        </>
    );
}