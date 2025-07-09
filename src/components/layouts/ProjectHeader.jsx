export default function ProjectHeader({ selectedProject, handleDeleteProject }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto my-12">
            {/* Header Line */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h1 className="text-2xl font-bold text-black">{selectedProject.title}</h1>
                    <p className="text-sm text-gray-500">{selectedProject.date}</p>
                </div>

                <button
                    onClick={handleDeleteProject}
                    className="text-red-500 hover:underline text-sm"
                >
                    Delete
                </button>
            </div>

            {/* Description */}
            <p className="text-black mb-4">{selectedProject.description}</p>
            <hr className="my-4 border-gray-200" />
        </div>
    );
}
