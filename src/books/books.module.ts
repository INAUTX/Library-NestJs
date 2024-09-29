import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { CreateBookModule } from './create-book/create-book.module';
import { ReadBooksModule } from './read-books/read-books.module';
import { UpdateBookModule } from './update-book/update-book.module';
import { DeleteBookModule } from './delete-book/delete-book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    CreateBookModule,
    ReadBooksModule,
    UpdateBookModule,
    DeleteBookModule,
  ],
  controllers: [BooksController],
})
export class BooksModule {}
