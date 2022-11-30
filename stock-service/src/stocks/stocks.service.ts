import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class StocksService {
  constructor(private readonly httpService: HttpService) {}

  async findOne(ticker: string) {
    const stockRequest = await this.httpService
      .get(`https://stooq.com/q/l/?s=${ticker}&f=sd2t2ohlcvn&h&e=csv`)
      .pipe(map((resp) => resp.data));
    const rawStock = await lastValueFrom(stockRequest);
    const stockLines = rawStock.split('\r\n');
    const values = stockLines[1].split(',');
    const [symbol, date, time, open, high, low, close, volume, name] = values;
    return {
      symbol,
      date: `${date}T${time}`,
      open,
      high,
      low,
      close,
      volume,
      name,
    };
  }
}
