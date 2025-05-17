import { createContext, useContext } from 'react';
import { Producto } from '../Modelos/Producto';

export const ContextoProducto = createContext<Producto>({} as Producto);

export function useProducto() {
  return useContext(ContextoProducto);
}
