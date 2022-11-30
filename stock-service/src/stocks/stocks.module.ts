import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
