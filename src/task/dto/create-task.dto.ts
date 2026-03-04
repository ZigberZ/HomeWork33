import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Название задачи', example: 'Сделать домашку' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Статус задачи', example: 'TODO', required: false })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ description: 'ID доски', example: 'uuid-string' })
  @IsString()
  @IsNotEmpty()
  boardId: string;

  @ApiProperty({ description: 'ID пользователя', example: 'uuid-string', required: false })
  @IsString()
  @IsOptional()
  userId?: string;
}
