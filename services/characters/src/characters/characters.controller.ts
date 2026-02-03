import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CharactersService } from './characters.service';
import { CreateCharacterDTO } from './dto/create-character.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('characters')
export class CharactersController {
  constructor(private service: CharactersService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateCharacterDTO) {
    return this.service.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Req() req) {
    return this.service.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Req() req, @Param('id') id: string) {
    return this.service.findOne(req.user.userId, id);
  }
}
