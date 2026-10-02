import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getMainProfile() {
    const profile = await this.prisma.profile.findFirst({
      include: {
        skills: true,
        experience: true,
        projects: true,
      },
    });

    if (!profile) {
      throw new NotFoundException('Профиль не найден');
    }

    return profile;
  }
}
