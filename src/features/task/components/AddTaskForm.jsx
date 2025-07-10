import { useState } from "react";

export default function AddTaskForm({ projectId, onAdd }) {

    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        onAdd(projectId, newTask);
        setNewTask("");
    }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-black">Tasks</h2>
                <button
                    onClick={handleAddTask}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                    Add Task
                </button>
            </div>

            <input
                type="text"
                value={newTask}
                name="task-tittle"
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New task..."
                required
                className="border border-gray-300 px-2 py-1 rounded w-full mb-4 text-black"
            />

        </>
    );
}