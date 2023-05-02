import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    category:['All']
}

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        addCategory:(state , action:PayloadAction<string>) =>{
            const existCategory = state.category.find((item:string)=>item.toLowerCase() === action.payload.toLowerCase())
            if(!existCategory){
                state.category.push(action.payload)
            }
        }
    }
})


export const {addCategory} = categorySlice.actions
export default categorySlice.reducer