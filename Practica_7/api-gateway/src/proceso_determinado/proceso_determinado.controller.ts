// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { ProcesoDeterminadoService } from './proceso_determinado.service';
// import { CreateProcesoDeterminadoDto } from './dto/proceso_determinado.dto';
// import { UpdateProcesoDeterminadoDto } from './dto/update-proceso_determinado.dto';

// @Controller('proceso-determinado')
// export class ProcesoDeterminadoController {
//   constructor(
//     private readonly procesoDeterminadoService: ProcesoDeterminadoService,
//   ) {}

//   @Post()
//   create(@Body() createProcesoDeterminadoDto: CreateProcesoDeterminadoDto) {
//     return this.procesoDeterminadoService.create(createProcesoDeterminadoDto);
//   }

//   @Get()
//   findAll() {
//     return this.procesoDeterminadoService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.procesoDeterminadoService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateProcesoDeterminadoDto: UpdateProcesoDeterminadoDto,
//   ) {
//     return this.procesoDeterminadoService.update(
//       +id,
//       updateProcesoDeterminadoDto,
//     );
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.procesoDeterminadoService.remove(+id);
//   }
// }

import { ProcesoDeterminadoMSG } from './../common/constants';
import { ProcesoDeterminadoDto } from './dto/proceso_determinado.dto';
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
import { IProcesoDeterminado } from 'src/common/interfaces/proceso_determinado.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('procesodeterminado')
@Controller('api/v2/procesodeterminado')
export class ProcesoDeterminadoController {
  constructor(private readonly clientProxy: ClientProxyCBM) {}
  private _clientProxyProcesoDeterminado =
    this.clientProxy.clientProxyProcesoDeterminados();
  @Post()
  create(
    @Body() procesoDeterminadoDTO: ProcesoDeterminadoDto,
  ): Observable<IProcesoDeterminado> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.CREATE,
      procesoDeterminadoDTO,
    );
  }

  @Get()
  findAll(): Observable<IProcesoDeterminado[]> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.FIND_ALL,
      '',
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IProcesoDeterminado> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.FIND_ONE,
      id,
    );
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() procesoDeterminadoDTO: ProcesoDeterminadoDto,
  ): Observable<IProcesoDeterminado> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.UPDATE,
      {
        id,
        procesoDeterminadoDTO,
      },
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.DELETE,
      id,
    );
  }
}
