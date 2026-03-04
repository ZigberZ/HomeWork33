import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя пользователя', example: 'Иван Иванов' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Email пользователя', example: 'ivan@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
