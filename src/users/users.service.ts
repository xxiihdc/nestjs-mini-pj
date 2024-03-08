import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CrudService } from 'src/prisma/crud.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService extends CrudService<User> {
  constructor(private readonly prismaService: PrismaService) { // Inject PrismaService
    super(prismaService, 'User');
  }
}