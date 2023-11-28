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
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProcesoDeterminadoDTO } from './dto/proceso_determinado.dto';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { Controller } from '@nestjs/common';
import { ProcesoDeterminadoMSG } from 'src/common/constants';

@Controller()
export class ProcesoDeterminadoController {
  constructor(
    private readonly procesoDeterminadoService: ProcesoDeterminadoService,
  ) {}

  @MessagePattern(ProcesoDeterminadoMSG.CREATE)
  create(@Payload() procesoDeterminadoDTO: ProcesoDeterminadoDTO) {
    return this.procesoDeterminadoService.create(procesoDeterminadoDTO);
  }

  @MessagePattern(ProcesoDeterminadoMSG.FIND_ALL)
  findAll() {
    return this.procesoDeterminadoService.findAll();
  }

  @MessagePattern(ProcesoDeterminadoMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.procesoDeterminadoService.findOne(id);
  }

  @MessagePattern(ProcesoDeterminadoMSG.UPDATE)
  update(@Payload() payload) {
    return this.procesoDeterminadoService.update(
      payload.id,
      payload.procesoDeterminadoDTO,
    );
  }

  @MessagePattern(ProcesoDeterminadoMSG.DELETE)
  delete(@Payload() id: string) {
    return this.procesoDeterminadoService.delete(id);
  }
}
