import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../entities/book.entity';
import { UpdateBookDto } from '../../dto/update-book.dto/update-book.dto';
@Injectable()
export class UpdateBookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.booksRepository.preload({
      id,
      ...updateBookDto,
    });
    if (!book) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
    return this.booksRepository.save(book);
  }
}
