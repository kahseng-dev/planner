export const data = [
    {
        title: "goal title",
        createdDateTime: new Date(),
        tasks: [{
            text: "task text",
            isCompleted: false,
        }],
    },
    {
        title: "THIS IS A LONGGGGGGGGGGGGGGGGGGGGGGGGGGG goal title 2",
        createdDateTime: new Date(),
        tasks: [
            {
                text: "THIS IS A LONGGGGGGGGGGGGGGGGGGGGGGGGGGG TASK text",
                isCompleted: true,
            },
            {
                text: "this is a normal text",
                isCompleted: false,
            },
        ],
    },
    {
        title: "Run a 5k race",
        createdDateTime: new Date(),
        tasks: [
            {
                text: "Buy comfortable running shoes",
                isCompleted: false,
            },
            {
                text: "Complete a training plan",
                isCompleted: true,
            },
            {
                text: "Register for a local race",
                isCompleted: true,
            },
        ],
    }
]