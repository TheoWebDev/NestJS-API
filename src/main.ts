import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // useGlobalPipes allows use pipes on all API
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist true rejected field if it not in the interface/class
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
