import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({type: String, required: true})
    @IsNotEmpty()
    firstName:string;

    @ApiProperty({type: String, required: true})
    @IsNotEmpty()
    lastName:string;

    @ApiProperty({type: String, required: true})
    @IsEmail()
    email: string;

    @ApiProperty({type: String, required: true})
    @IsNotEmpty()
    phoneNumber: string;
}
