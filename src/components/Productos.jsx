import { Fragment, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/ProductoActions';

export default function Productos() {
	const dispatch = useDispatch();

	useEffect(() => {
		// Consultar la API
		const cargarProductos = () => dispatch(obtenerProductosAction());
		cargarProductos();
	}, [dispatch]);

	return (
		<Fragment>
			<h2 className="text-center my-5">Listado de Productos</h2>

			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Precio</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</Fragment>
	);
}
