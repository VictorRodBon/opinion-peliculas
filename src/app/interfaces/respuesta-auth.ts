// interfaces/respuesta-auth.ts
export interface RespuestaAuth {
  token: string;          // JWT
  usuario: string;        // por ejemplo, el correo o id del usuario
  // Opcionalmente, puedes mantener:
  message?: string;       // solo si tu backend lo devuelve
}
