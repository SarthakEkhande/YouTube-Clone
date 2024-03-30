import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const ChatSlice=createSlice({
    name:"Chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addmessage:(state,action)=>{
            if(state.messages.length){
                state.messages.splice(OFFSET_LIVE_CHAT,1)
            }
            state.messages.push(action.payload);

        }
    }
})

export const {addmessage}=ChatSlice.actions
export default ChatSlice.reducer