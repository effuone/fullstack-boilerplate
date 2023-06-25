import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaService } from 'src/persistence/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[JwtModule, AuthModule],
  controllers: [PostController],
  providers: [PostService, PrismaService]
})
export class PostModule {}
