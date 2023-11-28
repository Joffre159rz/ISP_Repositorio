// import { Injectable } from '@nestjs/common';
// import { CreateProcesoDeterminadoDto } from './dto/proceso_determinado.dto';
// import { UpdateProcesoDeterminadoDto } from './dto/update-proceso_determinado.dto';

// @Injectable()
// export class ProcesoDeterminadoService {
//   create(createProcesoDeterminadoDto: CreateProcesoDeterminadoDto) {
//     return 'This action adds a new procesoDeterminado';
//   }

//   findAll() {
//     return `This action returns all procesoDeterminado`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} procesoDeterminado`;
//   }

//   update(id: number, updateProcesoDeterminadoDto: UpdateProcesoDeterminadoDto) {
//     return `This action updates a #${id} procesoDeterminado`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} procesoDeterminado`;
//   }
// }
import { ProcesoDeterminadoDTO } from './dto/proceso_determinado.dto';
import { PROCESODETERMINADO } from './../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProcesoDeterminado } from 'src/common/interfaces/proceso_determinado.interface';
import axios from 'axios';
import * as moment from 'moment';

@Injectable()
export class ProcesoDeterminadoService {
  constructor(
    @InjectModel(PROCESODETERMINADO.name)
    private readonly model: Model<IProcesoDeterminado>,
  ) {}

  async create(
    procesoDeterminadoDTO: ProcesoDeterminadoDTO,
  ): Promise<IProcesoDeterminado> {
    const newProcesoDeterminado = new this.model(procesoDeterminadoDTO);
    return await newProcesoDeterminado.save();
  }

  async findAll(): Promise<IProcesoDeterminado[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IProcesoDeterminado> {
    return await this.model.findById(id);
  }

  async update(
    id: string,
    procesoDeterminadoDTO: ProcesoDeterminadoDTO,
  ): Promise<IProcesoDeterminado> {
    return await this.model.findByIdAndUpdate(id, procesoDeterminadoDTO, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
