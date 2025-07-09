export const initialProjects = [
    {
        id: "p1",
        title: "Learning React",
        createdAt: "2024-12-29",
        deadline: "2025-01-15",
        description:
            "Learn React from the group up. Start with the basics, finish with advanced knowledge.",
        tasks: [
            { id: "t1", title: "Learn advanced concepts", done: false },
            { id: "t2", title: "Learn the basics", done: false },
        ],
        progress: 20, // Percentage
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
        progress: 0,
    },
];
