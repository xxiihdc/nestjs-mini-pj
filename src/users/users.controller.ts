import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthUserGuard } from 'src/authenticate/auth.user.guard';
import { ResponseData } from '../common/response.data';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post("/")
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto.toObject());
  // }

  // @UseGuards(AuthUserGuard)
  // @Get('/')
  // findAll() {
  //   console.log("12312311s")
  //   console.log(this.usersService)
  //   return this.usersService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto.toObject());
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return new ResponseData(this.usersService.delete(+id), 204, "OK");
  }
}
