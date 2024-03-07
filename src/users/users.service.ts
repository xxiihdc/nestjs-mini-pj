import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CrudService } from 'src/prisma/crud.service';

@Injectable()
export class UsersService extends CrudService<User> {
}
