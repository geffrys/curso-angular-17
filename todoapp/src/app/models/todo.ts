export class Todo {
    id: number | undefined;
    title: string;
    completed: boolean ;
    constructor( title: string, completed: boolean, id?: number,) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
