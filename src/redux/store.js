import { configureStore } from "@reduxjs/toolkit";
import size from "./size";

export default configureStore({
    reducer: {
        size
    }
});