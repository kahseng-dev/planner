export const data = [
    {
        id: 1,
        title: "goal title",
        createdDateTime: new Date('2025-07-18T00:00:00'),
        tasks: [
            {
                id: 1,
                text: "task text",
                isCompleted: false,
            }
        ],
    },
    {
        id: 2,
        title: "another goal",
        createdDateTime: new Date('2025-07-18T00:00:00'),
        tasks: [
            {
                id: 2,
                text: "task",
                isCompleted: false,
            }
        ],
    },
    {
        id: 3,
        title: "THIS IS A LONGGGGGGGGGGGGGGGGGGGGGGGGGGG goal title 2",
        createdDateTime: new Date('2025-07-10T00:00:00'),
        tasks: [
            {
                id: 3,
                text: "THIS IS A LONGGGGGGGGGGGGGGGGGGGGGGGGGGG TASK text",
                isCompleted: true,
            },
            {
                id: 4,
                text: "this is a normal text",
                isCompleted: false,
            },
        ],
    },
    {
        id: 4,
        title: "Run a 5k race",
        createdDateTime: new Date('2025-07-14T00:00:00'),
        tasks: [
            {
                id: 5,
                text: "Buy comfortable running shoes",
                isCompleted: false,
            },
            {
                id: 6,
                text: "Complete a training plan",
                isCompleted: true,
            },
            {
                id: 7,
                text: "Register for a local race",
                isCompleted: true,
            },
        ],
    },
    {
        id: 5,
        title: "today goal",
        createdDateTime: new Date(),
        tasks: [
            {
                id: 8,
                text: "Buy food",
                isCompleted: false,
            },
        ],
    }
]