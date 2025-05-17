
'use client'
import React from 'react';
import { useProducto } from '../Contexto/contextoProducto';

export default function Card() {
  const producto = useProducto();

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{producto.nombreProducto}</h5>
        <p className="card-text">Precio Producto: {producto.precioProducto}</p>
        <p className="card-text">ISV Producto: {producto.isvProducto}</p>
        <p className="card-text">Costo Total Producto: {producto.precioProducto + producto.isvProducto}</p>
      </div>
    </div>
  );
}
