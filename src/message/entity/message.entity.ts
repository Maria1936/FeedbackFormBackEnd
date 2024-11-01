import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("MessageEntity")
export class MessageEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: "varchar" })
  name: string;

  @ApiProperty()
  @Column({ type: "varchar" })
  email: string;

  @ApiProperty()
  @Column({ type: "varchar" })
  message: string;
}
