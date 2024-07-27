export class Task {
  public name: string;
  public isCompleted: boolean;

  constructor(name: string, isCompleted: boolean) {
    this.name = name;
    this.isCompleted = isCompleted;
  }
}
