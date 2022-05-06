import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import ModalReducer from "./reducers/ModalReducer";
import CartReducer from "./reducers/CartReducer";
const rootReducers = combineReducers({
    ModalReducer,
    CartReducer
})

const store = createStore(rootReducers, applyMiddleware(reduxThunk));
export default store;