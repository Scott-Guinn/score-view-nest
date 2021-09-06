import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { DeviceController } from './device/device.controller';
import { ApiServiceService } from './api-service/api-service.service';
import { ApiService } from './api/api.service';

@Module({
  imports: [],
  controllers: [AppController, ApiController, DeviceController],
  providers: [AppService, ApiServiceService, ApiService],
})
export class AppModule {}
