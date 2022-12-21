export interface Producto {
    id?:           number;
    nombre:       string;
    codigo_barra: number;
    descripcion:  string;
    precio:       number;
    imagen?:       string;
}