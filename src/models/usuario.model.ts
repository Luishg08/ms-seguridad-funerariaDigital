import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Login} from './login.model';
import {Rol} from './rol.model';

@model({settings: {strict: false}})
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  primerNombre: string;

  @property({
    type: 'string',
  })
  segundoNombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  primerApellido: string;

  @property({
    type: 'string',
  })
  segundoApellido?: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
  })
  clave?: string;

  @property({
    type: 'string',
  })
  hashValidacion?: string;

  @property({
    type: 'boolean',
  })
  estadoValidacion?: boolean;

  @property({
    type: 'string',
  })
  foto?: string;

  @property({
    type: 'boolean',
  })
  aceptado?: boolean;

  @hasMany(() => Login)
  logins: Login[];

  @belongsTo(() => Rol)
  rolId: string;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
