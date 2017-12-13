export interface IScrumboardItems{
    assignee: string;
    task: string;
    taskPriority: number;
    taskSprint: string;
    status: string;
    taskType: string;  
}

export class scrumBoardItems implements IScrumboardItems{
    constructor(
        public assignee: string,
        public task: string,
        public taskPriority: number,
        public taskSprint: string,
        public status: string,
        public taskType: string  
    ){}
}