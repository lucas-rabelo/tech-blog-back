import { IsNotEmpty } from "class-validator";

export class CreateAndUpdateTypeUser {
    @IsNotEmpty()
    title: string;
}