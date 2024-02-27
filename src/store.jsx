import { configureStore } from "@reduxjs/toolkit";
import  Accountreducer  from "./Components/Features/Account/accountSlice"
import { customerReducer } from "./Components/Features/Customers/customerSlice"
import {persistStore,persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key : 'root',
  storage,
};

const PersistedAccountReducer = persistReducer(persistConfig,Accountreducer)

const PersistedCustomerReducer = persistReducer(persistConfig,customerReducer)


const store = configureStore({
  reducer: {
    account: PersistedAccountReducer,
    customer: PersistedCustomerReducer,
  },
});

const persistor = persistStore(store)

export {store,persistor};















// store.dispatch({type:'account/deposit' , payload: 10000})