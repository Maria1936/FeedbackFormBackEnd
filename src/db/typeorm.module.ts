import { Module } from "@nestjs/common";
import { TypeOrmModule as NestTypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "../config.module";
import config from "./ormconfig";

@Module({
  imports: [ConfigModule, NestTypeOrmModule.forRoot(config)],
})
export class TypeOrmModule {}
