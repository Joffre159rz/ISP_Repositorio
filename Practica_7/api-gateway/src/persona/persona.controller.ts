// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { PersonaService } from './persona.service';
// import { CreatePersonaDto } from './dto/persona.dto';
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

import { PersonaMSG } from './../common/constants';
import { PersonaDto } from './dto/persona.dto';
import { Observable } from 'rxjs';
import { ClientProxyCBM } from './../common/proxy/client-proxy';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { IPersona } from 'src/common/interfaces/persona.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('personas')
@Controller('api/v2/personas')
export class PersonaController {
  constructor(private readonly clientProxy: ClientProxyCBM) {}
  private _clientProxyPersona = this.clientProxy.clientProxyPersonas();
  @Post()
  create(@Body() personaDTO: PersonaDto): Observable<IPersona> {
    return this._clientProxyPersona.send(PersonaMSG.CREATE, personaDTO);
  }

  @Get()
  findAll(): Observable<IPersona[]> {
    return this._clientProxyPersona.send(PersonaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IPersona> {
    return this._clientProxyPersona.send(PersonaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() personaDTO: PersonaDto,
  ): Observable<IPersona> {
    return this._clientProxyPersona.send(PersonaMSG.UPDATE, {
      id,
      personaDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyPersona.send(PersonaMSG.DELETE, id);
  }
}
