export interface Login{
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    nombre: string;
    password: string;
    correo?: string;
    edad?: number;
    direccion?: string;
    arregloUsuarioLugares?: any[];
}