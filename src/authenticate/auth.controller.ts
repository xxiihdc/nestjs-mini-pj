import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserGuard } from './auth.user.guard';
import { CreateAuthDto } from './dto/create-auth.dto';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';

@Controller("api/v1/auth")
export class AuthController {
  constructor(private readonly jwtService: JwtService, private readonly empService: EmployeesService) {}
  @Post("/")
  async create(@Body() createAuthDto: CreateAuthDto): Promise<string> {
    // ????
    const emp: any = await this.empService
      .where({companyEmail: createAuthDto.email})
      .include({
          User: true
      }).query().then(data => data[0]);
    const accessToken = this.jwtService.signAsync({ userId: emp.user.id});
    return  accessToken.then(token => token);
  }

  @Get("/test")
  @UseGuards(AuthUserGuard)
  hi(): string {
    return "hi"
  }
}
