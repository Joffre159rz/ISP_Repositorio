import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcesoDeterminadoModule } from './proceso_determinado/proceso_determinado.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    ProcesoDeterminadoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
