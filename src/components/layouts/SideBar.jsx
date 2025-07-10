import AddButton from "../ui/AddButton";
import { useState } from "react";
import { assets } from "../../assets/asset";

export default function Sidebar({
    projects,
    idSelectedProject,
    onAddProject,
    onSelectProject,
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <aside
                className={`
                bg-gray-900 text-white p-4 overflow-y-auto
                ${isSidebarOpen ? "block" : "hidden"}
                md:block
        `}
            >
                <div className="grid grid-cols-[auto_auto] justify-center items-center gap-2 mb-4">
                    <h2 className="text-xl font-bold">YOUR PROJECTS</h2>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <img src={assets.alignJustifyIcon} alt="" className="w-5 h-5 invert" />
                    </button>
                </div>

                <AddButton tittle={"+ add project"} onClick={onAddProject} />

                <ul className="space-y-2">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            onClick={() => onSelectProject(project.id)}
                            className={`p-2 rounded cursor-pointer hover:bg-gray-800 ${idSelectedProject === project.id
                                ? "bg-blue-600 text-white"
                                : ""
                                }`}
                        >
                            {project.title}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
