// import { Module } from '@nestjs/common';
// import { ProcesoDeterminadoService } from './proceso_determinado.service';
// import { ProcesoDeterminadoController } from './proceso_determinado.controller';

// @Module({
//   controllers: [ProcesoDeterminadoController],
//   providers: [ProcesoDeterminadoService],
// })
// export class ProcesoDeterminadoModule {}
import { Module } from '@nestjs/common';
import { PROCESODETERMINADO } from './../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcesoDeterminadoController } from './proceso_determinado.controller';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { PersonaSchema } from './schema/proceso_determinado';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PROCESODETERMINADO.name,
        useFactory: () => PersonaSchema,
      },
    ]),
  ],
  controllers: [ProcesoDeterminadoController],
  providers: [ProcesoDeterminadoService],
})
export class ProcesoDeterminadoModule {}
