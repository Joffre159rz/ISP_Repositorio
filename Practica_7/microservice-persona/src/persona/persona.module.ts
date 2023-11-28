// import { Module } from '@nestjs/common';
// import { PersonaService } from './persona.service';
// import { PersonaController } from './persona.controller';

// @Module({
//   controllers: [PersonaController],
//   providers: [PersonaService]
// })
// export class PersonaModule {}

import { Module } from '@nestjs/common';
import { PERSONA } from './../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import { PersonaSchema } from './schema/persona.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PERSONA.name,
        useFactory: () => PersonaSchema,
      },
    ]),
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
