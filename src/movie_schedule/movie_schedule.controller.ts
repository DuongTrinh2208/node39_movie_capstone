import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovieScheduleService } from './movie_schedule.service';
import { CreateMovieScheduleDto } from './dto/create-movie_schedule.dto';
import { UpdateMovieScheduleDto } from './dto/update-movie_schedule.dto';

@Controller('movie-schedule')
export class MovieScheduleController {
  constructor(private readonly movieScheduleService: MovieScheduleService) {}

  @Post('create')
  async create(
    @Body('movie_id') movie_id: number,
    @Body('showing_datetime') showing_datetime: Date,
    @Body('ticket_price') ticket_price: number,
    @Body('cinema_id') cinema_id: number, ) {
    return await this.movieScheduleService.create(cinema_id, movie_id, showing_datetime, ticket_price);
  }

  @Get()
  async findAll() {
    return this.movieScheduleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.movieScheduleService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body('movie_id') movie_id: number,
    @Body('showing_datetime') showing_datetime: Date,
    @Body('ticket_price') ticket_price: number,
    @Body('cinema_id') cinema_id: number,) {
    return this.movieScheduleService.update(+id, cinema_id, movie_id, showing_datetime, ticket_price);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.movieScheduleService.remove(+id);
  }
}