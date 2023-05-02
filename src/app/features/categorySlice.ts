import { createSlice , PayloadAction } from "@reduxjs/toolkit";



const categorySlice = createSlice({
    name:'category',
    initialState:['All'],
    reducers:{
        addCategory:(state , action:PayloadAction<string>) =>{
            const existCategory = state.find((item:string)=>item.toLowerCase() === action.payload.toLowerCase())
            if(!existCategory){
                state.push(action.payload)
            }
        }
    }
})


export const {addCategory} = categorySlice.actions
export default categorySlice.reducer