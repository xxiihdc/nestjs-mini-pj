import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// import { CrudService } from './crud.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  // imports: [CrudService]
})
export class PrismaModule {}
