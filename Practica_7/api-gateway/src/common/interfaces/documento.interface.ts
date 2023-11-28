import { IPersona } from './persona.interface';
import { IProcesoDeterminado } from './proceso_determinado.interface';
export interface IDocumento {
  _id?: string;
  principal: string;
  recibido: boolean;
  persona_id: IPersona;
  proceso_determinado_id: IProcesoDeterminado;
}
