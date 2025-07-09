import Sidebar from "../../components/layouts/SideBar";
import { initialProjects } from "../../assets/asset";
import { useState } from "react";

export default function ProjectPage() {
    const [projects, setProjects] = useState(initialProjects);
    const [idSelectedProject, setIdSelectedProject] = useState(projects[0].id);
    const [newTask, setNewTask] = useState("");

    // Handlers for project and task management
    const handleAddProject = () => {
        // Placeholder for adding a new project
        console.log("Add new project clicked!");
    };

    const handleSelectProject = (id) => {
        console.log("select project clicked!", id);
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

    return (
        <div className="grid grid-cols-[250px_1fr] h-screen font-sans">
            {/* Sidebar */}
            <Sidebar
                projects={projects}
                onAddProject={handleAddProject}
                onSelectProject={handleSelectProject}
                setIdSelectedProject={idSelectedProject}
            />

        </div>
    );
}