import { useEffect, useState } from "react";
import TaskList from "../task/components/TaskList";
import ProjectHeader from "../projects/components/ProjectHeader"
import ProgressBar from "../../components/ui/ProcessBar";
import AddTaskForm from "../task/components/AddTaskForm";
import { calculateProgress } from "../../assets/asset"

export default function MainContentSection({
    selectedProject,
    handleDeleteProject, handleAddTask,
    handleClearTask, handleToggleTaskDone
}) {
    const [process, setProcess] = useState();

    useEffect(() => {
        if (selectedProject?.tasks) {
            console.log("Tasks:", selectedProject.tasks);
            setProcess(calculateProgress(selectedProject.tasks));
        }
    }, [selectedProject]); // ✅ chỉ phụ thuộc vào selectedProject

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
                            <AddTaskForm projectId={selectedProject.id} onAdd={handleAddTask} />

                            {/*Tasks List */}
                            <TaskList taskList={selectedProject.tasks} handleClearTask={handleClearTask} handleToggleTaskDone={handleToggleTaskDone} />

                            {/* Progress Bar */}
                            <ProgressBar progress={process} />

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