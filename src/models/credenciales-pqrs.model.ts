import {Model, model, property} from '@loopback/repository';

@model()
export class CredencialesPqrs extends Model {
  @property({
    type: 'string',
    required: true,
  })
  nombrePersona: string;

  @property({
    type: 'string',
    required: true,
  })
  contenido: string;

  @property({
    type: 'string',
    required: true,
  })
  correoPersona: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoMensaje: string;


  constructor(data?: Partial<CredencialesPqrs>) {
    super(data);
  }
}

export interface CredencialesPqrsRelations {
  // describe navigational properties here
}

export type CredencialesPqrsWithRelations = CredencialesPqrs & CredencialesPqrsRelations;
