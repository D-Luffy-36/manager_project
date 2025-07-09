import { useRef, forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

const AddProjectModal = forwardRef(({ onSave }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        },
    }));

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Add New Project</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        // 👉 Lấy toàn bộ dữ liệu input trong form
                        const formData = new FormData(e.target);
                        const newProject = {
                            id: `p${Date.now()}`,
                            title: formData.get("title"),
                            // 👉 Nếu user nhập thì dùng, còn không thì gán mặc định
                            createdAt: formData.get("createdAt")
                                || new Date().toISOString().split("T")[0],
                            deadline: formData.get("deadline")
                                || new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                            description: formData.get("description"),
                            tasks: [],
                            progress: 0,
                        };
                        onSave(newProject);
                        setIsOpen(false);
                    }}
                >
                    <div className="mb-2">
                        <label className="block mb-1 text-sm">Title</label>
                        <input
                            name="title"
                            required
                            className="w-full border border-gray-300 rounded px-2 py-1"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block mb-1 text-sm">Created At</label>
                        <input
                            name="createdAt"
                            type="date"

                            className="w-full border border-gray-300 rounded px-2 py-1"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block mb-1 text-sm">Deadline</label>
                        <input
                            name="deadline"
                            type="date"

                            className="w-full border border-gray-300 rounded px-2 py-1"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-sm">Description</label>
                        <textarea
                            name="description"
                            rows="3"

                            className="w-full border border-gray-300 rounded px-2 py-1"
                        ></textarea>
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-1 text-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-1 bg-blue-600 text-white rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
});

export default AddProjectModal;
