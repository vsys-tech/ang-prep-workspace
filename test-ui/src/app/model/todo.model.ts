export class TodoModel {

  constructor(
    public todoName: string,
    public description: string,
    public status: string,
    public assignedTo: string,
    public created: string,
    public completedBy: string) {
  }
}
