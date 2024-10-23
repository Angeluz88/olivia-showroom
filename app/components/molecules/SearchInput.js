import { useState, useMemo } from "react";
import React from 'react';
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const DATA =[
  {id: 1,
    label: "camisa rosa",
    price: "$4500"
  },
  {id: 2,
    label: "camisa azul",
    price: "$4500"
  },
  {id: 3,
    label: "camisa negra",
    price: "$4500"
  },
  {id: 4,
    label: "camisa roja",
    price: "$4500"
  }
]

const SearchInput = () => {
  const [value, setValue] = useState("");

  const filterData = useMemo(()=>{
    return DATA.filter((product)=> product.label.toLocaleLowerCase().includes(value))
  },[value])
  
  return (
    <div className={`relative hover:w-[10rem] h-[2rem]  flex items-start justify-end group transition-all shadow-md${value.length ===0? "w-0" : "w-10rem"}`}>
      <div className='absolute -right-2 w-[2rem]  h-[2rem] flex  justify-center items-center bg-pink-300 group-hover:bg-pink-600 rounded-full cursor-pointer' onClick={()=>(value.length > 0 ? setValue("") : null)}>
        {value.length<1?(
        <AiOutlineSearch color="white"/>):(<AiOutlineClose color="white"/>)
}
      </div>
      <input 
      type='text' 
      placeholder='' 
      className='w-full h-full pl-2 bg-pink-300 outline-none rounded-full'
      value={value} 
      onChange={(e)=> setValue(e.target.value)}/>
      <div className="w-full absolute top-[100%] bg-pink-300 shadow-md flex flex-col rounded-b-md">
        {value.length>0 && (
          filterData.length > 0 ? (
            filterData.map((product)=>(<span key={product.id} className="p-2 hover:bg-pink-600">
              {product.label}
            </span>))
          ): (<span className="p-2">
            NO DATA
          </span>)
        )}
      </div>
    </div>
  )
}

export default SearchInput;
