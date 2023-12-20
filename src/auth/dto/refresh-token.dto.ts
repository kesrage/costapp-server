import { IsNotEmpty } from "class-validator"

export class RefrshTokenDto {
    @IsNotEmpty()
    readonly refresh_token: string

    @IsNotEmpty()
    readonly username: string
}