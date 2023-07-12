import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,
	COMENZAR_DESCARGA_PRODUCTOS,
	DESCARGA_PRODUCTOS_EXITO,
	DESCARGA_PRODUCTOS_ERROR,
	OBTENER_PRODUCTO_ELIMINAR,
	PRODUCTO_ELIMINADO_EXITO,
	PRODUCTO_ELIMINADO_ERROR,
	OBTENER_PRODUCTO_EDITAR,
	COMENZAR_EDICION_PRODUCTO,
	PRODUCTO_EDITADO_EXITO,
	PRODUCTO_EDITADO_ERROR,
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
	return async dispatch => {
		// Intentamos agregar un producto
		dispatch(agregarProducto());
		try {
			// Insertar en la API
			await clienteAxios.post('/productos', producto);
			// Si todo sale bien, actualizar el state
			dispatch(agregarProductoExito(producto));
			// Mostrar alerta de exito
			Swal.fire(
				'Correcto',
				'El producto se agrego correctamente',
				'success',
			);
		} catch (error) {
			// Debuguear el error
			console.log(error);
			// Si todo sale mal, actualizar el state
			dispatch(agregarProductoError(true));
			// Alerta de error
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
				text: 'Hubo un error, intentalo de nuevo',
			});
		}
	};
}
const agregarProducto = () => ({
	type: AGREGAR_PRODUCTO,
	payload: true,
});
const agregarProductoExito = producto => ({
	type: AGREGAR_PRODUCTO_EXITO,
	payload: producto,
});
const agregarProductoError = estado => ({
	type: AGREGAR_PRODUCTO_ERROR,
	payload: estado,
});

// Descargar productos
export function obtenerProductosAction() {
	return async dispatch => {
		// Intentamos obtener los productos
		dispatch(descargarProductos());
		try {
			// Obtener los productos de la API
			const { data } = await clienteAxios.get('/productos');
			dispatch(descargarProductosExito(data));
		} catch (error) {
			console.log(error);
			dispatch(descargarProductosError(true));
		}
	};
}
const descargarProductos = () => ({
	type: COMENZAR_DESCARGA_PRODUCTOS,
	payload: true,
});
const descargarProductosExito = productos => ({
	type: DESCARGA_PRODUCTOS_EXITO,
	payload: productos,
});
const descargarProductosError = estado => ({
	type: DESCARGA_PRODUCTOS_ERROR,
	payload: estado,
});

// Eliminar producto
export function eliminarProductoAction(id) {
	return async dispatch => {
		// Intentamos obtener el producto a eliminar
		dispatch(obtenerProductoEliminar(id));

		try {
			// Obtener el producto a eliminar
			await clienteAxios.delete(`/productos/${id}`);
			dispatch(eliminarProductoExito());
			Swal.fire('Eliminado!', 'El producto fue eliminado', 'success');
		} catch (error) {
			// Debugeamoos el error
			console.log(error);
			dispatch(eliminarProductoError(true));
		}
	};
}
const obtenerProductoEliminar = id => ({
	type: OBTENER_PRODUCTO_ELIMINAR,
	payload: id,
});
const eliminarProductoExito = () => ({
	type: PRODUCTO_ELIMINADO_EXITO,
});
const eliminarProductoError = estado => ({
	type: PRODUCTO_ELIMINADO_ERROR,
	payload: estado,
});

// Obtener producto a editar
export function obtenerProductoEditarAction(producto) {
	return dispatch => {
		// Intentamos obtener el producto a editar
		dispatch(obtenerProductoEditar(producto));
	};
}
const obtenerProductoEditar = producto => ({
	type: OBTENER_PRODUCTO_EDITAR,
	payload: producto,
});

// Editar producto
export function editarProductoAction(producto) {
	return async dispatch => {
		// Intentamos editar el producto
		dispatch(editarProducto());

		try {
			// Obtener el producto a editar de la API
			await clienteAxios.put(`/productos/${producto.id}`, producto);
			dispatch(editarProductoExito(producto));
		} catch (error) {
			console.log(error);
			dispatch(editarProductoError(true));
		}
	};
}
const editarProducto = () => ({
	type: COMENZAR_EDICION_PRODUCTO,
});
const editarProductoExito = producto => ({
	type: PRODUCTO_EDITADO_EXITO,
	payload: producto,
});
const editarProductoError = estado => ({
	type: PRODUCTO_EDITADO_ERROR,
	payload: estado,
});
