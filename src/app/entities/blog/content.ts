export class Content {
  private content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5;
  }

  constructor(content: string) {
    const isContentLengthIsValid = this.validateContentLength(content);

    if (!isContentLengthIsValid) {
      throw new Error('Content length error.');
    }

    this.content = content;
  }
}
