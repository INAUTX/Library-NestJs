import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  // UseGuards,
} from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookService } from './create-book/create-book/create-book.service';
import { ReadBooksService } from './read-books/read-books/read-books.service';
import { UpdateBookService } from './update-book/update-book/update-book.service';
import { DeleteBookService } from './delete-book/delete-book/delete-book.service';
import { CreateBookDto } from './dto/create-book.dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto/update-book.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { Roles } from '../auth/roles.decorator';

@Controller('books')
export class BooksController {
  constructor(
    private readonly createBookService: CreateBookService,
    private readonly readBooksService: ReadBooksService,
    private readonly updateBookService: UpdateBookService,
    private readonly deleteBookService: DeleteBookService,
  ) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.createBookService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.readBooksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.readBooksService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.updateBookService.update(id, updateBookDto);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.deleteBookService.remove(id);
  }
}
