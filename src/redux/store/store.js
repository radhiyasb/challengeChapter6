import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import rootReducer from '../reducers';

//reducer : root reducer adalah kita menggunakan kumpulan reducer pada combine reducer
export default configureStore({
  //wadah yang disimpan
  reducer: rootReducer,
  
  //redux thunk menjadi middleware
  middleware: (getMiddleware)=>getMiddleware().concat(thunk)
});