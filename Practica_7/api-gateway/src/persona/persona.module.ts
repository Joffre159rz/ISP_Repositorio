import { Module } from '@nestjs/common';
import { ProxyModule } from './../common/proxy/proxy.module';
import { PersonaController } from './persona.controller';

@Module({
  imports: [ProxyModule],
  controllers: [PersonaController],
})
export class PersonaModule {}
