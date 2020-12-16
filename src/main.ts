import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";
import * as dotenv from "dotenv";
import { PubSub } from "graphql-subscriptions";

dotenv.config();

export const socket = new PubSub();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
