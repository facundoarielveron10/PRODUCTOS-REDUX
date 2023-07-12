import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/ProductoActions';
import { useNavigate } from 'react-router-dom';

export default function EditarProducto() {
	const [id, setId] = useState('');
	const [nombre, setNombre] = useState('');
	const [precio, setPrecio] = useState('');

	const navigate = useNavigate();

	// Acceder al state del store
	const producto = useSelector(state => state.productos.productoeditar);

	useEffect(() => {
		setId(producto?.id);
		setNombre(producto?.nombre);
		setPrecio(producto?.precio);
	}, [producto]);

	const dispatch = useDispatch();

	const submitEditarProducto = e => {
		e.preventDefault();
		const producto = {
			id,
			nombre,
			precio,
		};
		dispatch(editarProductoAction(producto));
		navigate('/');
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
							Editar Producto
						</h2>

						<form onSubmit={submitEditarProducto}>
							<div className="form-group">
								<label htmlFor="nombre">
									Nombre del Producto
								</label>
								<input
									className="form-control"
									placeholder="Nombre del Producto"
									type="text"
									name="nombre"
									defaultValue={nombre}
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
									defaultValue={precio}
									onChange={e => setPrecio(e.target.value)}
								/>
							</div>

							<button
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
								type="submit"
							>
								Guardar Cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
