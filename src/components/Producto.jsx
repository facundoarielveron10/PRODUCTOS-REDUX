import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import {
    eliminarProductoAction,
    obtenerProductoEditarAction,
} from '../actions/ProductoActions';

export default function Producto({ producto }) {
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();

    // Confirmar eliminacion de un producto
    const confirmarEliminarProducto = (id) => {
        // Preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Esta accion no se puede revertir!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Pasarlo al action
                dispatch(eliminarProductoAction(id));
            }
        });
    };

    // Redireccionamiento a edicion
    const navigate = useNavigate();
    const redireccionarEdicion = (producto) => {
        dispatch(obtenerProductoEditarAction(producto));
        navigate(`/productos/editar/${producto.id}`);
    };

    return (
        <tr>
            <td>{nombre}</td>
            <td>
                <span className="font-weight-bold">$ {precio}</span>
            </td>
            <td className="acciones">
                <button
                    className="btn btn-primary mr-2"
                    type="button"
                    onClick={() => redireccionarEdicion(producto)}
                >
                    Editar
                </button>
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
