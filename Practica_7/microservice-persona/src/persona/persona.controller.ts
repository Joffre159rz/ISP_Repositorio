// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { PersonaService } from './persona.service';
// import { CreatePersonaDto } from './dto/create-persona.dto';
// import { UpdatePersonaDto } from './dto/update-persona.dto';

// @Controller('persona')
// export class PersonaController {
//   constructor(private readonly personaService: PersonaService) {}

//   @Post()
//   create(@Body() createPersonaDto: CreatePersonaDto) {
//     return this.personaService.create(createPersonaDto);
//   }

//   @Get()
//   findAll() {
//     return this.personaService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.personaService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
//     return this.personaService.update(+id, updatePersonaDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.personaService.remove(+id);
//   }
// }

import { MessagePattern, Payload } from '@nestjs/microservices';
import { PersonaDTO } from './dto/persona.dto';
import { PersonaService } from './persona.service';
import { Controller } from '@nestjs/common';
import { PersonaMSG } from 'src/common/constants';

@Controller()
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @MessagePattern(PersonaMSG.CREATE)
  create(@Payload() personaDTO: PersonaDTO) {
    return this.personaService.create(personaDTO);
  }

  @MessagePattern(PersonaMSG.FIND_ALL)
  findAll() {
    return this.personaService.findAll();
  }

  @MessagePattern(PersonaMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.personaService.findOne(id);
  }

  @MessagePattern(PersonaMSG.UPDATE)
  update(@Payload() payload) {
    return this.personaService.update(payload.id, payload.personaDTO);
  }

  @MessagePattern(PersonaMSG.DELETE)
  delete(@Payload() id: string) {
    return this.personaService.delete(id);
  }
}
