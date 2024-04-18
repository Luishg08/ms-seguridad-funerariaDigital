export namespace ConfiguracionSeguridad {
  export const claveJWT = process.env.SECRET_PASSWORD_JWT;
  export const menuUsuarioId = "66206e9328eababa68cfa69c";
  export const listarAccion = "listar";
  export const guardarAccion = "guardar";
  export const editarAccion = "editar";
  export const eliminarAccion = "eliminar";
  export const descargarAccion = "descargar";
  export const mongodbConnectionString = process.env.CONNECTION_STRING_MONGODB;
  export const rolUsuarioPublico = "6620787728eababa68cfa69e";
  export const rolAdministrador = "661ef8087001866d384ba96f"
}
