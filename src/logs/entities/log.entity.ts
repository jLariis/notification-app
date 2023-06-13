import { Channel } from "../../channels/entities/channel.entity";
import { Category } from "../../categories/entities/category.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Log {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    message: string;

    @ManyToOne(() => Category)
    @JoinColumn()
    category: Category;

    @ManyToOne(() => Channel)
    @JoinColumn()
    channel: Channel

    @ManyToOne(() => User)
    @JoinColumn()
    user: User;
    
    @CreateDateColumn()
    createdAt: Date; 
}
