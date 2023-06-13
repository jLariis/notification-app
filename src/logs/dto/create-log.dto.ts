import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Category } from "../../categories/entities/category.entity";
import { Channel } from "../../channels/entities/channel.entity";
import { User } from "../../users/entities/user.entity";

export class CreateLogDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    message: string;

    @ApiProperty({type: () => Category})
    category: Category;

    @ApiProperty({type: () => Channel})
    channel: Channel;

    @ApiProperty({type: () => User})
    user: User;
    
}
