import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { HttpModule } from '@nestjs/axios';
import { QueriesModule } from 'src/queries/queries.module';

@Module({
  imports: [HttpModule, QueriesModule],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
