import { useState, useEffect, useRef } from "react";
import { initialProjects } from "../../../assets/asset";

export function useProjects() {
    const [projects, setProjects] = useState(initialProjects);
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef();

    const addProject = p => setProjects(prev => [...prev, p]);
    const selectProject = id => setSelectedProject(projects.find(x => x.id === id));
    const deleteProject = id => {
        setProjects(prev => prev.filter(x => x.id !== id));
        setSelectedProject(null);
    };

    const addTask = (pid, title) => {
        // trả về mảng project mới
        setProjects(
            (prev) => {
                return prev.map(
                    (el) => {
                        if (el.id === pid) {
                            const newTask = {
                                id: Date.now().toString(),   // Hoặc uuid để unique hơn
                                title: title,
                                done: false,
                            };
                            return {
                                ...el,
                                tasks: [...el.tasks, newTask]
                            }
                        }
                        // nếu không tìm thấy id ko làm gì cả
                        return el;
                    }
                )
            }
        )
    };

    const clearTask = (pid, tid) => {
        setProjects(
            (prev) => {
                // lặp project
                return prev.map(
                    (el) => {
                        if (el.id === pid) {
                            const tasks = el.tasks;
                            // trả project
                            return {
                                ...el,
                                tasks: tasks.filter(
                                    (task) => {
                                        return task.id !== tid;
                                    }
                                )


                            }
                        }
                        return el;
                    }
                )
            }
        );
    };

    const toggleTaskDone = (projectId, taskId) => {
        console.log(`Toggle task done:
            ➜ Project ID: ${projectId}
            ➜ Task ID: ${taskId}`
        );
        // TODO: Logic xử lý toggle task.done ở đây
        setProjects(
            (prev) => {
                // lặp project
                return prev.map(
                    (el) => {
                        if (el.id === pid) {
                            const tasks = el.tasks;
                            // trả project
                            return {
                                ...el,
                                tasks: tasks.filter(
                                    (task) => {
                                        return task.id !== tid;
                                    }
                                )
                            }
                        }
                        return el;
                    }
                )
            }
        );
    };

    useEffect(() => {
        if (selectedProject) {
            const up = projects.find(p => p.id === selectedProject.id);
            setSelectedProject(up || null);
        }
    }, [projects]);

    return {
        projects, selectedProject, modalRef,
        addProject, selectProject, deleteProject,
        addTask, clearTask, toggleTaskDone
    };
}
