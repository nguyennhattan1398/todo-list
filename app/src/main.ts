import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = 1000;

async function start() {
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => {
    console.log(`Application run on port:`, PORT);
  });
}
start();
