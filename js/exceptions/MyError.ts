export class MyError implements Error {
  public name = "MyError";

  constructor(
    public message: string
  ) {
    this.message = message;
  }
}
