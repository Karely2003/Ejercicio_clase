'use client'
import React from 'react';
import { useProducto } from '../Contexto/contextoProducto';
import { useContextCarrito } from '../Provider/ProviderCarrito';

export default function BotonAgregar() {
  const producto = useProducto();
  const { agregarCarrito } = useContextCarrito();

  return (
    <button type="button" className="btn btn-success" onClick={() => agregarCarrito(producto)}>
      Agregar Producto
    </button>
  );
}
