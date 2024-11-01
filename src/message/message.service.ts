import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MessageEntity } from "./entity/message.entity";
import { createMessageDto } from "./dto/createMessage.dto";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messagesRepository: Repository<MessageEntity>
  ) {}
  /*   ----------------------Get All Messages--------------------------------------------- */
  async getMessages(): Promise<MessageEntity[]> {
    const messages = await this.messagesRepository.find();
    return messages;
  }

  /*   ----------------------Create new Message--------------------------------------------- */
  async createMessage(message: createMessageDto): Promise<MessageEntity> {
    const newMessage = await this.messagesRepository.create({
      name: message.name,
      email: message.email,
      message: message.message,
    });
    const res = await this.messagesRepository.save(newMessage);
    return res;
  }
}
