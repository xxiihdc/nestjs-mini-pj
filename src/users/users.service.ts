import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CrudService } from 'src/prisma/crud.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService extends CrudService<User> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, 'User');
  }

  findByEmail(email: string): Promise<User> {
    // return this.prismaService.user.findFirst({
    //   where: {
    //     email: email
    //   }
    // })
    return null;
  }
}
