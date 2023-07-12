import { combineReducers } from 'redux';
import ProductoReducer from './ProductoReducer';
import AlertaReducer from './AlertaReducer';

export default combineReducers({
	productos: ProductoReducer,
	alerta: AlertaReducer,
});
