import { Module } from '@nestjs/common';
import { LeadsController } from './controller/leads.controller';
import { LeadsService } from './services/leads.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [LeadsService],
  controllers: [LeadsController],
  exports: [LeadsService],
})
export class LeadsModule {}
