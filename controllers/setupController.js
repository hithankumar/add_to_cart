var toDos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupScrumBoardData', function(req, res){
        var scrumBoardData = [
            {
                assignee: 'Ben',
                task: 'Complete POC on Node JS',
                taskPriority: 2,
                taskSprint: "Sprint 2",
                status: "toDo",
                taskType: 'feature'
            },
            {
                assignee: 'Ben',
                task: 'Implement dota feature in ML',
                taskPriority: 0,
                taskSprint: "Sprint 1",
                status: "progress",
                taskType: 'feature'
            },
            {
                assignee: 'Mark',
                task: 'Implement dota feature from DB',
                taskPriority: 0,
                taskSprint: "Sprint 1",
                status: "progress",
                taskType: 'feature'
            },
            {
                assignee: 'Sam',
                task: 'Implement dota feature from UI',
                taskPriority: 0,
                taskSprint: "Sprint 1",
                status: "progress",
                taskType: 'feature'
            },
            {
                assignee: 'Ben',
                task: 'On completion the task fails to update',
                taskPriority: 0,
                taskSprint: "Sprint 1",
                status: "toDo",
                taskType: 'bug'
            },
            {
                assignee: 'Sam',
                task: 'ALlignment issue for table',
                taskPriority: 0,
                taskSprint: "Sprint 1",
                status: "inReview",
                taskType: 'bug'
            },
            {
                assignee: 'Mark',
                task: 'Exception error evaluation',
                taskPriority: 0,
                taskSprint: "Sprint 1",
                status: "inTesting",
                taskType: 'bug'
            },
        ];

        toDos.create(scrumBoardData, function(err, results){
            res.send(results);
        });
        console.log("here");
    });


}