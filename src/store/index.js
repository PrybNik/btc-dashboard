import { errorReducer } from "../modules/wallet/store/errorReducer";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../modules/wallet/store/reducer";

const rootReducer = {
  reducer,
  errorReducer,
};

export const store = configureStore({ reducer: rootReducer });
