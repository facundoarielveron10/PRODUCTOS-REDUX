import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { eliminarProductoAction } from '../actions/ProductoActions';

export default function Producto({ producto }) {
	const { nombre, precio, id } = producto;

	const dispatch = useDispatch();

	// Confirmar eliminacion de un producto
	const confirmarEliminarProducto = id => {
		// Preguntar al usuario

		// Pasarlo al action
		dispatch(eliminarProductoAction(id));
	};

	return (
		<tr>
			<td>{nombre}</td>
			<td>
				<span className="font-weight-bold">$ {precio}</span>
			</td>
			<td className="acciones">
				<Link
					className="btn btn-primary mr-2"
					to={`/productos/editar/${id}`}
				>
					Editar
				</Link>
				<button
					className="btn btn-danger"
					type="button"
					onClick={() => confirmarEliminarProducto(id)}
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
}
