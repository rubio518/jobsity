import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get(':ticker')
  findOne(@Param('ticker') ticker: string) {
    return this.stocksService.findOne(ticker);
  }
}
