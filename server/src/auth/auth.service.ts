import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    // create hash from password
    const hash = await argon.hash(dto.password);
    // save the user in db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
    // return the saved user without hash
    delete user.hash;
    return user;
  }
  signin() {
    return { msg: 'I have signed in' };
  }
}
