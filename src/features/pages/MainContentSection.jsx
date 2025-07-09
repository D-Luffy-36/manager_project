export default function MainContentSection() {
    return (
        <>
            {/* Main Content */}
            <main className="p-6 overflow-y-auto">
                {idSelectedProject ?
                    (
                        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                            {/* Project Header */}
                            {/* <div className="flex justify-between items-start mb-4">
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
                            </div> */}

                            {/* Description */}
                            {/* <p className="text-black mb-4">{selectedProject.description}</p>
                            <hr className="my-4 border-gray-200" /> */}

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
                            {/* <ul className="space-y-2 mb-4">
                                {selectedProject.tasks.map((task, index) => (
                                    <li key={index} className="flex justify-between items-center text-black">
                                        <span>{task}</span>
                                        <button
                                            onClick={() => handleClearTask(index)}
                                            className="text-blue-500 hover:underline text-sm"
                                        >
                                            Clear
                                        </button>
                                    </li>
                                ))}
                            </ul> */}

                            {/* Progress Bar */}
                            <div className="bg-gray-200 h-2 rounded mt-4">
                                <div
                                    className="bg-green-500 h-2 rounded"
                                    style={{ width: `${selectedProject.progress}%` }}
                                ></div>
                            </div>

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