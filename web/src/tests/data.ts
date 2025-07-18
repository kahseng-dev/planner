export const data = [
    {
        id: 1,
        title: "goal title",
        createdDateTime: new Date(),
        tasks: [{
            id: 1,
            text: "task text",
            isCompleted: false,
        }],
    },
    {
        id: 2,
        title: "THIS IS A LONGGGGGGGGGGGGGGGGGGGGGGGGGGG goal title 2",
        createdDateTime: new Date(),
        tasks: [
            {
                id: 2,
                text: "THIS IS A LONGGGGGGGGGGGGGGGGGGGGGGGGGGG TASK text",
                isCompleted: true,
            },
            {
                id: 3,
                text: "this is a normal text",
                isCompleted: false,
            },
        ],
    },
    {
        id: 3,
        title: "Run a 5k race",
        createdDateTime: new Date(),
        tasks: [
            {
                id: 4,
                text: "Buy comfortable running shoes",
                isCompleted: false,
            },
            {
                id: 5,
                text: "Complete a training plan",
                isCompleted: true,
            },
            {
                id: 6,
                text: "Register for a local race",
                isCompleted: true,
            },
        ],
    }
]