import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
  migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
};

export default config;
