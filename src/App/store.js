import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "services/cryptoApi";

export default configureStore({
  reducer: {
    // Para cada reducer utilizado
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
