import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,
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
