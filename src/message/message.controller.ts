import { Controller, Get, Post, Body, ValidationPipe } from "@nestjs/common";
import { ApiBody, ApiTags, ApiResponse, ApiParam } from "@nestjs/swagger";
import { MessageService } from "./message.service";
import { MessageEntity } from "./entity/message.entity";
import { createMessageDto } from "./dto/createMessage.dto";
import { NotFoundResponse, BadRequest } from "./types/notFoundResponse";

@ApiTags("Notes")
@Controller("api/v1/messages")
export class MessageController {
  constructor(private readonly appService: MessageService) {}

  /*   ---------------------------GET Messages---------------------------------------- */

  @Get("")
  @ApiResponse({
    status: 200,
    description: "Get all messages",
    type: [MessageEntity],
  })
  @ApiResponse({
    status: 404,
    description: "Not Found",
    type: NotFoundResponse,
  })
  async getMessages(): Promise<MessageEntity[]> {
    return await this.appService.getMessages();
  }

  /*   ---------------------------------POST Message---------------------------------- */
  @Post("")
  @ApiResponse({
    status: 201,
    description: "Post messages",
    type: MessageEntity,
  })
  @ApiResponse({
    status: 400,
    description: "Whats wrong description",
    type: BadRequest,
  })
  @ApiBody({ type: [createMessageDto] })
  async createNote(
    @Body(new ValidationPipe()) message: createMessageDto
  ): Promise<MessageEntity> {
    return await this.appService.createMessage(message);
  }
}
