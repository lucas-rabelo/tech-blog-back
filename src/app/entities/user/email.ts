export class Email {
    private email: string;

    get value(): string {
        return this.email;
    }

    private validateValueIsEmailValid(email: string): boolean {
        const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    constructor(email: string) {
        const isEmailIsValid = this.validateValueIsEmailValid(email);

        if(!isEmailIsValid) {
            throw new Error('Email is not valid.');
        }

        this.email = email;
    }
}