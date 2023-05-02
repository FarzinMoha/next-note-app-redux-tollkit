import { addCategory } from '@/app/features/categorySlice';
import { addText } from '@/app/features/textListSlice'
import { useAppDispatch } from '@/app/hook'
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  id:'',
  date:'',
  category:'',
  text:'',
  status:false
}

const AddText = () => {
  const date = new Date()
  const router = useRouter()
  const [state , setState] = useState(initialState)
  const dispatch = useAppDispatch()
  const onChangeHandler:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback((event) => {
    const {name , value} = event.target 
    setState({...state , [name]:value})   
  }
,[state])

  const onsubmitHandler:React.FormEventHandler<HTMLFormElement> = useCallback((event)=>{
    event.preventDefault()
    dispatch(addText({...state , date:date.toISOString(), id:uuidv4()}))
    dispatch(addCategory(state.category))
    setState(initialState)
    router.push('/')
  },[state])


  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form onSubmit={onsubmitHandler} className='w-full sm:w-[80%] max-w-[700px] min-h-[400px] flex flex-col justify-start items-center'>
          <input className='text-black w-full max-w-[500px] h-[40px] rounded m-2 p-2' name='category' placeholder='Category' value={state.category} onChange={onChangeHandler} />
          <textarea className='text-black w-full max-w-[500px] h-[240px] rounded m-2 p-2' name='text' placeholder='Text' value={state.text} onChange={onChangeHandler} />
          <button type='submit' className='px-7 py-2 rounded bg-slate-400 text-black'>Add Text</button>
      </form>
    </div>
  )
}

export default AddText