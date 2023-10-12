import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { prototype } from 'events';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3005
  await app.listen(port,()=>console.log(`Listening on ${port}`));
}
bootstrap();