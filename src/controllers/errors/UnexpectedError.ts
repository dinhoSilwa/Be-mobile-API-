export class ErrorResponse extends Error {
  constructor(
    public name: string,
    public message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
  setError() {
    return {
      error: {
        name: this.name,
        message: this.message,
        statusCode: this.statusCode,
      },
    };
  }
}
