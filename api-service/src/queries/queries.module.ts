import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Query } from './queries.model';
import { QueriesService } from './queries.service';

@Module({
  imports: [SequelizeModule.forFeature([Query])],
  providers: [QueriesService],
  exports: [QueriesService],
})
export class QueriesModule {}
