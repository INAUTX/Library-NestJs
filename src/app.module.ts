import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateBookModule } from './books/create-book/create-book.module';
import { UpdateBookModule } from './books/update-book/update-book.module';
import { DeleteBookModule } from './books/delete-book/delete-book.module';
import { ReadBooksModule } from './books/read-books/read-books.module';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    CreateBookModule,
    UpdateBookModule,
    DeleteBookModule,
    ReadBooksModule,
    BooksModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {}
