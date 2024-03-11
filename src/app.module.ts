import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { JwtMiddleware } from './middleware/jwt.middleware';
import { JwtModule } from '@nestjs/jwt';
import { CrudService } from './prisma/crud.service';
import { AuthModule } from './authenticate/auth.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    EmployeesModule,
    JwtModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtMiddleware, CrudService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*');
  }
}
