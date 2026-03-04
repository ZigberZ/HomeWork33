import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, BoardModule, TaskModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
