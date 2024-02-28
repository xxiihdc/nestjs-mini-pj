import { Controller, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller("api/v1/auth")
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get("/")
  getHello(): string {
    const accessToken = this.jwtService.signAsync({ userId: 1 }, {
      secret: "process.env.JWT_SECRET",
      expiresIn: '10m',
    });

    console.log(accessToken)
    let accessTokenS: string;
    accessToken.then(token => {
      accessTokenS = token;
    });
  
    console.log("duc debug", accessTokenS)
    return accessTokenS
  }
}
