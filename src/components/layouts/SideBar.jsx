import AddButton from "../ui/AddButton";

export default function Sidebar({ projects, idSelectedProject, onAddProject, onSelectProject }) {
    return (
        <aside className="bg-gray-900 text-white p-4 overflow-y-auto hidden md:block ">
            <h2 className="text-xl font-bold mb-4">YOUR PROJECTS</h2>

            {/* <button
                onClick={onAddProject}
                className="w-full bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded mb-6"
            >
                + Add Project
            </button> */}
            <AddButton tittle={"+ add project"} onClick={onAddProject} />

            <ul className="space-y-2">
                {projects.map((project) => (
                    <li
                        key={project.id}
                        onClick={() => onSelectProject(project.id)}
                        className={`p-2 rounded cursor-pointer hover:bg-gray-800 ${idSelectedProject === project.id ? "bg-blue-600 text-white" : ""
                            }`}
                    >
                        {project.title}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
