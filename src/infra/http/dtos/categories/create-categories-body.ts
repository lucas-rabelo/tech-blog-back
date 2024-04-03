import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateCategoriesBody {
    @IsNotEmpty()
    title: string;

    @IsUUID()
    createdById: string;
}