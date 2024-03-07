import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserGuard } from './auth.user.guard';

@Controller("api/v1/auth")
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get("/")
  async getHello(): Promise<string> {
    const accessToken = this.jwtService.signAsync({ userId: 1 });
    return  accessToken.then(token => "token is " + token);
  }

  @Get("/test")
  @UseGuards(AuthUserGuard)
  hi(): string {
    return "hi"
  }
}
