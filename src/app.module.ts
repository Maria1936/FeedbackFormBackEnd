import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./config.module";
import { MessageModule } from "./message/message.module";
import { TypeOrmModule } from "./db/typeorm.module";

@Module({
  imports: [ConfigModule, TypeOrmModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
