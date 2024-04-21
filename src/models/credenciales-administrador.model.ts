import {model, property} from '@loopback/repository';
import {Usuario} from '.';

@model()
export class CredencialesAdministrador extends Usuario {
  @property({
    type: 'string',
    required: true,
  })
  sedeId: string;

  @property({
    type: 'string',
    required: true,
  })
  responsabilidades: string;


  constructor(data?: Partial<CredencialesAdministrador>) {
    super(data);
  }
}

export interface CredencialesAdministradorRelations {
  // describe navigational properties here
}

export type CredencialesAdministradorWithRelations = CredencialesAdministrador & CredencialesAdministradorRelations;
