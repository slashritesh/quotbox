import React, { useState } from 'react'
import { Quote } from './Content'
import { useAppDispatch } from '../hooks/reduxHook'
import { createQuote } from '../Redux/slices/quoteSlice'
import { close } from '../Redux/slices/modalSlice'


const SubmitForm = () => {

  const dispatch = useAppDispatch()
  const [text,setText] = useState<string>('')

  const handleSubmit =(e : React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const id = Math.floor(Math.random() * 44) + 20 
    console.log(id);
    
    const newQuote : Quote = {
      id,
      name : text
    }

    dispatch(createQuote(newQuote))
    dispatch(close())
  }

  
  
  
  return (
    <>
    <div className="h-screen justify-center  items-center z-20 flex absolute bg-white top-0 right-0 w-full bg-opacity-50">
          <div className="bg-white border w-2/5 p-10 rounded-md">
            <form action="" onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex gap-2 flex-col">
                <label className="text-sm" htmlFor="">
                  Write your thought
                </label>
                <textarea
                  className="p-2 bg-rose-50 rounded-md"
                  onChange={(e : React.ChangeEvent<HTMLTextAreaElement>)=>setText(e.target.value)}
                  name='quote'
                  value={text}
                  id=""
                />
              </div>
              <div className="mt-5 flex justify-between">
                <button onClick={()=>dispatch(close())} className="p-2 cursor-pointer px-5 bg-slate-200 rounded-md">
                  Cancel
                </button>
                <input
                  className="p-2 cursor-pointer px-5 bg-rose-500 rounded-md text-white"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default SubmitForm