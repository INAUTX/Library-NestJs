import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { DeleteBookService } from './delete-book/delete-book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [DeleteBookService],
  exports: [DeleteBookService],
})
export class DeleteBookModule {}
