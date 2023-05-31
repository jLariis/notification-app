import { Category } from "src/categories/entities/category.entity";
import { Channel } from "src/channels/entities/channel.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    phoneNumber: string;

    @ManyToMany(() => Category, {eager: true,
        cascade: true,})
    @JoinTable()
    subscribed: Category[];

    @ManyToMany(() => Channel, {eager: true,
        cascade: true,})
    @JoinTable()
    channels: Channel[];
}
