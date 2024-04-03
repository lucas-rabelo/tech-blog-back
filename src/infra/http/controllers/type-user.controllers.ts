import { EditTypeUser } from "@application/use-cases/typeUser/edit/edit-type-user";
import { SendTypeUser } from "@application/use-cases/typeUser/send/send-type-user";
import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CreateAndUpdateTypeUser } from "../dtos/type-user/create-and-update-type-user-body";
import { TypeUserViewModel } from "../view-models/type-users/type-user-view-model";
import { ListTypeUser } from "@application/use-cases/typeUser/list/list-type-user";

@Controller('type-users')
export class TypeUserController {
    constructor(
        private sendTypeUser: SendTypeUser,
        private editTypeUser: EditTypeUser,
        private listTypeUser: ListTypeUser
    ) { }

    @Put(':id/edit')
    async edit(@Param('id') id: string, @Body() body: CreateAndUpdateTypeUser) {
        await this.editTypeUser.execute({
            typeUserId: id,
            title: body.title
        })
    }

    @Get()
    async list(
        @Query('page') page: number, 
        @Query('itemsPerPage') itemsPerPage: number,
        @Query('search') search?: string
    ) {
        const { data, total } = await this.listTypeUser.execute({
            page,
            itemsPerPage,
            search
        });

        return {
            data: data.map(TypeUserViewModel.toHTTP),
            total
        }
    }

    @Post()
    async create(@Body() body: CreateAndUpdateTypeUser) {
        const { title } = body;

        const { typeUser } = await this.sendTypeUser.execute({
            title
        });

        return {
            typeUser: TypeUserViewModel.toHTTP(typeUser)
        }
    }
}