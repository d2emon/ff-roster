import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCharacterDTO } from './dto/create-character.dto';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  create(ownerId: string, dto: CreateCharacterDTO) {
    return this.prisma.character.create({
      data: {
        ownerId,
        ...dto,
      },
    });
  }

  findAll(ownerId: string) {
    return this.prisma.character.findMany({
      where: { ownerId },
    });
  }

  findOne(ownerId: string, id: string) {
    return this.prisma.character.findFirst({
      where: { id, ownerId },
    });
  }
}
