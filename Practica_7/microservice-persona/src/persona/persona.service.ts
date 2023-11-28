// import { Injectable } from '@nestjs/common';
// import { CreatePersonaDto } from './dto/create-persona.dto';
// import { UpdatePersonaDto } from './dto/update-persona.dto';

// @Injectable()
// export class PersonaService {
//   create(createPersonaDto: CreatePersonaDto) {
//     return 'This action adds a new persona';
//   }

//   findAll() {
//     return `This action returns all persona`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} persona`;
//   }

//   update(id: number, updatePersonaDto: UpdatePersonaDto) {
//     return `This action updates a #${id} persona`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} persona`;
//   }
// }
import { PersonaDTO } from './dto/persona.dto';
import { PERSONA } from './../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPersona } from 'src/common/interfaces/persona.interface';
import axios from 'axios';
import * as moment from 'moment';

@Injectable()
export class PersonaService {
  constructor(
    @InjectModel(PERSONA.name)
    private readonly model: Model<IPersona>,
  ) {}

  async create(personaDTO: PersonaDTO): Promise<IPersona> {
    const newPersona = new this.model(personaDTO);
    return await newPersona.save();
  }

  async findAll(): Promise<IPersona[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IPersona> {
    return await this.model.findById(id);
  }

  async update(id: string, personaDTO: PersonaDTO): Promise<IPersona> {
    return await this.model.findByIdAndUpdate(id, personaDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
