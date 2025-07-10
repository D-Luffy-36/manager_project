import { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/layouts/SideBar";
import { initialProjects } from "../../assets/asset";
import AddProjectModal from "../../components/ui/AddProjectModal";
import MainContentSection from "./MainContentSection";


export default function ProjectPage() {
    const [projects, setProjects] = useState(initialProjects);

    const [selectedProject, setSelectedProject] = useState();

    const addProjectModalRef = useRef();

    const addProject = (newProject) => {
        setProjects((prevProjects) => [
            ...prevProjects, // copy project cũ
            newProject       // thêm project mới
        ]);
    };

    // Handlers for project and task management
    const handleAddProject = () => {
        addProjectModalRef.current.open();
    };

    const handleSelectProject = (id) => {
        setSelectedProject(projects.find((el) => {
            return el.id === id;
        }))
    };

    const handleDeleteProject = (projectId) => {
        console.log("delete project with id: ", projectId);
        setProjects(projects.filter((el) => {
            return el.id !== projectId;
        }))
        setSelectedProject(null);
    };

    // Hàm thêm task mới vào project có projectId
    const handleAddTask = (projectId, taskTitle) => {
        console.log(taskTitle);
        // Cập nhật state projects
        setProjects(prev =>
            prev.map(project => {
                // Nếu project.id trùng với projectId cần thêm task
                if (project.id === projectId) {
                    // Tạo task mới
                    const newTask = {
                        id: Date.now().toString(), // Hoặc dùng uuid cho id duy nhất
                        title: taskTitle,
                        done: false,
                    };

                    // Trả về project mới với mảng tasks mới (thêm task mới)
                    return {
                        ...project,
                        tasks: [...project.tasks, newTask],
                    };
                }

                // Nếu không khớp projectId, trả nguyên project cũ
                return project;
            })
        );
    };

    const handleClearTask = (index) => {
        console.log("clear clicked!");
    };

    const handleToggleTaskDone = (index) => {
        console.log("clear clicked!");
    };

    useEffect(() => {
        if (selectedProject) {
            // Tìm project mới trong projects sau khi projects thay đổi
            const updatedProject = projects.find(
                (p) => p.id === selectedProject.id
            );

            // Nếu tìm thấy => cập nhật selectedProject
            if (updatedProject) {
                setSelectedProject(updatedProject);
            }
        }
    }, [projects]); // 🔑 Chỉ chạy khi projects thay đổi



    return (
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen font-sans">
            {/* Sidebar */}
            <Sidebar
                projects={projects}
                onAddProject={handleAddProject}
                onSelectProject={handleSelectProject}
                idSelectedProject={selectedProject?.id}
            />
            <MainContentSection
                selectedProject={selectedProject}
                handleAddTask={handleAddTask}
                handleClearTask={handleClearTask}
                handleToggleTaskDone={handleToggleTaskDone}
                handleDeleteProject={handleDeleteProject}
            />
            <AddProjectModal ref={addProjectModalRef} onSave={addProject} />

        </div>
    );
}