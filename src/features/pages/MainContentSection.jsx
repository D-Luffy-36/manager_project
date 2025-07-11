import { useEffect, useState } from "react";
import TaskList from "../task/components/TaskList";
import ProjectHeader from "../projects/components/ProjectHeader"
import ProgressBar from "../../components/ui/ProcessBar";
import AddTaskForm from "../task/components/AddTaskForm";
import { calculateProgress } from "../../assets/asset"


export default function MainContentSection({
    selectedProject, addTask,
    clearTask, toggleTaskDone, deleteProject
}) {
    // Khai báo state `process` để lưu giá trị phần trăm hoàn thành
    const [process, setProcess] = useState(0);

    useEffect(() => {
        // Chỉ chạy khi `selectedProject` thay đổi (thêm/xóa/sửa task hoặc chọn project khác)
        if (selectedProject?.tasks) {
            // Tính toán tiến độ dựa trên mảng tasks của project hiện tại
            const newProgress = calculateProgress(selectedProject.tasks);

            // Cập nhật state `process` để ProgressBar render lại
            setProcess(newProgress);
        }
    }, [
        // Chỉ quan sát `selectedProject` (khi object này đổi reference)
        selectedProject
    ]);

    return (
        <>
            {/* Main Content */}
            <main className="p-6 overflow-y-auto">
                {selectedProject ?
                    (
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                            {/* Project Header */}
                            <ProjectHeader
                                selectedProject={selectedProject}
                                handleDeleteProject={deleteProject}
                            />

                            {/* Tasks Section */}
                            <AddTaskForm projectId={selectedProject.id} onAdd={addTask} />

                            {/*Tasks List */}
                            <TaskList
                                projectId={selectedProject.id}
                                taskList={selectedProject.tasks}
                                handleClearTask={clearTask}
                                handleToggleTaskDone={toggleTaskDone}
                            />

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