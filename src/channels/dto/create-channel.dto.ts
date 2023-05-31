import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateChannelDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    name: string;
}
