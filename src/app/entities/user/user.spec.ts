import { Email } from "./email";
import { User } from "./user";

describe("Create User", () => {
    it("should be able to create a User", () => {
        const user = new User({
            name: 'Lucas Rabelo',
            email: new Email('lucasrabelo@email.com'),
            birthDate: new Date('1999-08-21'),
            typeUserId: 'type-user-id'
        });

        expect(user).toBeTruthy();
    });
})