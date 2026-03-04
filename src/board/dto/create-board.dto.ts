import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @ApiProperty({ description: 'Название доски', example: 'Мои задачи' })
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
