import { Replace } from "@helpers/Replace";
import { randomUUID } from "crypto";
import { Email } from "./email";

export type UserProps = {
    name: string;
    email: Email;
    birthDate: Date;
    avatarUrl?: string;
    typeUserId: string;
    createdAt: Date;
    updatedAt?: Date;
}

export class User {
    private _id: string;
    private props: UserProps;

    constructor(props: Replace<UserProps, { createdAt?: Date }>, id?: string) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        }
    }

    public get id() {
        return this._id;
    }

    public set name(name: string) {
        this.props.name = name;
    }

    public get name() {
        return this.props.name;
    }

    public set email(email: Email) {
        this.props.email = email;
    }

    public get email() {
        return this.props.email;
    }

    public set birthDate(birthDate: Date) {
        this.props.birthDate = birthDate;
    }

    public get birthDate(): Date {
        return this.props.birthDate;
    }

    public set avatarUrl(avatarUrl: string) {
        this.props.avatarUrl = avatarUrl;
    }

    public get avatarUrl(): string | null | undefined {
        return this.props.avatarUrl;
    }

    public set typeUserId(typeUserId: string) {
        this.props.typeUserId = typeUserId;
    }

    public get typeUserId() {
        return this.props.typeUserId;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }

    public update() {
        this.props.updatedAt = new Date();
    }
    
    public get updatedAt(): Date | null | undefined {
        return this.props.updatedAt;
    }
}