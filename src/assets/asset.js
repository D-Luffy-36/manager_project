import alignJustifyIcon from "./align-justify.svg";

export const assets = {
    alignJustifyIcon
}

export function calculateProgress(tasks) {
    if (!tasks || tasks.length === 0) return 0;
    const doneCount = tasks.filter((task) => task.done).length;
    return Math.round((doneCount / tasks.length) * 100);
}

export const initialProjects = [
    {
        id: "p1",
        title: "Learning React",
        createdAt: "2024-12-29",
        deadline: "2025-01-15",
        description:
            "Learn React from the ground up. Start with the basics, finish with advanced knowledge.",
        tasks: [
            { id: "t1", title: "Learn advanced concepts", done: true },
            { id: "t2", title: "Learn the basics", done: false },
        ],
    },
    {
        id: "p2",
        title: "Mastering React",
        createdAt: "2024-12-20",
        deadline: "2025-03-01",
        description: "Deep dive into React advanced features.",
        tasks: [
            { id: "t3", title: "Use Context", done: false },
            { id: "t4", title: "Optimize performance", done: false },
        ],
    },
    {
        id: "p3",
        title: "Learning Vietnamese",
        createdAt: "2024-12-29",
        deadline: "2025-01-15",
        description:
            "Learn Vietnamese from the ground up. Start with the basics, finish with advanced knowledge.",
        tasks: [
            { id: "t5", title: "Learn pronunciation", done: false },
            { id: "t6", title: "Practice daily conversation", done: false },
        ],
    },
    {
        id: "p4",
        title: "Learning Chinese",
        createdAt: "2024-12-29",
        deadline: "2025-01-15",
        description:
            "Learn Chinese from the ground up. Start with the basics, finish with advanced knowledge.",
        tasks: [
            { id: "t7", title: "Learn Pinyin", done: false },
            { id: "t8", title: "Practice characters", done: false },
        ],
    },
];
