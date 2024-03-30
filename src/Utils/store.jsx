import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import ChatSlice from "./ChatSlice";
import SearchSlice from "./SearchSlice";


const Store=configureStore({
    reducer:{
        app:appSlice,
        search:SearchSlice,
        Chat:ChatSlice
    }

})

export default Store
