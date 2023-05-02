import { useAppSelector } from "@/app/hook";
import Link from "next/link";
import { useCallback, useState } from "react";

const Home = () => {
  const [searchItem , setSearchItem] = useState('')
  const {textList} = useAppSelector(state=> state.text)
  const {category} = useAppSelector(state=> state.category)

  const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = useCallback((event)=>{
    setSearchItem(event.target.value)
  },[searchItem])


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="w-full max-w-[700px] flex flex-col justify-center items-center">
        <div className="w-full max-w-[700px] flex justify-center items-center">
        <input className='text-black w-full max-w-[800px] h-[40px] rounded m-2 p-2' type="search" placeholder="Search" name="searchItem" value={searchItem} onChange={onChangeHandler} />
        <select className="mx-2 px-7 py-2 w-full max-w-[200px] rounded bg-slate-400 text-black">
          {category.map((item , index)=> <option key={index}>{item}</option>)}
        </select>
        </div>
        <Link className="w-full px-2 py-2 bg-slate-400 text-black rounded m-4" href='/add-text'>Add New Text</Link>
      </div>
      <ul>
        {textList.map((item)=><li key={item.id} className="w-full max-w-[700px] flex justify-evenly items-center">
          <span>{item.category}</span>
          <span>{item.text}</span>
          <span>{item.status}</span>
        </li>)}
      </ul>
    </main>
  );
}

export default Home
