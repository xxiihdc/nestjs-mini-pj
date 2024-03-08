import { Inject, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CrudService } from 'src/prisma/crud.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'USER_CRUD_SERVICE',
      useFactory: (prisma: PrismaService) => new PrismaService(), 
      inject: [PrismaService]
    },
    PrismaService,
    CrudService,
    String
  ],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}