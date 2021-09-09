import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { DeviceController } from './device/device.controller';
import { ApiService } from './api/api.service';
import { AdapterStateModule } from './adapter-state/adapter-state.module';

@Module({
  imports: [AdapterStateModule],
  controllers: [AppController, ApiController, DeviceController],
  providers: [AppService, ApiServiceService, ApiService],
})
export class AppModule {}
