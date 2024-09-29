import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsDateString()
  @IsNotEmpty()
  readonly publishedDate: string;

  @IsString()
  @IsNotEmpty()
  readonly genre: string;
}
