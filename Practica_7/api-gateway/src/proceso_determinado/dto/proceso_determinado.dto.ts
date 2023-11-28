import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ProcesoDeterminadoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  proceso_id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  flujo_proceso_id: string;
}
