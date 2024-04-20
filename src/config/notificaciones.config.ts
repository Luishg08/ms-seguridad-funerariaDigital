export namespace ConfiguracionNotificaciones {
  export const asunto2fa: string = "Código de Verificación - 2FA";
  export const asuntoVerificacionCorreo: string = "Verificación de correo";
  export const claveAsignada: string = "Asignación de Clave";
  export const urlNotificaciones2fa: string = "http://localhost:5041/Notificaciones/correo-2fa";
  export const urlNotificacionesSms: string = "http://localhost:5041/Notificaciones/enviar-sms";
  export const urlValidacionCorreoFrontend: string = "http://localhost:4200/seguridad/validar-hash-usuario-publico";
  export const urlCorreoRecuperarContraseña: string = "http://localhost:5041/Notificaciones/correo-recuperar-contraseña";
  export const correoAdminPetición: string = "admin12345@funerariaDigital.com";
  export const correoAdminQueja: string = "admin1223456@funerariaDigital.com"
  export const correoAdminReclamo: string = "admin1134@funerariaDigital.com"
  export const correoAdminSugerencia: string = "admin12374@funerariaDigital.com"
  export const urlNotificacionesAgradecimientoPQRS: string = "http://localhost:5041/Notificaciones/correo-agradecimiento-pqrs";
}
