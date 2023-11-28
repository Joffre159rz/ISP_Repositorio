import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentoModule } from './documento/documento.module';
import { PersonaModule } from './persona/persona.module';
import { ProcesoDeterminadoModule } from './proceso_determinado/proceso_determinado.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    DocumentoModule,
    PersonaModule,
    ProcesoDeterminadoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
