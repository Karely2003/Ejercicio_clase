'use client'
import React from 'react';
import { useProducto } from '../Contexto/contextoProducto';
import { useContextCarrito } from '../Provider/ProviderCarrito';

export default function BotonEliminar() {
  const producto = useProducto();
  const { eliminarDelCarrito } = useContextCarrito();

  return (
    <button type="button" className="btn btn-danger" onClick={() => eliminarDelCarrito(producto.idProducto)}>
      Eliminar Producto
    </button>
  );
}

