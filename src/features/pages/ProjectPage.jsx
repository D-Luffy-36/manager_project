import { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/layouts/SideBar";
import AddProjectModal from "../../components/ui/AddProjectModal";
import MainContentSection from "./MainContentSection";
import { useProjects } from "../projects/hooks/useProjects";



export default function ProjectPage() {
    const {
        projects, selectedProject, modalRef,
        addProject, selectProject, deleteProject,
        addTask, clearTask, toggleTaskDone
    } = useProjects();

    return (
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen font-sans">
            <Sidebar
                projects={projects}
                idSelectedProject={selectedProject?.id}
                onAddProject={() => modalRef.current.open()}
                onSelectProject={selectProject}
            />
            <MainContentSection
                selectedProject={selectedProject}
                addTask={addTask}
                clearTask={clearTask}
                toggleTaskDone={toggleTaskDone}
                deleteProject={deleteProject}
            />
            <AddProjectModal ref={modalRef} onSave={addProject} />
        </div>
    );
}