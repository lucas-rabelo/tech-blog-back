import { Content } from "./content"

describe('Content of Blog', () => {
  it('should be able to create a content', () => {
    const content = new Content('this is a content');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a content with less 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  })
})