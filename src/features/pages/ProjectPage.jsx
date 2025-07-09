import Sidebar from "../../components/layouts/SideBar";
import { initialProjects } from "../../assets/asset";
import { useState, useRef } from "react";
import AddProjectModal from "../../components/ui/AddProjectModal";
import MainContentSection from "./MainContentSection";

export default function ProjectPage() {
    const [projects, setProjects] = useState(initialProjects);
    const [selectedProject, setSelectedProject] = useState(projects[0]);

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

    const handleDeleteProject = () => {
        console.log("delete clicked!");
    };

    const handleAddTask = () => {
        console.log("add task clicked!");
    };

    const handleClearTask = (index) => {
        console.log("clear clicked!");
    };

    const handleToggleTaskDone = (index) => {
        console.log("clear clicked!");
    };



    return (
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen font-sans">
            {/* Sidebar */}
            <Sidebar
                projects={projects}
                onAddProject={handleAddProject}
                onSelectProject={handleSelectProject}
                idSelectedProject={selectedProject.id}
            />
            <MainContentSection selectedProject={selectedProject} handleAddTask={handleAddTask} handleClearTask={handleClearTask} handleToggleTaskDone={handleToggleTaskDone} />
            <AddProjectModal ref={addProjectModalRef} onSave={addProject} />

        </div>
    );
}