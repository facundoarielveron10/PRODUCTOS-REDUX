import { combineReducers } from 'redux';
import ProductoReducer from './ProductoReducer';

export default combineReducers({
	productos: ProductoReducer,
});
