import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CrudService } from 'src/prisma/crud.service';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository, PrismaService, CrudService, String],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
