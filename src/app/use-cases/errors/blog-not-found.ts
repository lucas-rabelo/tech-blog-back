export class BlogNotFound extends Error {
    constructor() {
        super('Blog not found.')
    }
}