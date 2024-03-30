import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheresults:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})

export const {cacheresults} = SearchSlice.actions
export default SearchSlice.reducer