import { textItem } from "@/type/type"
import { createSlice , PayloadAction } from "@reduxjs/toolkit"

type initialState = {
    textList:textItem[]
}
const initialState:initialState = {
    textList:[]
}

const textListSlice = createSlice({
    name:'text',
    initialState,
    reducers:{
        addText:(state=initialState , action:PayloadAction<textItem>)=>{
            state.textList = [...state.textList,action.payload]
        }
    }
})

export const {addText} = textListSlice.actions
export default textListSlice.reducer