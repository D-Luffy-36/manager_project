import { useState } from "react";
import TaskList from "../task/components/TaskList";
import ProjectHeader from "../../components/layouts/ProjectHeader";
import ProgressBar from "../../components/ui/ProcessBar";


export default function MainContentSection({ selectedProject, handleDeleteProject, handleAddTask, handleClearTask, handleToggleTaskDone }) {
    const [newTask, setNewTask] = useState("");
    return (
        <>
            {/* Main Content */}
            <main className="p-6 overflow-y-auto">
                {selectedProject ?
                    (
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                            {/* Project Header */}
                            <ProjectHeader selectedProject={selectedProject} handleDeleteProject={handleDeleteProject} />

                            {/* Tasks Section */}
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
                                onChange={(e) => setNewTask(e.target.value)}
                                placeholder="New task..."
                                className="border border-gray-300 px-2 py-1 rounded w-full mb-4 text-black"
                            />

                            <TaskList taskList={selectedProject.tasks} handleClearTask={handleClearTask} handleToggleTaskDone={handleToggleTaskDone} />

                            {/* Progress Bar */}
                            <ProgressBar progress={selectedProject.progress} />

                            {/* Watermark */}
                            <p className="text-xs text-gray-400 mt-4 text-center">
                                where you can create projects, add tasks to projects
                            </p>
                        </div>
                    )
                    :
                    (
                        <p className="text-gray-500 text-center mt-10">Select a project to view details</p>
                    )}
            </main>
        </>
    );
}