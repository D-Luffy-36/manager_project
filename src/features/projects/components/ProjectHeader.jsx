import { TrashIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ProjectHeader({ selectedProject, handleDeleteProject }) {
    const { title, createdAt, deadline, description, id } = selectedProject;

    // Format ngày thành DD/MM/YYYY
    const createdDate = new Date(createdAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const deadlineDate = new Date(deadline).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    return (
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Left: Title & Description */}
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                        {title}
                    </h1>
                    <p className="text-gray-600">{description}</p>
                </div>

                {/* Right: Dates & Delete */}
                <div className="flex flex-col items-start md:items-end space-y-4">
                    {/* Created Badge */}
                    <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                        <ClockIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">
                            Created: {createdDate}
                        </span>
                    </div>

                    {/* Deadline Badge */}
                    <div className="flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full">
                        <CalendarIcon className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-medium text-red-700">
                            Deadline: {deadlineDate}
                        </span>
                    </div>

                    {/* Delete Button */}
                    <button
                        onClick={() => handleDeleteProject(id)}
                        className="mt-2 inline-flex items-center space-x-1 text-red-600 hover:text-red-800"
                    >
                        <TrashIcon className="w-5 h-5" />
                        <span className="text-sm font-semibold">Delete Project</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
