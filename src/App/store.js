import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi, cryptoNewsApi } from "services";

export default configureStore({
  reducer: {
    // Para cada reducer utilizado
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
