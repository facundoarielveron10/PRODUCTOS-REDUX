export default function NuevoProducto() {
	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
							Agregar Nuevo Producto
						</h2>

						<form>
							<div className="form-group">
								<label htmlFor="nombre">
									Nombre del Producto
								</label>
								<input
									className="form-control"
									placeholder="Nombre del Producto"
									type="text"
									name="nombre"
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
								/>
							</div>

							<button
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
								type="submit"
							>
								Agregar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
