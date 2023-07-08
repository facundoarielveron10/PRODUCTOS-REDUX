import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/ProductoActions';

export default function NuevoProducto() {
	const navigate = useNavigate();

	// State del componente
	const [nombre, setNombre] = useState('');
	const [precio, setPrecio] = useState(0);

	// Utilizar useDispatch y te crea una funcion
	const dispatch = useDispatch();

	// Mandar llamar el action de ProductoActions
	const agregarProducto = producto =>
		dispatch(crearNuevoProductoAction(producto));

	// Envio del formulario
	const submitNuevoProducto = e => {
		e.preventDefault();
		// Validar formulario
		if (nombre.trim() === '' || precio <= 0) {
			return;
		}
		// Revisar errores

		// Crear el nuevo producto
		agregarProducto({
			nombre,
			precio,
		});

		// Redireccionar al listado de productos
		navigate('/');
	};

	// Acceder al state del store
	const cargando = useSelector(state => state.productos.loading);
	const error = useSelector(state => state.productos.error);

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
							Agregar Nuevo Producto
						</h2>

						<form onSubmit={submitNuevoProducto}>
							<div className="form-group">
								<label htmlFor="nombre">
									Nombre del Producto
								</label>
								<input
									className="form-control"
									placeholder="Nombre del Producto"
									type="text"
									name="nombre"
									value={nombre}
									onChange={e => setNombre(e.target.value)}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="precio">
									Precio del Producto
								</label>
								<input
									className="form-control"
									placeholder="Precio del Producto"
									type="number"
									name="precio"
									value={precio}
									onChange={e =>
										setPrecio(Number(e.target.value))
									}
								/>
							</div>

							<button
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
								type="submit"
							>
								Agregar
							</button>
						</form>

						{cargando ? <p>Cargando...</p> : null}
						{error ? (
							<p className="alert alert-danger p2 mt-4 text-center">
								Hubo un error
							</p>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
