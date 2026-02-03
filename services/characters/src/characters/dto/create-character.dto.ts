import { IsInt, IsString, Min } from 'class-validator';

export class CreateCharacterDTO {
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  skill: number;

  @IsInt()
  @Min(1)
  stamina: number;

  @IsInt()
  @Min(1)
  luck: number;
}
