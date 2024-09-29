import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { UpdateBookService } from './update-book/update-book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [UpdateBookService],
  exports: [UpdateBookService],
})
export class UpdateBookModule {}
