import { Email } from "./email"

describe("Email is valid", () => {
    it("should be able to create a email", () => {
        const email = new Email('email@email.com');

        expect(email).toBeTruthy();
    });

    it("should not be able to create a email invalid", () => {
        expect(() => new Email('emailfake.com'));
    })
})