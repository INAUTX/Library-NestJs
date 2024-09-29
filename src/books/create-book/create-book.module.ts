import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBookService } from './create-book/create-book.service';
import { Book } from '../entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [CreateBookService],
  exports: [CreateBookService],
})
export class CreateBookModule {}
