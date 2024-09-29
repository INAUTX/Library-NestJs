import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { ReadBooksService } from './read-books/read-books.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [ReadBooksService],
  exports: [ReadBooksService],
})
export class ReadBooksModule {}
